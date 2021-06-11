<template>

  <v-container fluid>
        <div class="su-header">
        <v-row class="py-4">
          <v-col class="ml-8">
            <span
              class="grey--text text--lighten-1 font-weight-bold text-subtitle-1"
              >{{ $t("admin.systemUser.dashboard") }}</span
            >
            <span class="font-weight-bold">
              Judge Frank's Room >
            </span>
            <span class="font-weight-bold">
              {{ thisCaseName }}
            </span>
          </v-col>
        </v-row>
      </div>
    <v-row id="case-view">
      <v-col>
        <v-row class="mb-4">
          <v-col>
            <h2>
              {{ thisCaseName }}
            </h2>
          </v-col>
          <v-col class="text-right">
            <v-btn :title="$t('admin.cases.edit')" color="grey darken-4 rounded-0 white--text" depressed>
              EDIT
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="py-4">
          <v-col>
            > Back to Judge Frank's Room
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="py-4">
    </v-divider>
    <v-row id="scheduled-participants-table">
      <v-col>
        <scheduled-participants-table>
        </scheduled-participants-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ScheduledParticipantsTable from "@/components/admin/case/view/ScheduledParticipantsTable.vue";
import "reflect-metadata";
import { Case } from "@/model/meeting/meeting-ui/case";
@Component({
  components: {
    ScheduledParticipantsTable
  },
})
export default class CaseView extends Vue {
  thisCase = this.getCaseById(this.$route.params.caseId);

  thisCaseName = this.thisCase.name;

  getCaseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }
}
</script>

<style lang="scss" scoped>
.su-header {
  border-bottom: 1px solid gray;
}
</style>
