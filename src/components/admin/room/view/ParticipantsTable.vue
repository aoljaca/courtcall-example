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
            :to="createParticipantRoute"
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

            <template v-slot:[`item.name`]="{ item }">
              <router-link
                :to="{
                  name: 'Participant',
                  params: {
                    roomId: roomId,
                    participantId: item.id,
                  },
                }"
                class="c-secondary"
              >
                <span class="font-weight-bold">{{ item.name }}</span>
                <template v-if="item.label"> ({{ item.label }}) </template>
              </router-link>
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
              <div class="py-1 px-1 d-inline-block">
                {{ item.role }}
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
                        </v-btn></v-col
                      >
                    </v-row>
                  </v-container>
                </template>
                <v-list>
                  <div
                    v-for="(menuItem, index) in menuItems"
                    :key="`menu-item-${index}`"
                  >
                    <v-list-item
                      v-if="
                        !menuItem.displayCondition ||
                        menuItem.displayCondition(item)
                      "
                      :to="menuItem.route ? menuItem.route(item) : undefined"
                      link
                      @click="menuItem.click ? menuItem.click(item) : undefined"
                      >{{ menuItem.label }}</v-list-item
                    >
                  </div>
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
import { Case } from "@/model/meeting/meeting-ui/case";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { uniq } from "lodash";
@Component
export default class ParticpantsTable extends Vue {
  readonly HEADERS = [
    {
      text: this.$t("admin.roomParticipants.activeHeader"),
      value: "active",
    },
    {
      text: this.$t("admin.roomParticipants.nameHeader"),
      value: "name",
    },
    {
      text: this.$t("admin.roomParticipants.caseNumberHeader"),
      value: "caseNumber",
    },
    {
      text: this.$t("admin.roomParticipants.caseNameHeader"),
      value: "caseName",
    },
    {
      text: this.$t("admin.roomParticipants.roleHeader"),
      value: "role",
    },
    {
      text: this.$t("admin.roomParticipants.moreHeader"),
      value: "more",
    },
  ];

  menuItems = [
    {
      label: this.$t("general.view"),
      route: (p: Participant): any => {
        return {
          name: "Participant",
          params: {
            roomId: this.roomId,
            participantId: p.id,
          },
        };
      },
    },
    {
      label: this.$t("general.edit"),
      route: (p: Participant): any => {
        return {
          name: "Edit Participant",
          params: {
            roomId: this.roomId,
            participantId: p.id,
          },
        };
      },
    },
    {
      label: this.$t("general.archive"),
      click: async (p: Participant): Promise<void> =>
        await this.onArchiveParticipant(p),
      displayCondition: (p: Participant): boolean => !p.archived!,
    },
  ];

  filterByCaseIds: string[] = [];

  get roomId(): string {
    return this.$route.params.roomId;
  }

  get participantsByRoom(): Participant[] {
    return this.$store.getters["ParticipantsModule/getParticipantsByRoomId"](
      this.roomId
    );
  }

  get uniqueParticipantCases(): Case[] {
    const allCaseIds: string[] = this.participantsByRoom.map(
      (p) => p.caseId || ""
    );
    const uniqueCaseIds: string[] = uniq(allCaseIds);
    const uniqueCases: Case[] = this.casesAsList.filter((c) =>
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

  get createParticipantRoute(): any {
    return {
      name: "Create Participant",
      params: {
        roomId: this.roomId,
        participantId: undefined,
      },
    };
  }

  get casesAsList(): Case[] {
    return this.$store.getters["CasesModule/getAsList"];
  }

  getCaseById(id: string): Case {
    return this.$store.getters["CasesModule/getById"](id);
  }

  roleName(id: string): string {
    return this.$store.getters["PermissionsModule/getRoleById"](id)?.name;
  }

  async onArchiveParticipant(participant: Participant): Promise<void> {
    participant.archived = true;
    return await this.$store.dispatch(
      "ParticipantsModule/updateParticipant",
      participant
    );
  }
}
</script>

<style lang="scss" scoped></style>
