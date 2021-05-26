<template>
  <div>
    <v-container px-6>
      <v-row id="settings-edit-header">
        <v-col>
          <h2>
            {{ $t("admin.roomSettings.settings") }}
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <label>{{ $t("admin.roomSettings.template") }}</label>
        </v-col>
        <v-col cols="3">
          <v-text-field>{{ roomSettings.template }}</v-text-field>
        </v-col>
        <v-col>
          <v-btn  
          style="color: white" 
          color="grey darken-4 rounded-0"
          depressed
          >
          SELECT TEMPLATE (OPTIONAL)
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="left-settings-col">
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.entranceBehavior")}}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.passcode")}}
            </v-col>
            <v-col class="setting-state">
                <v-col class="d-flex">
                  <span>OFF</span>
                  <v-switch>
                  </v-switch>
                  <span>ON</span>
                </v-col>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.video")}}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.video }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.audio")}}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.audio }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.allowSelectBeforeEnter")}}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.allowSelectBeforeEnter }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.waitingRoom") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.waitingRoom }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.audioOnlyConference") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.audioOnlyConference}}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.providerPSTN") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.providerPSTN }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.meetingVideoAndAudio")}}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.allowParticipantsToggleVideo") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.allowParticipantsToggleVideo }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.allowParticipantsToggleAudio" )}}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.allowParticipantsToggleAudio }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.videoSetup") }}
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
              {{ $t("admin.roomSettings.allowParticipantsChangeLayout")}}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.allowPartcipantsChangeLayout }}
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
              {{ $t("admin.roomSettings.meetingOperations") }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.screenSharing") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.screenSharing }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.requireScreenSharingRequest") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.requireScreenSharingRequest }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.fileManagement") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.fileManagement }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.handRaising") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.handRaising }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.chat")}}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.chat }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.accessFunctions") }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.recording")}} 
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.recording }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.emailLinkToAll") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.emailLinkToAll }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.transcription") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.transcription }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.remoteTranslation") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.remoteTranslation }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.streaming") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.streaming }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.support") }}
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.duplicateParticipantHandling") }}
            </v-col>
            <v-col class="setting-state">
              {{ roomSettings.duplicateParticipantHandling }}
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

  </div>     
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
@Component
export default class SettingsEdit extends Vue {
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
</style>
