<template>
  <v-container fluid>
    <v-row>
      <v-col>
        Dashboard > Judge Frank's Room > Case Name
      </v-col>
    </v-row>
    <v-row id="case-view">
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
