<template>
  <div id="supportArchive">
    <v-container fluid>
      <v-row>
        <v-col>
          <h2>{{ $t("admin.support.archive.title") }}</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="HEADERS" :items="supportItems">
            <template v-slot:[`item.openedAt`]="{ item }">
              {{ formatDate(item.openedAt) }}
            </template>
            <template v-slot:[`item.closedAt`]="{ item }">
              {{ formatDate(item.closedAt) }}
            </template>
            <template v-slot:[`item.participant`]="{ item }">
              {{ getParticipantName(item.participant) }}
            </template>
            <template v-slot:[`item.room`]="{ item }">
              <v-list>
                <v-list-item
                  class="px-0 mx-0 font-weight-black"
                  data-test-id="room-link"
                  link
                  :to="{
                    name: 'Room View Manage',
                    params: { roomId: item.room },
                  }"
                >
                  {{ getRoomName(item.room) }}
                </v-list-item>
              </v-list>
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <div>
                <span v-if="item.type === 'duplicateJoin'">
                  {{ $t("admin.support.active.duplicateJoin") }}
                </span>
                <span v-if="item.type === 'user'">
                  {{ item.requestDetails }}
                </span>
              </div>
            </template>
            <template v-slot:[`item.supportedBy`]="{ item }">
              {{ getParticipantName(item.supportedBy) }}
            </template>
            <template v-slot:[`item.note`]="{ item }">
              <div>
                <div v-if="item.note">
                  {{ item.note }}
                </div>
                <div v-else>
                  <i>{{ $t("admin.support.archive.noNote") }}</i>
                </div>
              </div>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DateTime } from "luxon";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import DateFormatService from "@/services/date-format";
@Component({})
export default class SupportArchive extends Vue {
  readonly HEADERS = [
    {
      text: "Date",
      value: "openedAt",
    },
    {
      text: "Closed",
      value: "closedAt",
    },
    {
      text: "Room",
      value: "room",
    },
    {
      text: "Participant",
      value: "participant",
    },
    {
      text: "Request",
      value: "type",
    },
    {
      text: "Resolved By",
      value: "supportedBy",
    },
    {
      text: "Resolution Note",
      value: "note",
      width: "30%",
    },
  ];

  get supportItems() {
    return this.$store.getters["SupportModule/getArchived"];
  }

  getParticipantName(id: string) {
    const participant: Participant =
      this.$store.getters["ParticipantsModule/getById"](id);
    if (participant) {
      return participant.name;
    } else {
      return "Unknown";
    }
  }

  getRoomName(id: string) {
    return this.$store.getters["RoomModule/getRoomNameById"](id);
  }

  formatDate(iso: string): string | undefined {
    if (iso) {
      return DateFormatService.formatFullDateTime(iso);
    } else {
      return "unknown";
    }
  }
}
</script>
