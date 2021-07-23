<template>
  <div>
    <v-row>
      <v-col>
        <div class="settings-edit-header font-weight-bold">
          {{ $t("admin.roomSettings.settings") }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <div class="mr-4 settings-label-text font-weight-black">
          {{ $t("admin.roomSettings.template") }}
        </div>
        <div>{{ roomSettings.template }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col id="left-settings-col">
        <v-row>
          <v-col class="settings-label-text font-weight-black">
            {{ $t("admin.roomSettings.entranceBehavior") }}
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.passcode") }}
          </v-col>
          <v-col class="setting-state">
            <span>
              {{ roomSettings.passcode }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.video") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.video">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.audio") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.audio">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowSelectBeforeEnter") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.allowSelectBeforeEnter">
              {{ $t("admin.roomSettings.yes") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.no") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.waitingRoom") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.waitingRoom">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.audioOnly") }}
          </v-col>
          <v-col class="setting-state">
            <span>
              {{ roomSettings.audioOnlyType }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.providerPSTN") }}
          </v-col>
          <v-col class="setting-state">
            <span>
              {{ roomSettings.providerPSTN }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-label-text font-weight-black">
              {{ $t("admin.roomSettings.meetingVideoAndAudio") }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowParticipantsToggleVideo") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.allowParticipantsToggleVideo">
              {{ $t("admin.roomSettings.yes") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowParticipantsToggleAudio") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.allowParticipantsToggleAudio">
              {{ $t("admin.roomSettings.yes") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-label-text font-weight-black">
              {{ $t("admin.roomSettings.videoSetup") }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.defaultCanvasLayout") }}
          </v-col>
          <v-col class="setting-state">
            {{ roomSettings.defaultCanvasLayout }}
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowParticipantsChangeLayout") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.allowParticipantsChangeLayout">
              {{ $t("admin.roomSettings.yes") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.videoQuality") }}
          </v-col>
          <v-col class="setting-state">
            {{ roomSettings.videoQuality }}
          </v-col>
        </v-row>
      </v-col>
      <v-col id="right-settings-col" class="divide-cols">
        <v-row>
          <v-col>
            <span class="settings-label-text font-weight-black">
              {{ $t("admin.roomSettings.meetingOperations") }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.screenSharing") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.screenSharing">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-8">
            {{ $t("admin.roomSettings.requireScreenSharingRequest") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.requireScreenSharingRequest">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.fileManagement") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.fileManagement">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.handRaising") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.handRaising">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.chat") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.chat">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-label-text font-weight-black">
              {{ $t("admin.roomSettings.accessFunctions") }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.recording") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.recording">
              {{ $t("admin.roomSettings.enabled") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-8">
            {{ $t("admin.roomSettings.emailLinkToAll") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.emailLinkToAll">
              {{ $t("admin.roomSettings.on") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.transcription") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.transcription">
              {{ $t("admin.roomSettings.off") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.remoteTranslation") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.remoteTranslation">
              {{ $t("admin.roomSettings.off") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.streaming") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.streaming">
              {{ $t("admin.roomSettings.off") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.off") }} </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-label-text font-weight-black">
              {{ $t("admin.roomSettings.support") }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.duplicateParticipantHandling") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.duplicateParticipantHandling">
              {{ $t("admin.roomSettings.supportCaps") }}
            </span>
            <span v-else> {{ $t("admin.roomSettings.host") }} </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  NULL_ROOM_SETTINGS,
  RoomSettings,
} from "@/model/admin/room/room-settings";
@Component
export default class Settings extends Vue {
  get roomSettings(): RoomSettings {
    if (!this.$store.state.RoomModule.rooms[this.$route.params.roomId]) {
      return NULL_ROOM_SETTINGS;
    }

    return this.$store.state.RoomModule.rooms[this.$route.params.roomId]
      .roomSettings;
  }
}
</script>

<style lang="scss" scoped>
.divide-cols {
  border-left: solid 1px grey;
}
.setting-state {
  font-weight: bold;
  display: flex;
  justify-content: right;
}
.settings-label-text {
  font-size: 1rem;
}
.settings-edit-header {
  font-size: 2rem;
  line-height: 2rem;
}
</style>
