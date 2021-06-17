<template>
  <div class="rooms-table">
    <v-container>
      <v-row>
        <v-col class="text-h4" cols="1">
          ROOMS
        </v-col>
        <v-col cols="2">
          <v-select 
            :items="selectItems"
            label="Filter By"
            data-test-id="rooms-table-select">
          </v-select>
        </v-col>
        <v-col class="d-flex justify-end" cols="9">
          <v-btn
            data-test-id="rooms-table-refresh-button"
            color="grey darken-2"
            elevation="2"
            fab
          >
            <v-icon
              color="white"
              x-large
            >
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn 
            :title="$t('admin.roomCases.add')" 
            color="grey darken-4 rounded-0 white--text" 
            depressed
            data-test-id="refresh-list-button"
          >
            <span>
              REFRESH LIST
            </span>
            <v-icon>
              mdi-refresh
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="HEADERS"
            :items="roomsData"
            :items-per-page="20"
            class="elevation-1"
          >
            <template v-slot:[`item.active`]="{ item }">
              <v-icon v-if="item.active"> mdi-circle </v-icon>
            </template>
            <template v-slot:[`item.support`]="{ item }">
              <v-chip>
                <v-chip 
                  color="grey darken-1"
                  class="mx-0"
                >
                  {{ getActiveIssues(item.uuid).length }}
                </v-chip>
                <span>
                  Requests
                </span>
              </v-chip>
            </template>
            <template v-slot:[`item.name`]="{ item }">
              <v-list>
                <v-list-item
                  class="px-0 mx-0"
                  data-test-id="room-link"
                  link
                  :to="{
                    name: 'Room View Manage',
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
                <v-col
                  v-for="name in getSystemUserNames(item)"
                  :key="`room-${item.uuid}-system-user-${name}`"
                >
                  <div>
                    {{ name }}
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
              <v-icon v-if="item.roomSettings.recording" color="grey"> mdi-circle </v-icon>
            </template>
            <template v-slot:[`item.details`]="{ item }">
              {{ item.roomDetails.details }}
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
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </template>
                <v-list>
                  <v-list-item data-test-id="join-room">Join</v-list-item>
                  <v-list-item data-test-id="room-details">Details</v-list-item>
                  <v-list-item data-test-id="room-participants">Participants</v-list-item>
                  <v-list-item data-test-id="room-cases">Cases</v-list-item>
                  <v-list-item data-test-id="room-activity">Activitiy</v-list-item>
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
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
@Component
export default class RoomsTable extends Vue {
  readonly HEADERS = [
    {
      text: "Active",
      value: "active",
    },
    {
      text: "Support",
      value: "support",
    },
    {
      text: "Room Name",
      value: "name",
    },
    {
      text: "System Users",
      value: "systemUsers",
    },
    {
      text: "Participants",
      value: "participants",
    },
    {
      text: "Streaming",
      value: "streaming",
    },
    {
      text: "Recording",
      value: "recording",
    },
    {
      text: "Details",
      value: "details"
    },
    {
      text: "More",
      value: "more",
    },
  ];

  roomsData = this.$store.getters["RoomModule/getAsList"];

  getParticipantsByRoomId(roomId: string): Participant[] {
    return this.$store.getters["ParticipantsModule/getParticipantsByRoomId"](roomId);
  }

  getSystemUsers(roomId: string) {
    const filteredParticipants = this.getParticipantsByRoomId(roomId);
    return filteredParticipants.filter((p) => p.systemUser === true);
  }

  getSystemUserNames(item: any) {
    return this.getSystemUsers(item.uuid).map((su) => su.name);
  }

  getActiveIssues(roomId: string) {
    return this.$store.getters["SupportModule/getActiveIssuesByRoomId"](roomId)
  }

  selectItems = ["Active", "Supports Requests", "Date Range", "Archived"];
}
</script>

<style lang="scss" scoped></style>
