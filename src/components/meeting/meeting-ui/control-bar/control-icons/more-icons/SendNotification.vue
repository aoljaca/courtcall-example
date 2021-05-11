<template>
  <span id="sendNotification">
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-textarea
              :label="
                $t('meetingUI.controlBar.more.sendNotification.enterText')
              "
              counter="300"
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              v-model="selectedNotificationGroupType"
              :items="notificationGroupTypes"
              :item-text="createNotificationGroupTypeLabel"
              :label="
                $t('meetingUI.controlBar.more.sendNotification.enterText')
              "
              return-object
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="selectedType === 'selectedConferenceRooms'">
          <v-col>
            <v-select
              v-model="selectedSubConferences"
              :items="possibleSubconferences"
              item-text="displayName"
              chips
              multiple
              return-object
              :label="
                $t(
                  'meetingUI.controlBar.more.sendNotification.selectSubconferenceLabel'
                )
              "
            ></v-select>
          </v-col>
        </v-row>
        <v-row v-if="selectedType === 'selectedCases'">
          <v-col>
            <v-select
              v-model="selectedCases"
              :items="possibleCases"
              :item-text="formatCaseLabel"
              chips
              multiple
              return-object
              :label="
                $t(
                  'meetingUI.controlBar.more.sendNotification.selectCasesLabel'
                )
              "
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="0">{{ $t("general.cancel") }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn elevation="0">{{ $t("general.send") }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueDefault from "vue";
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import { Case } from "@/model/meeting/meeting-ui/case";
import { DateTime } from "luxon";
import {
  NotificationGroupType,
  NOTIFICATION_GROUP_TYPES,
} from "@/model/meeting/meeting-ui/control-bar/more/notification-preferences/notification-group-type";
@Component({})
export default class SendNotification extends Vue {
  notificationGroupTypes = NOTIFICATION_GROUP_TYPES;
  selectedNotificationGroupType: NotificationGroupType | null = null;
  selectedSubConferences: SubConference[] = [];
  selectedCases: Case[] = [];
  possibleSubconferences: SubConference[] = [
    {
      displayName: "Subconference A",
      systemName: "A",
      sessionId: "",
    },
    {
      displayName: "Subconference B",
      systemName: "B",
      sessionId: "",
    },
    {
      displayName: "Subconference C",
      systemName: "C",
      sessionId: "",
    },
    {
      displayName: "Subconference D",
      systemName: "D",
      sessionId: "",
    },
  ];
  possibleCases: Case[] = [
    {
      name: "Ada County ",
      number: "#5",
      startTime: DateTime.now().toISO(),
    },
    {
      name: "Ada County",
      number: "#20",
      startTime: DateTime.now().toISO(),
    },
    {
      name: "Canyon County",
      number: "#1",
      startTime: DateTime.now().toISO(),
    },
  ];

  createNotificationGroupTypeLabel(type: NotificationGroupType) {
    return this.$t(type.translationText);
  }

  formatCaseLabel(c: Case) {
    return `${c.name} ${c.number}`;
  }

  get selectedType() {
    return this.selectedNotificationGroupType?.type;
  }
}
</script>
<style lang="scss" scoped>
</style>