<template>
  <div class="rooms-table">
    <v-container fluid>
      <v-row class="mb-4">
        <v-col cols="2">
          <h2>Participants</h2>
        </v-col>
        <v-col cols="2">
          <v-select label="Filter By Case">
          </v-select>
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
        { text: "Name", value: "name", align: "center" },
        { text: "Case Number", value: "caseNumber", align: "center" },
        { text: "Case Name", value: "caseName", align: "center" },
        { text: "Role", value: "role", align: "center" },
        { text: " ", value: "more", align: "center" },
      ],
      tableData: [
        {
          active: true,
          name: "Danny Trejo",
          caseNumber: "1234567890",
          caseName: "Boris v. Natasha",
          role: "Scheduled Participant (Dedicated)",
          more: "",
        },
        {
          active: true,
          name: "Olivia Coleman",
          caseNumber: "N/A",
          caseName: "N/A",
          role: "Participant (Shared)",
          more: "",
        },
        {
          active: false,
          name: "Tom Hanks",
          caseNumber: "3456789012",
          caseName: "Up v. Down",
          role: "Participant (Dedicated)",
          more: "",
        },
      ],
    };
  }
}
</script>

<style lang="scss" scoped></style>