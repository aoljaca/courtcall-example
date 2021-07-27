<template>
  <v-container fluid>
    <!-- Header -->
    <v-row>
      <v-col cols="6">
        <h2 class="font-weight-medium">
          {{ participant.name }}
        </h2>
        <br />
        <router-link
          v-if="roomId"
          :to="{ name: 'View Room', params: { roomId: this.roomId } }"
          class="font-weight-regular text-decoration-none"
        >
          <v-icon size="18" class="mb-1">mdi-arrow-left</v-icon>
          {{
            $t("admin.participants.backToRoom", {
              room: room.roomDetails.name,
            }).toUpperCase()
          }}
        </router-link>
      </v-col>
      <v-col cols="6" class="d-inline-flex justify-space-between">
        <div>
          <h3 class="font-weight-medium">
            {{
              `${$t("admin.participants.status")}: ${participantStatusLabel}`
            }}
          </h3>
          <span>
            <v-btn
              color="secondary"
              @click="onToggleStatus"
              :disabled="isEditing"
              depressed
              rounded
              text
            >
              <v-icon class="mr-2">
                {{
                  participant.active ? "mdi-pause-circle" : "mdi-play-circle"
                }}
              </v-icon>
              {{
                $t(
                  `admin.participants.buttons.${
                    participant.active ? "deactivate" : "activate"
                  }.title`
                )
              }}
            </v-btn>
          </span>
        </div>

        <span v-if="isEditing">
          <v-btn
            depressed
            tile
            color="grey lighten-1"
            class="mr-2"
            @click="onStopEditing"
          >
            {{ $t("admin.participants.buttons.cancel.title") }}
          </v-btn>
          <v-btn
            depressed
            tile
            color="secondary"
            @click="onSubmitEdits"
            :disabled="!hasUnsavedEdits"
          >
            {{ $t("admin.participants.buttons.save.title") }}
          </v-btn>
        </span>
        <v-btn v-else depressed tile color="secondary" @click="onStartEditing">
          {{ $t("admin.participants.buttons.edit.title") }}
        </v-btn>
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <!-- Participant Details -->
    <v-row>
      <v-col cols="5">
        <view-participant-details
          :participant="participant"
          :participantEdits="participantEdits"
          :isEditing="isEditing"
        />
      </v-col>

      <!-- Entry Behavior -->
      <v-col cols="6">
        <view-participant-entry-behavior
          :participant="participant"
          :participantEdits="participantEdits"
          :isEditing="isEditing"
        />
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <!-- Access Details -->
    <v-row>
      <v-col cols="5">
        <view-participant-access-details
          :participant="participant"
          :participantEdits="participantEdits"
          :isEditing="isEditing"
        />
      </v-col>
    </v-row>
    <v-row v-if="isEditing">
      <v-col class="text-right">
        <v-btn
          @click="onArchiveParticipant"
          color="secondary"
          dark
          depressed
          tile
        >
          {{ $t("admin.participants.buttons.archive.title") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { cloneDeep, isEqual } from "lodash";
import { Room } from "@/model/admin/room/room";
import ViewParticipantDetails from "./ViewParticipantDetails.vue";
import ViewParticipantEntryBehavior from "./ViewParticipantEntryBehavior.vue";
import ViewParticipantAccessDetails from "./ViewParticipantAccessDetails.vue";

@Component({
  components: {
    ViewParticipantDetails,
    ViewParticipantEntryBehavior,
    ViewParticipantAccessDetails,
  },
})
export default class ViewParticipant extends Vue {
  participant: Participant = {} as Participant;
  participantEdits: Participant = {} as Participant;
  isEditing = false;

  get room(): Room {
    return this.$store.getters["RoomModule/getById"](this.roomId);
  }

  get roomId(): string {
    return this.$route.params.roomId;
  }

  get hasUnsavedEdits(): boolean {
    return !isEqual(this.participant, this.participantEdits);
  }

  get participantStatusLabel(): string {
    return this.participant.active
      ? (this.$t("admin.participants.active") as string)
      : (this.$t("admin.participants.inactive") as string);
  }

  async mounted(): Promise<void> {
    await this.loadParticipant();

    if (this.$route.meta?.isEditing) {
      this.onStartEditing();
    }
  }

  async loadParticipant(): Promise<void> {
    const participantId = this.$route.params.participantId;
    this.participant = this.$store.getters["ParticipantsModule/getById"](
      participantId
    );
  }

  onToggleStatus(): void {
    this.participantEdits = cloneDeep(this.participant);
    this.participantEdits.active = !this.participantEdits.active;
    this.onSubmitEdits();
  }

  onArchiveParticipant(): void {
    this.participantEdits.archived = true;
    this.$store.dispatch(
      "ParticipantsModule/updateParticipant",
      this.participantEdits
    );
  }

  onStartEditing(): void {
    this.participantEdits = cloneDeep(this.participant);
    this.isEditing = true;
  }

  onStopEditing(): void {
    this.participantEdits = {} as Participant;
    this.isEditing = false;
  }

  async onSubmitEdits(): Promise<void> {
    await this.$store.dispatch(
      "ParticipantsModule/updateParticipant",
      this.participantEdits
    );
    await this.loadParticipant();
    this.onStopEditing();
  }
}
</script>

<style lang="scss" scoped></style>
