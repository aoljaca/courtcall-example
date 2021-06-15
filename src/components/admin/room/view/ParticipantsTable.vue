<template>
  <div class="rooms-table">
    <v-container fluid>
      <v-row class="mb-4">
        <v-col cols="2">
          <h2>{{ $t("admin.roomParticipants.participants") }}</h2>
        </v-col>
        <v-col cols="2">
          <v-select
            v-model="filterByCaseIds"
            multiple
            clearable
            item-text="name"
            item-value="id"
            label="Filter By Case"
            :items="uniqueParticipantCases"
          />
        </v-col>
        <v-col class="text-right">
          <v-btn
            :title="$t('admin.roomParticipants.add')"
            color="grey darken-4 rounded-0 white--text"
            depressed
          >
            {{ $t("admin.roomParticipants.add") }}
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
            <template v-slot:[`item.active`]="{ item }">
              <v-icon v-if="item.active" color="green"> mdi-circle </v-icon>
              <v-icon v-else color="gray"> mdi-circle </v-icon>
            </template>

            <template v-slot:[`item.caseNumber`]="{ item }">
              <div class="py-1 px-1 d-inline-block" v-if="item.caseNumber">
                {{ getCaseById(item.caseId).number }}
              </div>
              <div class="py-1 px-1 d-inline-block" v-else>
                {{ $t("admin.roomParticipants.notApply") }}
              </div>
            </template>

            <template v-slot:[`item.caseName`]="{ item }">
              <div class="py-1 px-1 d-inline-block" v-if="item.caseId">
                {{ getCaseById(item.caseId).name }}
              </div>
              <div class="py-1 px-1 d-inline-block" v-else>
                {{ $t("admin.roomParticipants.notApply") }}
              </div>
            </template>

            <template v-slot:[`item.role`]="{ item }">
              <div
                class="py-1 px-1 d-inline-block"
                v-for="id in item.roles"
                :key="id"
              >
                {{ roleName(id) }}
              </div>
            </template>

            <template v-slot:[`item.more`]="">
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
                        </v-btn></v-col
                      >
                    </v-row>
                  </v-container>
                </template>
                <v-list>
                  <v-list-item>{{ $t("general.view") }}</v-list-item>
                  <v-list-item>{{ $t("general.edit") }}</v-list-item>
                  <v-list-item>{{ $t("general.archive") }}</v-list-item>
                </v-list>
              </v-menu>
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
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { uniq } from "lodash";
@Component
export default class ParticpantsTable extends Vue {
  readonly HEADERS = [
    {
      text: "Active",
      value: "active",
    },
    {
      text: "Name",
      value: "name",
    },
    {
      text: "Case Number",
      value: "caseNumber",
    },
    {
      text: "Case Name",
      value: "caseName",
    },
    {
      text: "Role",
      value: "role",
    },
    {
      text: "More",
      value: "more",
    },
  ];

  participantsData = this.$store.getters["ParticipantsModule/getAsList"];
  participantsByRoom: Participant[] = this.participantsData.filter(
    (p: { roomId: string }) => p.roomId === this.$route.params.roomId
  );
  filterByCaseIds: string[] = [];

  get uniqueParticipantCases(): Case[] {
    const allCaseIds: string[] = this.participantsByRoom.map(
      (p) => p.caseId || ""
    );
    const uniqueCaseIds: string[] = uniq(allCaseIds);
    const uniqueCases: Case[] = this.getCasesAsList().filter((c) =>
      uniqueCaseIds.includes(c.id)
    );
    return uniqueCases;
  }

  get filteredParticipants(): Participant[] {
    return this.filterByCaseIds.length
      ? this.participantsByRoom.filter((p) =>
          this.filterByCaseIds.includes(p.caseId || "")
        )
      : this.participantsByRoom;
  }

  getCaseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }
  getCasesAsList(): Case[] {
    return this.$store.getters["CasesModule/getAsList"];
  }
  roleName(id: string): string {
    return this.$store.getters["PermissionsModule/getRoleById"](id)?.name;
  }
}
</script>

<style lang="scss" scoped></style>
