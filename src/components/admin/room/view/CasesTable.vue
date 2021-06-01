<template>
  <div class="rooms-table">
    <v-container fluid>
      <v-row class="mb-4">
        <v-col>
          <h2>Cases</h2>
        </v-col>
        <v-col class="text-right">
          <v-btn
          color="grey darken-4 rounded-0 white--text"
          depressed
          >
            ADD
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="tableData"
            :items-per-page="20"
            class="elevation-1"
          >
            <template v-slot:item.active="{ item }">
              <v-icon v-if="item.active" color="green">mdi-circle</v-icon>
              <v-icon v-else color="gray">mdi-circle</v-icon>
            </template>

            <template v-slot:item.more="{ item }">
              <v-icon :color="item.more">mdi-dots-horizontal</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class CasesTable extends Vue {
  headers = [
    { text: "Active", value: "active" },
    { text: "Case Number", value: "caseNumber" },
    { text: "Case Name", value: "caseName" },
    { text: "Scheduled Participants", value: "scheduledParticipants" },
    { text: "More", value: "more" },
  ];

  tableData = [
    {
      active: true,
      caseNumber: "1234567890",
      caseName: "Boris v. Natasha",
      scheduledParticipants: "Olivia Coleman, Viola Davis, Tom Hanks + 5 More",
    },
    {
      active: false,
      caseNumber: "2345678901",
      caseName: "Carrell Arbitration",
      scheduledParticipants: "Danny Trejo, Steve Carrell, Viola Davis + 3 More",
    },
    {
      active: false,
      caseNumber: "3456789012",
      caseName: "Boris v. Natasha",
      scheduledParticipants: "Boris Smith, Natasha Smith",
    },
  ];
}
</script>

<style lang="scss" scoped></style>



