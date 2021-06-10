<template>
  <div class="rooms-table">
    <v-row class="mb-4">
      <v-col>
        <h2>Scheduled Participants</h2>
      </v-col>
      <v-col class="text-right">
        <v-btn :title="$t('admin.roomCases.add')" color="grey darken-4 rounded-0 white--text" depressed>
          ADD
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="HEADERS"
          :items="filteredParticipants"
          :items-per-page="20"
          class="elevation-1"
        >
          
          <template class="text-right" v-slot:[`item.more`]="">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-container fluid>
                  <v-row>
                    <v-col class="pa-0 d-flex justify-end">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        elevation="0"
                        :title="$t('general.more')"
                      >
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn></v-col
                    >
                  </v-row>
                </v-container>
              </template>
              <v-list>
                <v-list-item>{{ $t("general.view") }}</v-list-item>
                <v-list-item>{{ $t("general.edit") }}</v-list-item>
                <v-list-item>Remove From Cases</v-list-item>
                <v-list-item>Remove From Room (Archive)</v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
@Component
export default class CasesTable extends Vue {
  readonly HEADERS = [
    {
      text: "Name",
      value: "name",
      sortable: true,
    },
    {
      text: "",
      value: "more",
      sortable: false,
    },
  ];

  // get participants data
  participantsData = this.$store.getters["ParticipantsModule/getAsList"];

  // filter participants by caseId
  filteredParticipants = this.participantsData.filter(
    (p: { caseId: string }) => p.caseId === this.$route.params.caseId
  );

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }

  // get cases by case id
  // iterate over list of participants in that case

}
</script>

<style lang="scss" scoped></style>
