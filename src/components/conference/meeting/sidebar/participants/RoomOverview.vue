<template>
  <div id="roomOverview">
    <v-container fluid
      ><v-row>
        <v-col>
          <v-text-field
            :label="$t('sidebar.participants.searchLabel')"
            append-icon="mdi-magnify"
            v-model="searchTerm"
          ></v-text-field
        ></v-col>
      </v-row>
      <div v-if="moving === 'none'">
        <v-row>
          <v-col>
            <v-btn @click="startMove()" elevation="0">{{
              $t("sidebar.participants.roomOverview.moveParticipants")
            }}</v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-else-if="moving === 'moving'">
        <v-row>
          <v-col>
            <label for="move-select" class="font-weight-bold">
              {{ $t("sidebar.participants.roomOverview.move") }}
            </label>
            <v-select
              id="move-select"
              :items="subconferences"
              item-text="displayName"
              v-model="subConferencesToMove"
              return-object
              multiple
              chips
            >
              <template v-slot:prepend-item>
                <v-list-item ripple @click="toggleSelectAll()">
                  <v-list-item-action>
                    <v-icon>{{ icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      $t("general.selectAll")
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <label class="font-weight-bold" for="destination-select">{{
              $t("sidebar.participants.roomOverview.to")
            }}</label>
            <v-select
              id="destination-select"
              :items="subconferences"
              item-text="displayName"
              v-model="subconferenceDestination"
              return-object
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="0" @click="cancelMove()">{{
              $t("general.cancel")
            }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn elevation="0" @click="proceedWithMove()">{{
              $t("sidebar.participants.roomOverview.move")
            }}</v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-row>
          <v-col class="d-flex justify-center">{{ confirmString }}</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="0" @click="cancelMove()">{{
              $t("general.cancel")
            }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn elevation="0" @click="actuallyMove()">{{
              $t("sidebar.participants.roomOverview.move")
            }}</v-btn>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="s in subconferences" :key="s.id">
              <v-expansion-panel-header
                >{{ s.displayName }} ({{
                  subconferenceSize(s)
                }})</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-row v-for="p in participantsInSubconference(s)" :key="p.id">
                  <v-col>
                    <participant-control :participant="p"></participant-control>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import ParticipantSearchService from "@/services/participant-search";
import { Component, Vue } from "vue-property-decorator";
import ParticipantControl from "./ParticipantControl.vue";
@Component({
  components: {
    ParticipantControl,
  },
})
export default class RoomOverview extends Vue {
  moving: "none" | "moving" | "confirm" = "none";
  searchTerm = "";

  subConferencesToMove: SubConference[] = [];

  possibleSubconferences: SubConference[] = this.$store.getters[
    "SubconferenceModule/getAsList"
  ];
  subconferenceDestination: SubConference | null = null;

  get subconferences(): SubConference[] {
    return this.$store.getters["SubconferenceModule/getAsList"];
  }

  participantsInSubconference(s: SubConference): Participant[] {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    return participants
      .filter((p) => p.subconferenceId === s.id)
      .filter((p) =>
        ParticipantSearchService.search({
          term: this.searchTerm,
          participant: p,
          case: null,
        })
      );
  }

  subconferenceSize(s: SubConference): number {
    return this.participantsInSubconference(s).length;
  }

  startMove(): void {
    this.moving = "moving";
  }

  toggleSelectAll(): void {
    this.$nextTick(() => {
      const subconferences = this.subconferences;

      if (subconferences.length === this.subConferencesToMove.length) {
        this.subConferencesToMove = [];
      } else {
        this.subConferencesToMove = [...subconferences];
      }
    });
  }

  cancelMove(): void {
    this.subconferenceDestination = null;
    this.subConferencesToMove = [];
    this.moving = "none";
  }

  proceedWithMove(): void {
    this.moving = "confirm";
  }

  actuallyMove(): void {
    this.subconferenceDestination = null;
    this.subConferencesToMove = [];
    this.moving = "none";
  }

  get icon(): string {
    const subconferences: SubConference[] = this.subconferences;
    if (this.$data.subConferencesToMove.length === subconferences.length)
      return "mdi-close-box";
    if (this.$data.subConferencesToMove.length > 0) return "mdi-minus-box";
    return "mdi-checkbox-blank-outline";
  }

  get participantsToMove(): Participant[] {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    const subconferenceIds = this.subConferencesToMove.map((s) => s.id);
    const subconferenceIdSet = new Set(subconferenceIds);
    return participants.filter(
      (p) =>
        p.subconferenceId != null && subconferenceIdSet.has(p.subconferenceId)
    );
  }

  get confirmString(): any {
    return this.$t("sidebar.participants.roomOverview.moveConfirm", {
      participantNumber: this.participantsToMove.length,
    });
  }
}
</script>
