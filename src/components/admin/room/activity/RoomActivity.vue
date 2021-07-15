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
          >
            <template v-slot:[`item.startTime`]="{ item }">
              {{ formatDate(item.startTime) }}
            </template>
            <template v-slot:[`item.endTime`]="{ item }">
              {{ formatDate(item.endTime) }}
            </template>
            <template v-slot:[`item.isRecorded`]="{ item }">
              <div v-if="item.isRecorded">
                <v-btn color="primary" depressed>{{
                  $t("admin.roomActivity.downloadRecording")
                }}</v-btn>
              </div>
              <div v-else>
                <i>{{ $t("admin.roomActivity.noRecording") }}</i>
              </div>
            </template>
            <template v-slot:[`item.isTranscribed`]="{ item }">
              <div v-if="item.isTranscribed">
                <v-btn color="primary" depressed>
                  {{ $t("admin.roomActivity.downloadTranscript") }}
                </v-btn>
              </div>
              <div v-else>
                <i>{{ $t("admin.roomActivity.noTranscript") }}</i>
              </div>
            </template>
            <template v-slot:[`item.conferenceLog`]="{ item }">
              <v-btn
                @click="setSelectedSession(item)"
                depressed
                color="primary"
                >{{ $t("admin.roomActivity.viewConferenceLog") }}</v-btn
              >
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row v-if="selectedSession">
        <v-col>
          <h2>
            {{ $t("admin.roomActivity.conferenceLog") }} -
            {{ formatRoomDescription(selectedSession) }}
          </h2>
          <v-data-table
            :headers="LOG_HEADERS"
            :items="roomActivityEvents"
            :items-per-page="20"
            :footer-props="footerOptions"
          >
            <template v-slot:[`item.timeStamp`]="{ item }">
              {{ formatDate(item.timeStamp) }}
            </template>
            <template v-slot:[`item.description`]="{ item }">
              {{ getDescription(item) }}
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Room } from "@/model/admin/room/room";
import { Component, Vue } from "vue-property-decorator";
import {
  ActivityLogType,
  RoomActivityLog,
  RoomSession,
} from "@/model/admin/room/room-activity";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { DateTime } from "luxon";
import DateFormatService from "@/services/date-format";
import DataTableOptionsService from "@/services/data-table-options";
import { DataTableFooterOptions } from "@/services/data-table-options";
@Component({})
export default class RoomActivity extends Vue {
  selectedSession: RoomSession | null = null;
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
    {
      text: this.$t("admin.roomActivity.conferenceLog"),
      value: "conferenceLog",
      sortable: false,
      filterable: false,
    },
  ];

  readonly LOG_HEADERS = [
    {
      text: this.$t("admin.roomActivity.eventTime"),
      value: "timeStamp",
    },
    {
      text: this.$t("admin.roomActivity.description"),
      value: "description",
      width: "80%",
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

  get roomSessions(): RoomSession[] {
    return this.$store.getters["RoomSessionModule/getByRoomId"](
      this.$route.params.roomId
    );
  }

  get roomActivityEvents(): RoomActivityLog[] {
    return this.selectedSession ? this.selectedSession.activityLogs : [];
  }

  get footerOptions(): DataTableFooterOptions | undefined {
    return DataTableOptionsService.getFooterOptions();
  }

  formatDate(iso: string): string | undefined {
    if (iso) {
      return DateFormatService.formatFullDateTime(iso);
    } else {
      return "N/A";
    }
  }

  setSelectedSession(session: RoomSession) {
    this.selectedSession = session;
  }

  formatRoomDescription(session: RoomSession) {
    const room: Room = this.$store.getters["RoomModule/getById"](session.room);
    const roomName = room ? room.roomDetails.name : "Unknown";
    const date = DateTime.fromISO(session.startTime)
      .setZone("local")
      .toLocaleString(DateTime.DATE_FULL);
    const tsStart = DateTime.fromISO(session.startTime)
      .setZone("local")
      .toLocaleString(DateTime.TIME_SIMPLE);
    const tsEnd = session.endTime
      ? DateTime.fromISO(session.endTime)
          .setZone("local")
          .toLocaleString(DateTime.TIME_SIMPLE)
      : "Present";
    return `${roomName} ${date} ${tsStart} - ${tsEnd}`;
  }

  getDescription(log: RoomActivityLog): any {
    const participant: Participant = this.$store.getters[
      "ParticipantsModule/getById"
    ](log.participant);
    const subconference: SubConference = this.$store.getters[
      "SubconferenceModule/getById"
    ](log.subconference);
    const userMode =
      log.userMode === "host"
        ? this.$t("admin.roomActivity.host")
        : this.$t("admin.roomActivity.participant");
    let translationString = "admin.roomActivity";
    switch (log.type) {
      case ActivityLogType.UserJoin:
        translationString = `${translationString}.userJoin`;
        break;
      case ActivityLogType.UserLeave:
        translationString = `${translationString}.userLeave`;
        break;
      case ActivityLogType.UserMoved:
        translationString = `${translationString}.userMoved`;
        break;
      case ActivityLogType.RecordingStart:
        translationString = `${translationString}.recordingStart`;
        break;
      case ActivityLogType.RecordingStop:
        translationString = `${translationString}.recordingStop`;
        break;
      case ActivityLogType.StreamingStart:
        translationString = `${translationString}.streamingStart`;
        break;
      case ActivityLogType.StreamingStop:
        translationString = `${translationString}.streamingStop`;
        break;
      case ActivityLogType.UserSupportRequest:
        translationString = `${translationString}.userSupportRequest`;
        break;
      case ActivityLogType.UserHandRaised:
        translationString = `${translationString}.userHandRaised`;
        break;
      default:
        translationString = `${translationString}.unknownLogActivity`;
    }

    return this.$t(translationString, {
      type: userMode,
      // participant: participant.name,
      subconference: subconference?.displayName,
      participant: participant?.name,
    });
  }
}
</script>
