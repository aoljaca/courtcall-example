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
    </v-container>
  </div>
</template>
<script lang="ts">
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ParticipantMainView extends Vue {
  get participantSize(): number {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    return participants.length;
  }
}
</script>