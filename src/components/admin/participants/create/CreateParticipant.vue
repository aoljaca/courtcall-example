<template>
  <v-container fluid>
    <!-- Participant Details -->
    <v-row>
      <v-col cols="5">
        <create-participant-details :participant="participant" />
      </v-col>

      <!-- Entry Behavior -->
      <v-col cols="5">
        <create-participant-entry-behavior :participant="participant" />
      </v-col>

      <v-col class="text-right">
        <span>
          <v-btn
            depressed
            tile
            color="grey lighten-1"
            class="mr-2"
            :to="{ name: 'View Room', params: { roomId: roomId } }"
          >
            {{ $t("admin.participants.buttons.cancel.title") }}
          </v-btn>
          <v-btn
            depressed
            tile
            color="secondary"
            @click="onFinishCreate"
            :disabled="!hasUnsavedChanges"
          >
            {{ $t("admin.participants.buttons.save.title") }}
          </v-btn>
        </span>
      </v-col>
    </v-row>

    <br />
    <v-divider />
    <br />

    <!-- Access Details -->
    <v-row>
      <v-col cols="6">
        <create-participant-access-details :participant="participant" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { isEqual } from "lodash";
import CreateParticipantDetails from "./CreateParticipantDetails.vue";
import CreateParticipantEntryBehavior from "./CreateParticipantEntryBehavior.vue";
import CreateParticipantAccessDetails from "./CreateParticipantAccessDetails.vue";

@Component({
  components: {
    CreateParticipantDetails,
    CreateParticipantEntryBehavior,
    CreateParticipantAccessDetails,
  },
})
export default class ViewParticipant extends Vue {
  participant: Participant = {} as Participant;

  get hasUnsavedChanges(): boolean {
    return !isEqual(this.participant, {});
  }

  get roomId(): string {
    return this.$route.params.roomId;
  }

  async onFinishCreate(): Promise<void> {
    await this.$store.dispatch(
      "ParticipantsModule/addParticipant",
      this.participant
    );
    this.$router.push({
      name: "Room View Manage",
    });
  }
}
</script>

<style lang="scss" scoped></style>
