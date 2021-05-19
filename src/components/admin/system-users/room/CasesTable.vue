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
  data() {
    return {
      headers: [
        { text: "Active", value: "active", align: "center" },
        { text: "Case Number", value: "caseNumber", align: "center" },
        { text: "Case Name", value: "caseName", align: "center" },
        { text: "Scheduled Participants", value: "scheduledParticipants", align: "center" },
        { text: " ", value: "more", align: "center" },
      ],
      tableData: [
        {
          active: true,
          caseNumber: "1234567890",
          caseName: "Boris v. Natasha",
          scheduledParticipants: "Olivia Coleman, Viola Davis, Tom Hanks + 5 More",
          more: "",
        },
        {
          active: false,
          caseNumber: "2345678901",
          caseName: "Carrell Arbitration",
          scheduledParticipants: "Danny Trejo, Steve Carrell, Viola Davis + 3 More",
          more: "",
        },
        {
          active: false,
          caseNumber: "3456789012",
          caseName: "Boris v. Natasha",
          scheduledParticipants: "Boris Smith, Natasha Smith",
          more: "",
        },
      ],
    };
  }
}
</script>

<style lang="scss" scoped></style>



