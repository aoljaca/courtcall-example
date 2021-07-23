<template>
  <div>
    <v-menu offset-y top nudge-top="10">
      <template v-slot:activator="{ on, attrs }">
        <v-row>
          <v-col class="text-center">
            <v-btn
              fab
              dark
              outlined
              depressed
              class="pa-5"
              v-on="on"
              v-bind="attrs"
              :title="$t('conference.meeting.controlBar.more.title')"
            >
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
            <p class="white--text body-2 mt-2 mb-0">
              {{ $t("conference.meeting.controlBar.more.title") }}
            </p>
          </v-col>
        </v-row>
      </template>
      <v-list>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            v-bind="attrs"
            v-on="on"
            :title="
              $t('conference.meeting.controlBar.more.sendNotification.title')
            "
          >
            <v-icon>mdi-bell-plus</v-icon>
            {{
              $t("conference.meeting.controlBar.more.sendNotification.title")
            }}
          </v-list-item>
        </template>
        <template>
          <v-list>
            <v-list-item
              v-for="item in listItems"
              @click="item.onClick"
              :key="item.id"
              :title="item.label"
            >
              <v-icon>{{ item.icon }}</v-icon>
              <!-- item.onClick => isGettingSupport = true -->
            </v-list-item>
          </v-list>
          <get-support
            v-if="isGettingSupport"
            @closedDialog="isGettingSupport = false"
          />
        </template>
        <v-dialog v-model="dialog.sendNotification" max-width="750px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-bind="attrs"
              v-on="on"
              :title="
                $t('conference.meeting.controlBar.more.sendNotification.title')
              "
            >
              <v-icon>mdi-bell-plus</v-icon>
              {{
                $t("conference.meeting.controlBar.more.sendNotification.title")
              }}
            </v-list-item>
          </template>
          <send-notification></send-notification>
        </v-dialog>
        <v-dialog v-model="dialog.inviteParticipants" max-width="750px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-bind="attrs"
              v-on="on"
              :title="
                $t(
                  'conference.meeting.controlBar.more.inviteParticipants.title'
                )
              "
            >
              <v-icon>mdi-account-supervisor</v-icon>
              {{
                $t(
                  "conference.meeting.controlBar.more.inviteParticipants.title"
                )
              }}
            </v-list-item>
          </template>
          <invite-participants></invite-participants>
        </v-dialog>
        <v-dialog v-model="dialog.record" max-width="500px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="$t('conference.meeting.controlBar.more.record.title')"
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-record</v-icon>
              {{ $t("conference.meeting.controlBar.more.record.title") }}
            </v-list-item>
          </template>
          <record></record>
        </v-dialog>
        <v-dialog v-model="dialog.changeBackground" max-width="750px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="
              $t('conference.meeting.controlBar.more.changeBackground.title')
            "
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-image-multiple</v-icon>
              {{
                $t("conference.meeting.controlBar.more.changeBackground.title")
              }}
            </v-list-item>
          </template>
          <change-background></change-background>
        </v-dialog>
        <v-dialog v-model="dialog.avSetup" max-width="750px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="$t('conference.meeting.controlBar.more.avSetup.title')"
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-video</v-icon>
              {{ $t("conference.meeting.controlBar.more.avSetup.title") }}
            </v-list-item>
          </template>
          <av-setup></av-setup>
        </v-dialog>
        <v-dialog v-model="dialog.notificationPreferences" max-width="500px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="
              $t(
                'conference.meeting.controlBar.more.notificationPreferences.title'
              )
            "
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-bell</v-icon>
              {{
                $t(
                  "conference.meeting.controlBar.more.notificationPreferences.title"
                )
              }}
            </v-list-item>
          </template>
          <notification-preferences></notification-preferences>
        </v-dialog>
        <v-dialog v-model="dialog.transcription" max-width="250px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-on="on"
              v-bind="attrs"
              :title="
                $t('conference.meeting.controlBar.more.transcription.title')
              "
            >
              <v-icon>mdi-closed-caption</v-icon>
              {{ $t("conference.meeting.controlBar.more.transcription.title") }}
            </v-list-item>
          </template>
          <transcription-menu></transcription-menu>
        </v-dialog>
        <v-dialog v-model="dialog.publicStreaming" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-on="on"
              v-bind="attrs"
              :title="
                $t('conference.meeting.controlBar.more.publicStreaming.title')
              "
            >
              <v-icon> mdi-wifi </v-icon>
              {{
                $t("conference.meeting.controlBar.more.publicStreaming.title")
              }}
            </v-list-item>
          </template>
          <public-streaming></public-streaming>
        </v-dialog>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SendNotification from "./SendNotification.vue";
import InviteParticipants from "./InviteParticipants.vue";
import Record from "./Record.vue";
import ChangeBackground from "./ChangeBackground.vue";
import AvSetup from "./AVSetup.vue";
import NotificationPreferences from "./NotificationPreferences.vue";
import TranscriptionMenu from "./TranscriptionMenu.vue";
import PublicStreaming from "./PublicStreaming.vue";
import GetSupport from "./GetSupport.vue";
@Component({
  components: {
    SendNotification,
    InviteParticipants,
    Record,
    ChangeBackground,
    AvSetup,
    NotificationPreferences,
    TranscriptionMenu,
    PublicStreaming,
    GetSupport,
  },
})
export default class MoreIcon extends Vue {
  isOpen = false;
  requestSupportInput = null;
  sentSupportRequest = false;
  dialog = {
    sendNotification: false,
    inviteParticipants: false,
    record: false,
    changeBackground: false,
    avSetup: false,
    notificationPreferences: false,
    transcription: false,
    publicStreaming: false,
    getSupport: false,
  };
  listItems = [
    {
      id: 1,
      label: "Get Support",
      isGettingSupport: false,
      icon: "mdi-bell-plus",
      onClick(): void {
        this.isGettingSupport = true;
      },
    },
  ];
}
</script>
