<template>
  <div id="supportQueue">
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <h2>{{ $t("admin.support.active.title") }}</h2>
        </v-col>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn @click="goToArchive()" depressed color="black">
            <span class="white--text">
              {{ $t("admin.support.archive.title") }}
            </span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table :headers="HEADERS" :items="supportItems">
            <template v-slot:[`item.openedAt`]="{ item }">
              {{ formatDate(item.openedAt) }}
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
            <template v-slot:[`item.participant`]="{ item }">
              {{ getParticipantName(item.participant) }}
            </template>
            <template v-slot:[`item.type`]="{ item }">
              <div>
                <span v-if="item.type === 'duplicateJoin'">{{
                  $t("admin.support.active.duplicateJoin")
                }}</span>
                <span v-if="item.type === 'user'">{{
                  item.requestDetails
                }}</span>
              </div>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <div v-if="item.inProgress" class="font-weight-bold">
                {{ $t("admin.support.active.inProgress") }}
              </div>
              <div v-else>
                <div v-if="item.type === 'user'">
                  <v-btn depressed color="black">
                    <span class="white--text">
                      {{ $t("admin.support.active.joinRoom") }}
                    </span>
                  </v-btn>
                </div>
                <v-container v-if="item.type === 'duplicateJoin'" fluid>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-btn depressed>{{
                        $t("admin.support.active.admit")
                      }}</v-btn>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-btn depressed>{{
                        $t("admin.support.active.deny")
                      }}</v-btn>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-btn depressed>{{
                        $t("admin.support.active.connect")
                      }}</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </template>
            <template v-slot:[`item.close`]="">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn depressed v-bind="attrs" v-on="on">
                    {{ $t("general.close") }}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    {{ $t("admin.support.active.close") }}
                  </v-list-item>
                  <v-list-item>
                    {{ $t("admin.support.active.noteAndClose") }}
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
import { DateTime } from "luxon";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import DateFormatService from "@/services/date-format";
@Component({})
export default class SupportQueue extends Vue {
  readonly HEADERS = [
    {
      text: "Time",
      value: "openedAt",
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
      width: "25%",
    },
    {
      text: "Actions",
      value: "actions",
      align: "center",
    },
    {
      text: "Resolution",
      value: "close",
    },
  ];

  get supportItems() {
    return this.$store.getters["SupportModule/getActive"];
  }

  formatDate(iso: string): string | undefined {
    return DateFormatService.formatFullDateTime(iso);
  }

  getParticipantById(id: string): Participant {
    return this.$store.getters["ParticipantsModule/getById"](id);
  }

  getParticipantName(id: string): string {
    const participant = this.getParticipantById(id);
    if (participant) {
      return participant.name;
    } else {
      return "Unknown";
    }
  }

  getRoomName(id: string) {
    return this.$store.getters["RoomModule/getRoomNameById"](id);
  }

  goToArchive(): void {
    this.$router.push({ path: "/admin/support/archived" });
  }
}
</script>
