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
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-start">
              <label>{{ $t("admin.roomSettings.createPasscode") }}</label>
            </v-col>
            <v-col cols="1">
            </v-col>
            <v-col cols="4">
              <v-text-field label="YourHonor931">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.video")}}
            </v-col>
            <v-col class="d-flex justify-end">
            <span>OFF</span>
            <v-switch class="my-0 py-0 mx-4">
            </v-switch>
            <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.audio")}}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.allowSelectBeforeEnter")}}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>NO</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>YES</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.waitingRoom") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-start">
              <label>{{ $t("admin.roomSettings.providerPSTN") }}</label>
            </v-col>
            <v-col cols="1">
            </v-col>
            <v-col cols="4">
              <v-select label="ZipDX">
              </v-select>
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
            <v-col class="d-flex justify-end">
              <span>NO</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>YES</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.allowParticipantsToggleAudio" )}}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>NO</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>YES</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.videoSetup") }}
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-start">
              <label>{{ $t("admin.roomSettings.defaultCanvasLayout") }}</label>
            </v-col>
            <v-col cols="1">
            </v-col>
            <v-col cols="4">
              <v-select label="Grid">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.allowPartcipantsChangeLayout")}}
            </v-col>
             <v-col class="d-flex justify-end">
              <span>NO</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>YES</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.videoQuality") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <v-radio-group
                v-model="row"
                row
              >
                <v-radio label="HIGH">
                </v-radio>
                <v-radio label="MED">
                </v-radio>
                <v-radio label="LOW">
                </v-radio>
              </v-radio-group>
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
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.requireScreenSharingRequest") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.fileManagement") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.handRaising") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.chat")}}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
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
            <v-col class="d-flex justify-end">
            <span>DISABLE</span>
            <v-switch class="my-0 py-0 mx-4">
            </v-switch>
            <span>ENABLE</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.emailLinkToAll") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>OFF</span>
              <v-switch class="my-0 py-0 mx-4">
              </v-switch>
              <span>ON</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.transcription") }}
            </v-col>
            <v-col class="d-flex justify-end">
            <span>DISABLE</span>
            <v-switch class="my-0 py-0 mx-4">
            </v-switch>
            <span>ENABLE</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.remoteTranslation") }}
            </v-col>
            <v-col class="d-flex justify-end">
            <span>DISABLE</span>
            <v-switch class="my-0 py-0 mx-4">
            </v-switch>
            <span>ENABLE</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              {{ $t("admin.roomSettings.streaming") }}
            </v-col>
            <v-col class="d-flex justify-end">
            <span>DISABLE</span>
            <v-switch class="my-0 py-0 mx-4">
            </v-switch>
            <span>ENABLE</span>
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
            <v-col class="d-flex justify-end">
            <span>HOST</span>
            <v-switch class="my-0 py-0 mx-4">
            </v-switch>
            <span>SUPPORT</span>
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

</style>
