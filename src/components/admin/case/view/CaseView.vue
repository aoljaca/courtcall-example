<template>
  <v-container>
    <v-row id="replace-with-breadcrumb">
      <v-col>
        Dashboard > Judge Frank's Room > Case Name
      </v-col>
    </v-row>
    <v-row id="case-view">
      <v-col>
        <v-row class="mb-4">
          <v-col>
            <h2>Something else</h2>
          </v-col>
          <v-col class="text-right">
            <v-btn :title="$t('admin.cases.edit')" color="grey darken-4 rounded-0 white--text" depressed>
              EDIT
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            Back to a judge's room
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
@Component({
  components: {
    ScheduledParticipantsTable
  },
})
export default class CaseView extends Vue {}
</script>

<style lang="scss" scoped>
</style>
