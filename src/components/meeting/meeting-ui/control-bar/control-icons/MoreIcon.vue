<template>
  <span id="moreIcon">
    <v-menu offset-y :nudge-top="500">
      <template v-slot:activator="{ on, attrs }">
        <v-container fluid>
          <v-row class="px-0 py-0">
            <v-col class="px-0 py-0">
              <v-btn
                fab
                v-bind="attrs"
                v-on="on"
                elevation="0"
                :title="$t('meetingUI.controlBar.more.title')"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn></v-col
            >
          </v-row>
          <v-row class="py-0 px-0">
            <v-col
              class="py-0 px-0 control-bar-icon-font d-flex justify-center"
              >{{ $t("meetingUI.controlBar.more.title") }}</v-col
            >
          </v-row>
        </v-container>
      </template>
      <v-list>
        <v-dialog v-model="dialog.sendNotification" max-width="750px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-bind="attrs"
              v-on="on"
              :title="$t('meetingUI.controlBar.more.sendNotification.title')"
            >
              <v-icon>mdi-bell-plus</v-icon>
              {{ $t("meetingUI.controlBar.more.sendNotification.title") }}
            </v-list-item>
          </template>
          <send-notification></send-notification>
        </v-dialog>
        <v-dialog v-model="dialog.inviteParticipants" max-width="750px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-bind="attrs"
              v-on="on"
              :title="$t('meetingUI.controlBar.more.inviteParticipants.title')"
            >
              <v-icon>mdi-account-supervisor</v-icon>
              {{ $t("meetingUI.controlBar.more.inviteParticipants.title") }}
            </v-list-item>
          </template>
          <invite-participants></invite-participants>
        </v-dialog>
        <v-dialog v-model="dialog.record" max-width="500px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="$t('meetingUI.controlBar.more.record.title')"
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-record</v-icon>
              {{ $t("meetingUI.controlBar.more.record.title") }}
            </v-list-item>
          </template>
          <record></record>
        </v-dialog>
        <v-dialog v-model="dialog.changeBackground" max-width="750px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="$t('meetingUI.controlBar.more.changeBackground.title')"
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-image-multiple</v-icon>
              {{ $t("meetingUI.controlBar.more.changeBackground.title") }}
            </v-list-item>
          </template>
          <change-background></change-background>
        </v-dialog>
        <v-dialog v-model="dialog.avSetup" max-width="750px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="$t('meetingUI.controlBar.more.avSetup.title')"
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-video</v-icon>
              {{ $t("meetingUI.controlBar.more.avSetup.title") }}
            </v-list-item>
          </template>
          <av-setup></av-setup>
        </v-dialog>
        <v-dialog v-model="dialog.notificationPreferences" max-width="500px">
          <template
            v-slot:activator="{ on, attrs }"
            :title="
              $t('meetingUI.controlBar.more.notificationPreferences.title')
            "
          >
            <v-list-item v-bind="attrs" v-on="on">
              <v-icon>mdi-bell</v-icon>
              {{
                $t("meetingUI.controlBar.more.notificationPreferences.title")
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
              :title="$t('meetingUI.controlBar.more.transcription.title')"
            >
              <v-icon>mdi-closed-caption</v-icon>
              {{ $t("meetingUI.controlBar.more.transcription.title") }}
            </v-list-item>
          </template>
          <transcription-menu></transcription-menu>
        </v-dialog>
        <v-dialog v-model="dialog.publicStreaming" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              v-on="on"
              v-bind="attrs"
              :title="$t('meetingUI.controlBar.more.publicStreaming.title')"
            >
              <v-icon> mdi-wifi </v-icon>
              {{ $t("meetingUI.controlBar.more.publicStreaming.title") }}
            </v-list-item>
          </template>
          <public-streaming></public-streaming>
        </v-dialog>
      </v-list>
    </v-menu>
  </span>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SendNotification from "./more-icons/SendNotification.vue";
import InviteParticipants from "./more-icons/InviteParticipants.vue";
import Record from "./more-icons/Record.vue";
import ChangeBackground from "./more-icons/ChangeBackground.vue";
import AvSetup from "./more-icons/AVSetup.vue";
import NotificationPreferences from "./more-icons/NotificationPreferences.vue";
import TranscriptionMenu from "./more-icons/TranscriptionMenu.vue";
import PublicStreaming from "./more-icons/PublicStreaming.vue";
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
  },
})
export default class MoreIcon extends Vue {
  dialog = {
    sendNotification: false,
    inviteParticipants: false,
    record: false,
    changeBackground: false,
    avSetup: false,
    notificationPreferences: false,
    transcription: false,
    publicStreaming: false,
  };
}
</script>
