<template>
  <div class="rooms-table">
    <v-row class="mb-4">
      <v-col>
        <h2>{{ $t("admin.cases.participants") }}</h2>
      </v-col>
      <v-col class="text-right">
        <v-btn
          :title="$t('admin.cases.add')"
          color="grey darken-4 rounded-0 white--text"
          depressed
          data-test-id="add-participants-button"
        >
          {{ $t("admin.cases.add") }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="HEADERS"
          :items="caseParticipants"
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
                        data-test-id="participants-options-button"
                        icon
                        v-bind="attrs"
                        v-on="on"
                        elevation="0"
                        :title="$t('general.more')"
                      >
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
              <v-list>
                <v-list-item data-test-id="view-participant">
                  {{ $t("general.view") }}</v-list-item
                >
                <v-list-item data-test-id="edit-participant">
                  {{ $t("general.edit") }}</v-list-item
                >
                <v-list-item data-test-id="remove-participant-from-case">
                  {{ $t("admin.cases.removeFromCases") }}</v-list-item
                >
                <v-list-item data-test-id="remove-participant-from-room">
                  {{ $t("admin.cases.removeFromRoom") }}</v-list-item
                >
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
import { Case } from "@/model/meeting/meeting-ui/case";
@Component
export default class CasesTable extends Vue {
  readonly HEADERS = [
    {
      text: this.$t("admin.cases.nameHeader"),
      value: this.$t("admin.cases.nameValue"),
      sortable: true,
    },
    {
      text: "",
      value: "more",
      sortable: false,
    },
  ];

  thisCase = this.getCaseById(this.$route.params.caseId);

  thisCaseName = this.thisCase.name;

  participantIdsByCase = this.thisCase.participants;

  caseParticipants = this.participantIdsByCase.map((id) =>
    this.getParticipantsById(id)
  );

  getCaseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }

  getParticipantsById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }
}
</script>

<style lang="scss" scoped></style>
