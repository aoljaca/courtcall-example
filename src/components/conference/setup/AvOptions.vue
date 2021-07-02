<template>
  <div id="avOptions">
    <v-dialog v-model="dialog" width="1000">
      <v-card>
        <v-card-text class="main-modal">
          <v-container>
            <v-row>
              <v-col class="d-flex">
                <h2>{{ $t("avOptions.allowUseHeader") }}</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <span class="text-align-center">{{
                  $t("avOptions.allowUseDescription")
                }}</span>
              </v-col>
            </v-row>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn elevation="0" text @click="dialog = false">{{
              $t("general.dismiss")
            }}</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row class="justify-md-space-between">
        <v-col cols="12" md="4">
          <span class="d-block">
            <h2 class="d-inline">{{ $t("avOptions.internetConnection") }}</h2>
            <h3 class="d-inline pl-2">Good</h3>
          </span>
          <span class="d-block">
            <h2 class="d-inline">{{ $t("avOptions.courtcallSystem") }}</h2>
            <h3 class="d-inline pl-2">Connected</h3>
          </span>
        </v-col>
        <v-col cols="12" md="4" class="d-flex justify-md-end align-center">
          <v-btn
            ><v-icon>mdi-help-circle</v-icon
            ><span class="pl-1">{{ $t("general.getHelp") }}</span></v-btn
          >
        </v-col>
      </v-row>
      <v-row class="setup-height">
        <v-col cols="12" md="6"><video-preview></video-preview></v-col>
        <v-col cols="12" md="6"><audio-setup></audio-setup></v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="6" md="2" class="d-flex justify-end">
          <v-switch :label="$t('general.video')"></v-switch>
        </v-col>
        <v-col cols="6" md="2" class="d-flex justify-start">
          <v-switch :label="$t('general.audio')"></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-switch :label="$t('avOptions.savePreferences')"></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn color="primary">{{ $t("avOptions.joinMeeting") }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
import AudioSetup from "./AudioSetup.vue";
import VideoPreview from "./VideoPreview.vue";
@Component({
  components: {
    AudioSetup,
    VideoPreview,
  },
})
export default class AvOptions extends Vue {
  dialog = false;

  mounted(): void {
    this.dialog = true;
    // navigator.mediaDevices
    //   .getUserMedia({
    //     video: true,
    //     audio: true,
    //   })
    //   .then((stream) => {
    //     this.dialog = false;
    //     stream.getTracks().forEach((t) => t.stop());
    //   });
  }
}
</script>
<style lang="scss" scoped>
.main-modal {
  color: black !important;
}
@media (min-width: 1280px) {
  .setup-height {
    height: 55vh;
    min-height: 400px;
  }
}
</style>
