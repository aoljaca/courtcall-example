<template>
  <div id="participantsSidebar">
    <v-container fluid>
      <v-row>
        <v-col
          ><h2>
            {{ $t("sidebar.participants.title") }} ({{ participantSize }})
          </h2>
        </v-col>
      </v-row>
      <v-row
        ><v-col>
          <v-select
            v-model="selectedParticipantView"
            :items="possibleParticipantViews"
            :item-text="formatParticipantViewType"
            return-object
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="content-row">
        <v-col class="px-0 py-0">
          <active-partcipants-view
            v-if="selectedParticipantViewType === 'activeParticipants'"
          ></active-partcipants-view>
          <cases-view
            v-if="selectedParticipantViewType === 'cases'"
          ></cases-view>
          <room-overview
            v-if="selectedParticipantViewType === 'roomOverview'"
          ></room-overview>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Vue } from "vue-property-decorator";
import {
  ParticipantView,
  PARTICIPANT_VIEW_TYPES,
} from "@/model/meeting/meeting-ui/side-bar/participants/participant-view";
import ActivePartcipantsView from "./ActiveParticipants.vue";
import CasesView from "./Cases.vue";
import RoomOverview from "./RoomOverview.vue";
@Component({
  components: {
    ActivePartcipantsView,
    CasesView,
    RoomOverview,
  },
})
export default class ParticipantMainView extends Vue {
  get participantSize(): number {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    return participants.length;
  }

  possibleParticipantViews: ParticipantView[] = PARTICIPANT_VIEW_TYPES;

  selectedParticipantView: ParticipantView = PARTICIPANT_VIEW_TYPES[1];

  get selectedParticipantViewType() {
    return this.selectedParticipantView?.type;
  }

  formatParticipantViewType(type: ParticipantView): any {
    return this.$t(type.label);
  }
}
</script>
<style lang="scss" scoped>
.content-row {
  max-height: 70vh;
  overflow-y: auto;
}
</style>