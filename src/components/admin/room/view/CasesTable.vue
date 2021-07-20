<template>
  <div class="rooms-table">
    <v-row class="mb-4">
      <v-col>
        <h2>{{ $t("admin.roomCases.cases") }}</h2>
      </v-col>
      <v-col class="text-right">
        <v-btn
          data-test-id="add-case-button"
          :title="$t('admin.roomCases.add')"
          color="grey darken-4 rounded-0 white--text"
          depressed
          :to="{
            name: 'Create Case',
            params: {
              roomId,
            }
          }"
        >
          {{ $t("admin.roomCases.add") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-data-table
          :headers="HEADERS"
          :items="filteredCases"
          :items-per-page="20"
          class="elevation-1"
        >
          <template v-slot:[`item.live`]="{ item }">
            <v-icon v-if="item.live" color="green"> mdi-circle </v-icon>
            <v-icon v-else color="gray"> mdi-circle </v-icon>
          </template>

          <template v-slot:[`item.name`]="{ item }">
            <router-link
              :to="{
                name: 'View Case',
                params: {
                  roomId,
                  caseId: item.id,
                },
              }"
              class="c-secondary font-weight-bold"
              >{{ item.name }}
            </router-link>
          </template>

          <template v-slot:[`item.scheduledParticipants`]="{ item }">
            <div
              class="py-1 px-1 d-inline-block"
              v-for="id in item.participants"
              :key="id"
            >
              <router-link
                class="c-secondary"
                :to="{
                  name: 'Participant',
                  params: { roomId, participantId: id },
                }"
              >
                {{ getParticipantNameLabel(id) }}
              </router-link>
            </div>
          </template>

          <template v-slot:[`item.more`]="{ item }">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-container fluid>
                  <v-row>
                    <v-col class="pa-0">
                      <v-btn
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
                <v-list-item
                  link
                  :to="{
                    name: 'View Case',
                    params: { caseId: item.id },
                  }"
                >
                  {{ $t("general.view") }}
                </v-list-item>
                <v-list-item
                  link
                  :to="{
                    name: 'Edit Case',
                    params: { caseId: item.id },
                  }"
                >
                  {{ $t("general.edit") }}
                </v-list-item>
                <v-list-item>
                  {{ $t("general.archive") }}
                </v-list-item>
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
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Case } from "@/model/meeting/meeting-ui/case";
@Component
export default class CasesTable extends Vue {
  readonly HEADERS = [
    {
      text: this.$t("admin.roomCases.liveHeader"),
      value: this.$t("admin.roomCases.liveHeader"),
    },
    {
      text: this.$t("admin.roomCases.caseNumberHeader"),
      value: "number",
    },
    {
      text: this.$t("admin.roomCases.caseNameHeader"),
      value: "name",
    },
    {
      text: this.$t("admin.roomCases.scheduledParticipantsHeader"),
      value: "scheduledParticipants",
    },
    {
      text: this.$t("admin.roomCases.moreHeader"),
      value: "more",
    },
  ];

  casesData = this.$store.getters["CasesModule/getAsList"];
  filteredCases: Case[] = this.casesData.filter(
    (c: { roomId: string }) => c.roomId === this.$route.params.roomId
  );

  get roomId(): string {
    return this.$route.params.roomId;
  }

  getParticipantNameLabel(id: string): string {
    const participant = this.getParticipantById(id);
    return participant.label
      ? `${participant.name} (${participant.label})`
      : participant.name;
  }

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }
}
</script>

<style lang="scss" scoped></style>
