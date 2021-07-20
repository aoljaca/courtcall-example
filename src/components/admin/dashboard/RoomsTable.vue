<template>
  <div class="rooms-table">
    <v-container>
      <template v-if="!hideHeader">
        <v-row>
          <v-col class="text-h4" cols="1">
            {{ $t("admin.dashboard.rooms") }}
          </v-col>
          <v-col cols="2">
            <v-select
              :items="itemsInFilterSelect"
              return-object
              item-text="text"
              v-model="selectedFilter"
              :label="$t('admin.dashboard.filter')"
              data-test-id="rooms-table-select"
            >
            </v-select>
          </v-col>
          <v-col
            class="d-flex align-center"
            v-if="selectedFilter.type === 'dateRange'"
            cols="4"
            md="1"
          >
            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              :transition="scale - transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on">
                  {{ $t("admin.dashboard.selectDates") }}
                </v-btn>
              </template>
              <v-date-picker
                no-title
                scrollable
                range
                v-model="dateRange"
                :max="maxDate"
              ></v-date-picker>
              <!-- <v-spacer></v-spacer>
              <v-footer color="white" :padless="true"
                ><v-container fluid>
                  <v-row>
                    <v-col>
                      <v-btn text color="primary" @click="dateMenu = false">
                        {{ $t("general.cancel") }}
                      </v-btn></v-col
                    >
                    <v-col class="d-flex justify-end">
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        {{ $t("general.ok") }}</v-btn
                      ></v-col
                    >
                  </v-row>
                </v-container></v-footer
              > -->
            </v-menu>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              data-test-id="creat-room-button"
              color="grey darken-2"
              elevation="2"
              fab
              :title="$t('admin.dashboard.add')"
              :to="{
                name: 'Create Room',
                params: {
                  roomId: undefined,
                },
              }"
            >
              <v-icon color="white" x-large> mdi-plus </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              :title="$t('admin.dashboard.refresh')"
              color="grey darken-4 rounded-0 white--text"
              depressed
              data-test-id="refresh-list-button"
            >
              <span>
                {{ $t("admin.dashboard.refresh") }}
              </span>
              <v-icon> mdi-refresh </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
      <v-row>
        <v-col>
          <v-data-table
            :headers="HEADERS"
            :items="filteredRooms"
            :items-per-page="20"
            class="elevation-1"
          >
            <template v-slot:[`item.active`]="{ item }">
              <v-icon v-if="item.active"> mdi-circle </v-icon>
            </template>
            <template v-slot:[`item.support`]="{ item }">
              <v-chip class="pl-0">
                <v-chip color="grey darken-1" class="mr-2">
                  {{ getActiveIssues(item.uuid).length }}
                </v-chip>
                <span>
                  {{ $t("admin.dashboard.requests") }}
                </span>
              </v-chip>
            </template>
            <template v-slot:[`item.name`]="{ item }">
              <v-list>
                <v-list-item
                  class="px-0 mx-0 font-weight-black"
                  data-test-id="room-link"
                  link
                  :to="{
                    name: 'View Room',
                    params: { roomId: item.uuid },
                  }"
                >
                  {{ item.roomDetails.name }}
                </v-list-item>
              </v-list>
            </template>
            <template v-slot:[`item.systemUsers`]="{ item }">
              <v-row>
                <v-col>
                  {{ getSystemUsers(item.uuid).length }}
                </v-col>
                <v-col>
                  <div
                    v-for="name in getSystemUserNames(item)"
                    :key="`room-${item.uuid}-system-user-${name}`"
                  >
                    <v-chip outlined>
                      {{ name }}
                    </v-chip>
                  </div>
                </v-col>
              </v-row>
            </template>
            <template v-slot:[`item.participants`]="{ item }">
              {{ getParticipantsByRoomId(item.uuid).length }}
            </template>
            <template v-slot:[`item.streaming`]="{ item }">
              <v-icon v-if="item.roomSettings.streaming"> mdi-wifi </v-icon>
            </template>
            <template v-slot:[`item.recording`]="{ item }">
              <v-icon v-if="item.roomSettings.recording" color="grey">
                mdi-circle
              </v-icon>
            </template>
            <template v-slot:[`item.details`]="{ item }">
              {{ item.roomDetails.details }}
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
                  <v-list-item data-test-id="join-room">
                    {{ $t("admin.dashboard.join") }}
                  </v-list-item>
                  <v-list-item
                    data-test-id="room-details"
                    link
                    :to="{
                      name: 'View Room',
                      params: {
                        roomId: item.uuid,
                      },
                    }"
                  >
                    {{ $t("admin.dashboard.detailsHeader") }}
                  </v-list-item>
                  <v-list-item
                    data-test-id="room-participants"
                    link
                    :to="{
                      name: 'View Room',
                      params: {
                        roomId: item.uuid,
                      },
                      query: {
                        navTo: 'participantsTable',
                      },
                    }"
                  >
                    {{ $t("admin.dashboard.participantsHeader") }}
                  </v-list-item>
                  <v-list-item
                    data-test-id="room-cases"
                    link
                    :to="{
                      name: 'View Room',
                      params: {
                        roomId: item.uuid,
                      },
                      query: {
                        navTo: 'casesTable',
                      },
                    }"
                  >
                    {{ $t("admin.dashboard.cases") }}
                  </v-list-item>
                  <v-list-item
                    data-test-id="room-activity"
                    link
                    :to="{
                      name: 'Room Activity',
                      params: {
                        roomId: item.uuid,
                      },
                    }"
                  >
                    {{ $t("admin.dashboard.activity") }}
                  </v-list-item>
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
import { Component, Prop, Vue } from "vue-property-decorator";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { SupportItem } from "@/model/admin/support/support-item";
import { DateTime } from "luxon";
import { Room } from "@/model/admin/room/room";
@Component
export default class RoomsTable extends Vue {
  @Prop()
  rooms!: Room[];
  @Prop()
  hideHeader?: boolean;

  readonly HEADERS = [
    {
      text: this.$t("admin.dashboard.activeHeader"),
      value: "active",
    },
    {
      text: this.$t("admin.dashboard.supportHeader"),
      value: "support",
      filterable: false,
    },
    {
      text: this.$t("admin.dashboard.nameHeader"),
      value: "name",
      filterable: false,
    },
    {
      text: this.$t("admin.dashboard.systemUserHeader"),
      value: "systemUsers",
      filterable: false,
    },
    {
      text: this.$t("admin.dashboard.participantsHeader"),
      value: "participants",
      filterable: false,
    },
    {
      text: this.$t("admin.dashboard.streamHeader"),
      value: "streaming",
    },
    {
      text: this.$t("admin.dashboard.recordHeader"),
      value: "recording",
    },
    {
      text: this.$t("admin.dashboard.detailsHeader"),
      value: "details",
      filterable: false,
    },
    {
      text: this.$t("admin.dashboard.moreHeader"),
      value: "more",
      filterable: false,
    },
  ];

  roomsData = this.$store.getters["RoomModule/getAsList"];

  getParticipantsByRoomId(roomId: string): Participant[] {
    return this.$store.getters["ParticipantsModule/getParticipantsByRoomId"](
      roomId
    );
  }

  getSystemUsers(roomId: string): any[] {
    const filteredParticipants = this.getParticipantsByRoomId(roomId);
    return filteredParticipants.filter((p) => p.systemUser === true);
  }

  getSystemUserNames(item: { uuid: string }): string[] {
    return this.getSystemUsers(item.uuid).map((su) => su.name);
  }

  getActiveIssues(roomId: string): SupportItem[] {
    return this.$store.getters["SupportModule/getActiveIssuesByRoomId"](roomId);
  }

  itemsInFilterSelect = [
    {
      type: "none",
      text: this.$t("admin.dashboard.none"),
    },
    {
      type: "supportRequests",
      text: this.$t("admin.dashboard.supportRequests"),
    },
    {
      type: "dateRange",
      text: this.$t("admin.dashboard.dateRange"),
    },
  ];

  dateRange = [
    DateTime.now().minus({ days: 1 }).toISODate(),
    DateTime.now().toISODate(),
  ];
  maxDate = DateTime.now().toISODate();
  selectedFilter = this.itemsInFilterSelect[0];
  dateMenu = false;

  get filteredRooms(): Room[] {
    const rooms: Room[] = this.$store.getters["RoomModule/getAsList"] || [];

    const minDate = DateTime.fromISO(this.dateRange[0]);
    const maxDate = DateTime.fromISO(this.dateRange[1]);
    return rooms.filter((r) => {
      if (!r.active) {
        return false;
      }
      if (this.selectedFilter.type === "supportRequests") {
        const activeIssues: SupportItem[] = this.$store.getters[
          "SupportModule/getActiveIssuesByRoomId"
        ](r.uuid);
        return activeIssues.length;
      } else if (this.selectedFilter.type === "dateRange") {
        if (!r.roomDetails.lastUsed) {
          return false;
        }
        const lastUsed = DateTime.fromISO(r.roomDetails.lastUsed);
        return lastUsed >= minDate && lastUsed <= maxDate;
      } else {
        return true;
      }
    });
  }
}
</script>

<style lang="scss" scoped></style>
