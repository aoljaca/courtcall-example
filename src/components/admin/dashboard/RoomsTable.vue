<template>
  <div class="rooms-table">
    <v-container>
      <v-row>
        <v-col class="text-h4" cols="1">
          {{ $t("admin.dashboard.rooms") }}
        </v-col>
        <v-col cols="2">
          <v-select 
            :items="selectItems"
            :label="$t('admin.dashboard.filter')"
            data-test-id="rooms-table-select">
          </v-select>
        </v-col>
        <v-col class="d-flex justify-end" cols="9">
          <v-btn
            data-test-id="rooms-table-refresh-button"
            color="grey darken-2"
            elevation="2"
            fab
            :title="$t('admin.dashboard.add')"
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
            :title="$t('admin.dashboard.refresh')" 
            color="grey darken-4 rounded-0 white--text" 
            depressed
            data-test-id="refresh-list-button"
          >
            <span>
              {{ $t("admin.dashboard.refresh") }}
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
              <v-chip class="pl-0">
                <v-chip 
                  color="grey darken-1"
                  class="mr-2"
                >
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
                <v-col>
                  <div
                  v-for="name in getSystemUserNames(item)"
                  :key="`room-${item.uuid}-system-user-${name}`"
                  >
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
                  <v-list-item data-test-id="join-room">
                    {{ $t("admin.dashboard.join")}}
                  </v-list-item>
                  <v-list-item data-test-id="room-details">
                    {{ $t("admin.dashboard.detailsHeader")}}
                  </v-list-item>
                  <v-list-item data-test-id="room-participants">
                    {{ $t("admin.dashboard.participantsHeader")}}
                  </v-list-item>
                  <v-list-item data-test-id="room-cases">
                    {{ $t("admin.dashboard.cases")}}
                  </v-list-item>
                  <v-list-item data-test-id="room-activity">
                    {{ $t("admin.dashboard.activity")}}
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
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
@Component
export default class RoomsTable extends Vue {
  readonly HEADERS = [
    {
      text: this.$t("admin.dashboard.activeHeader"),
      value: this.$t("admin.dashboard.activeValue"),
    },
    {
      text: this.$t("admin.dashboard.supportHeader"),
      value: this.$t("admin.dashboard.supportValue"),
    },
    {
      text: this.$t("admin.dashboard.nameHeader"),
      value: this.$t("admin.dashboard.nameValue"),
    },
    {
      text: this.$t("admin.dashboard.systemUserHeader"),
      value: this.$t("admin.dashboard.systemUserValue"),
    },
    {
      text: this.$t("admin.dashboard.participantsHeader"),
      value: this.$t("admin.dashboard.participantsValue"),
    },
    {
      text: this.$t("admin.dashboard.streamHeader"),
      value: this.$t("admin.dashboard.streamValue"),
    },
    {
      text: this.$t("admin.dashboard.recordHeader"),
      value: this.$t("admin.dashboard.recordValue"),
    },
    {
      text: this.$t("admin.dashboard.detailsHeader"),
      value: this.$t("admin.dashboard.detailsValue"),
    },
    {
      text: this.$t("admin.dashboard.moreHeader"),
      value: this.$t("admin.dashboard.moreValue"),
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
