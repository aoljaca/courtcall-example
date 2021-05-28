<template>
  <div>
    <v-row>
      <v-col>
        <div class="settings-edit-header">
          {{ $t("admin.roomSettings.settings") }}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <div class="mr-4 settings-sub-header">{{ $t("admin.roomSettings.template") }}</div>
        <div>{{ roomSettings.template }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col id="left-settings-col">
        <v-row>
          <v-col class="settings-sub-header">
            {{ $t("admin.roomSettings.entranceBehavior")}}
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.passcode")}}
          </v-col>
          <v-col class="setting-state">
            <span>
              {{ roomSettings.passcode }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.video")}}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.video">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.audio")}}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.audio">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowSelectBeforeEnter")}}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.allowSelectBeforeEnter">
              YES
            </span>
            <span v-else>
              NO
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.waitingRoom") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.waitingRoom">
              ON
            </span>
            <span v-else>
              OFF
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
            <span class="settings-sub-header">
            {{ $t("admin.roomSettings.meetingVideoAndAudio")}}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowParticipantsToggleVideo") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.allowParticipantsToggleVideo">
              YES
            </span>
            <span v-else>
              NO
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.allowParticipantsToggleAudio" )}}
          </v-col>
          <v-col class="setting-state">
             <span v-if="roomSettings.allowParticipantsToggleAudio">
              YES
            </span>
            <span v-else>
              NO
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-sub-header">
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
              YES
            </span>
            <span v-else>
              NO
            </span>
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
            <span class="settings-sub-header">
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
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-8">
            {{ $t("admin.roomSettings.requireScreenSharingRequest") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.requireScreenSharingRequest">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.fileManagement") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.fileManagement">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.handRaising") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.handRaising">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.chat")}}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.chat">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-sub-header">
              {{ $t("admin.roomSettings.accessFunctions") }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.recording")}} 
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.recording">
              ENABLED
            </span>
            <span v-else>
              DISABLED
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pl-8">
            {{ $t("admin.roomSettings.emailLinkToAll") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.emailLinkToAll">
              ON
            </span>
            <span v-else>
              OFF
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.transcription") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.transcription">
              ENABLED
            </span>
            <span v-else>
              DISABLED
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.remoteTranslation") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.remoteTranslation">
              ENABLED
            </span>
            <span v-else>
              DISABLED
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            {{ $t("admin.roomSettings.streaming") }}
          </v-col>
          <v-col class="setting-state">
            <span v-if="roomSettings.streaming">
              ENABLED
            </span>
            <span v-else>
              DISABLED
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="settings-sub-header">
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
              SUPPORT
            </span>
            <span v-else>
              HOST
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class Settings extends Vue {
  get roomSettings() {
    return this.$store.state.adminRoomModule.roomSettings;
  }
}
</script>

<style lang="scss" scoped>
.divide-cols {
  border-left: solid 1px grey;
}
.setting-state {
  font-weight: bold;
  text-align: right;
}
.settings-sub-header {
  font-weight: 700;
  font-size: 1rem;
}
.settings-edit-header {
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
}
</style>
