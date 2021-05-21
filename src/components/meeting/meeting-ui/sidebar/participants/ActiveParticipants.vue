<template>
  <div id="activeParticipants">
    <v-container fluid>
      <v-row>
        <v-col>
          <v-text-field
            :label="$t('sidebar.participants.activeParticipants.searchLabel')"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-for="p in participantsWithoutCase" :key="p.id">
        <v-col>
          <participant-control :participant="p"></participant-control>
        </v-col>
      </v-row>
      <v-row v-for="c in cases" :key="c.id">
        <v-col cols="12"
          ><span class="font-weight-bold"
            >{{ formatCase(c) }} ({{ caseSize(c) }})</span
          ></v-col
        >
        <v-col cols="12" v-for="p in participantsForCase(c)" :key="p.id">
          {{ p.name }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { CaseFormatService } from "@/services/case-format";
import { inject } from "inversify-props";
import { Component, Vue } from "vue-property-decorator";
import ParticipantControl from "./ParticipantControl.vue";
@Component({
  components: {
    ParticipantControl,
  },
})
export default class ActivePartcipantsView extends Vue {
  @inject(INJECTION_TYPES.CASE_FORMAT)
  caseFormatService: CaseFormatService | undefined;
  get participantsWithoutCase(): Participant[] {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    return participants.filter((p) => p.caseId == null);
  }

  get cases(): Case[] {
    return this.$store.getters["CasesModule/getAsList"];
  }

  participantsForCase(c: Case): Participant[] {
    const participants: Participant[] = this.$store.getters[
      "ParticipantsModule/getAsList"
    ];
    return participants.filter((p) => p.caseId === c.id);
  }
  caseSize(c: Case): number {
    return this.participantsForCase(c).length;
  }

  formatCase(c: Case): string | undefined {
    return this.caseFormatService?.formatCase(c);
  }
}
</script>