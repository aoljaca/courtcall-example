<template>
  <div>
    <v-container fluid>
      <v-row class="settings-edit-header">
        <v-col>
          <div>
            {{ $t("admin.roomSettings.settings") }}
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <label class="settings-label-text">{{
            $t("admin.roomSettings.template")
          }}</label>
        </v-col>
        <v-col cols="3">
          <v-autocomplete
            item-text="roomSettings.template"
            v-model="template"
            :items="templates"
            dense
            return-object
            @change="setTemplate()"
          ></v-autocomplete>
        </v-col>
        <v-col cols="2" class="d-flex justify-start">
          <room-templates> </room-templates>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="left-settings-col">
          <v-row>
            <v-col class="pb-6 settings-label-text">
              {{ $t("admin.roomSettings.entranceBehavior") }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.passcode") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.allowPasscode"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col class="d-flex justify-start">
              <label class="pl-8">{{
                $t("admin.roomSettings.createPasscode")
              }}</label>
            </v-col>
            <v-col cols="1"> </v-col>
            <v-col cols="4">
              <v-text-field
                :rules="rules"
                counter
                maxlength="25"
                clearable
                dense
                v-model="roomSettings.passcode"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.video") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch v-model="roomSettings.video" class="my-0 py-0 mx-4">
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.audio") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch v-model="roomSettings.audio" class="my-0 py-0 mx-4">
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.allowSelectBeforeEnter") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.no") }}</span>
              <v-switch
                v-model="roomSettings.allowSelectBeforeEnter"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.yes") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.waitingRoom") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.waitingRoom"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col class="d-flex justify-start">
              <label>{{ $t("admin.roomSettings.audioOnlyConfig") }}</label>
            </v-col>
            <v-col cols="1"> </v-col>
            <v-col cols="4">
              <v-select dense :label="$t('admin.roomSettings.readyToMeet')">
              </v-select>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col class="d-flex justify-start">
              <label>{{ $t("admin.roomSettings.providerPSTN") }}</label>
            </v-col>
            <v-col cols="1"> </v-col>
            <v-col cols="4">
              <v-select dense :label="$t('admin.roomSettings.zipDX')">
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pb-6 settings-label-text">
              {{ $t("admin.roomSettings.meetingVideoAndAudio") }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.allowParticipantsToggleVideo") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.no") }}</span>
              <v-switch
                v-model="roomSettings.allowParticipantsToggleVideo"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.yes") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.allowParticipantsToggleAudio") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.no") }}</span>
              <v-switch
                v-model="roomSettings.allowParticipantsToggleAudio"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.yes") }}</span>
            </v-col>
          </v-row>
          <v-row class="pb-6 settings-label-text" dense>
            <v-col>
              {{ $t("admin.roomSettings.videoSetup") }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col class="d-flex justify-start">
              <label>{{ $t("admin.roomSettings.defaultCanvasLayout") }}</label>
            </v-col>
            <v-col cols="1"> </v-col>
            <v-col cols="4">
              <v-select dense :label="$t('admin.roomSettings.grid')">
              </v-select>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.allowParticipantsChangeLayout") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.no") }}</span>
              <v-switch
                v-model="roomSettings.allowParticipantsChangeLayout"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.yes") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.videoQuality") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <v-radio-group mandatory row>
                <v-radio :label="$t('admin.roomSettings.videoHigh')"> </v-radio>
                <v-radio :label="$t('admin.roomSettings.videoMedium')">
                </v-radio>
                <v-radio :label="$t('admin.roomSettings.videoLow')"> </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-col>
        <v-col id="right-settings-col" class="divide-cols">
          <v-row>
            <v-col class="pb-6 settings-label-text">
              {{ $t("admin.roomSettings.meetingOperations") }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.screenSharing") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.screenSharing"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col class="pl-8">
              <span>
                {{ $t("admin.roomSettings.requireScreenSharingRequest") }}
              </span>
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.requireScreenSharingRequest"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.fileManagement") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.fileManagement"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.handRaising") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.handRaising"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.chat") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch v-model="roomSettings.chat" class="my-0 py-0 mx-4">
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row class="pb-6 settings-label-text">
            <v-col>
              {{ $t("admin.roomSettings.accessFunctions") }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.recording") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.disable") }}</span>
              <v-switch v-model="roomSettings.recording" class="my-0 py-0 mx-4">
              </v-switch>
              <span>{{ $t("admin.roomSettings.enable") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              <label class="pl-8">
                {{ $t("admin.roomSettings.emailLinkToAll") }}
              </label>
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.off") }}</span>
              <v-switch
                v-model="roomSettings.emailLinkToAll"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.on") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.transcription") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.disable") }}</span>
              <v-switch
                v-model="roomSettings.transcription"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.enable") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.remoteTranslation") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.disable") }}</span>
              <v-switch
                v-model="roomSettings.remoteTranslation"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.enable") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.streaming") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.disable") }}</span>
              <v-switch v-model="roomSettings.streaming" class="my-0 py-0 mx-4">
              </v-switch>
              <span>{{ $t("admin.roomSettings.enable") }}</span>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col class="pb-6 settings-label-text">
              {{ $t("admin.roomSettings.support") }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>
              {{ $t("admin.roomSettings.duplicateParticipantHandling") }}
            </v-col>
            <v-col class="d-flex justify-end">
              <span>{{ $t("admin.roomSettings.host") }}</span>
              <v-switch
                v-model="roomSettings.duplicateParticipantHandling"
                class="my-0 py-0 mx-4"
              >
              </v-switch>
              <span>{{ $t("admin.roomSettings.supportCaps") }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RoomTemplates from "@/components/admin/room/edit/room-templates/RoomTemplates.vue";
import { NULL_ROOM_SETTINGS } from "@/model/admin/room/room-settings";
import "reflect-metadata";
import { RoomTemplate } from "@/model/admin/room/room-template";
import { NULL_ROOM_DETAILS } from "@/model/admin/room/room-details";
@Component({
  components: {
    RoomTemplates,
  },
})
export default class SettingsEdit extends Vue {
  value = "null";
  rules = [(v: string | any[]) => v.length <= 35 || "Max 35 characters"];

  templates: RoomTemplate[] = this.$store.getters["RoomTemplateModule/getAsList"];
  
  template: RoomTemplate = this.$route.params.roomId 
    ?  this.$store.getters["TemplateModule/getById"]
    (this.$store.getters["RoomModule/getById"](this.$route.params.roomId).template) 
    : this.$store.getters["RoomTemplateModule/getByOrgId"](this.systemUserMe.organizationIds[0])[0];

  setTemplate() {
    this.roomDetails.template = this.template.uuid;
  }

  get systemUserMe() {
    return this.$store.state.SystemUsersModule.me;
  }

  get roomSettings() {
    if (!this.$store.state.RoomModule.rooms[this.$route.params.roomId]) {
      return NULL_ROOM_SETTINGS;
    }

    return this.$store.state.RoomModule.rooms[this.$route.params.roomId]
      .roomSettings;
  }

  get roomDetails() {
    if (!this.$store.state.RoomModule.rooms[this.$route.params.roomId]) {
      return NULL_ROOM_DETAILS;
    }

    return this.$store.state.RoomModule.rooms[this.$route.params.roomId]
      .roomDetails;
  }
}
</script>

<style lang="scss" scoped>
.divide-cols {
  border-left: solid 1px grey;
}
.settings-label-text {
  font-weight: black;
  font-size: 1rem;
}
.settings-edit-header {
  font-weight: bold;
  font-size: 2rem;
  line-height: 2rem;
}
</style>
