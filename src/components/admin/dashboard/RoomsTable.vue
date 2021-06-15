<template>
  <div class="rooms-table">
    <v-container>
      <v-row>
        <v-col class="text-h4" cols="1">
          ROOMS
        </v-col>
        <v-col cols="2">
          <v-select data-test-id="rooms-table-select">
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
            <template v-slot:[`item.live`]="{ item }">
              <v-icon v-if="item.live" color="green"> mdi-circle </v-icon>
              <v-icon v-else color="gray"> mdi-circle </v-icon>
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
      value: "live",
    },
    {
      text: "Support",
      value: "number",
    },
    {
      text: "Room Name",
      value: "name",
    },
    {
      text: "System Users",
      value: "",
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
      details: "Details",
      value: "details"
    },
    {
      text: "More",
      value: "more",
    },
  ];

  roomsData = this.$store.getters["RoomModule/getAsList"];
  
}
</script>

<style lang="scss" scoped></style>
