<template>
  <div id="roomActivity">
    <v-container fluid>
      <v-row>
        <v-col
          ><h1>{{ roomName }}</h1></v-col
        >
      </v-row>
      <v-row>
        <v-col
          ><span class="font-weight-bold pr-2">{{
            $t("admin.organizations.organization.title")
          }}</span>
          <span>{{ organizationName }}</span>
        </v-col>
      </v-row>
      <hr />
      <v-row>
        <v-col>
          <h2>{{ $t("admin.roomNav.activity") }}</h2>
          <v-data-table
            :headers="SESSION_HEADERS"
            :items="roomSessions"
            :items-per-page="10"
            :footer-props="footerOptions"
          ></v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>{{ $t("admin.roomActivity.conferenceLog") }}</h2>
          <v-data-table
            :headers="LOG_HEADERS"
            :items="roomActivityEvents"
            :items-per-page="20"
            :footer-props="footerOptions"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Organization } from "@/model/admin/organization/organization";
import { Room } from "@/model/admin/room/room";
import { Component, Vue } from "vue-property-decorator";
import { DateTime } from "luxon";
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import {
  DataTableFooterOptions,
  DataTableOptionsService,
} from "@/services/data-table-options";
import { DateFormatService } from "@/services/date-format";
@Component({})
export default class RoomActivity extends Vue {
  @inject(INJECTION_TYPES.DATA_TABLE)
  dataTableOptionsService?: DataTableOptionsService;
  @inject(INJECTION_TYPES.DATE_FORMAT)
  dateFormatService?: DateFormatService;
  readonly SESSION_HEADERS = [
    {
      text: this.$t("admin.roomActivity.startTime"),
      value: "startTime",
    },
    {
      text: this.$t("admin.roomActivity.endTime"),
      value: "endTime",
    },
    {
      text: this.$t("admin.roomParticipants.participants"),
      value: "participants",
    },
    {
      text: this.$t("admin.dashboard.cases"),
      value: "cases",
    },
    {
      text: this.$t("admin.roomActivity.recording"),
      value: "isRecorded",
    },
    {
      text: this.$t("admin.roomActivity.transcript"),
      value: "isTranscribed",
    },
  ];

  readonly LOG_HEADERS = [
    {
      text: this.$t("admin.roomActivity.eventTime"),
      value: "eventTime",
    },
    {
      text: this.$t("admin.roomActivity.description"),
      value: "",
    },
  ];

  get selectedRoom(): Room {
    return this.$store.getters["RoomModule/getById"](this.$route.params.roomId);
  }

  get roomName(): string | null {
    return this.selectedRoom.roomDetails.name;
  }

  get organizationName(): string | null {
    return this.selectedRoom.roomDetails.organization;
  }

  get roomSessions(): any[] {
    return [];
  }

  get roomActivityEvents(): any[] {
    return [];
  }

  get footerOptions(): DataTableFooterOptions | undefined {
    return this.dataTableOptionsService?.getFooterOptions();
  }

  formatDate(iso: string): string | undefined {
    if (iso) {
      return this.dateFormatService?.formatFullDateTime(iso);
    } else {
      return "N/A";
    }
  }
}
</script>