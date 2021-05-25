<template>
  <div id="casesView">
    <v-container fluid>
      <v-row>
        <v-col>
          <span class="font-weight-bold">{{
            $t("sidebar.participants.cases.videoAudioControls")
          }}</span>
        </v-col>
      </v-row>
      <v-row class="pb-1">
        <v-col cols="6">
          <v-btn
            @click="muteAllVideo()"
            elevation="0"
            v-if="controlAllVideoMode === 'mute'"
          >
            <v-icon>mdi-video</v-icon>
            {{ $t("sidebar.participants.cases.stopVideo") }}
          </v-btn>
          <v-btn @click="unmuteAllVideo()" elevation="0" v-else>
            <v-icon>mdi-video-off</v-icon>
            {{ $t("sidebar.participants.cases.startVideo") }}
          </v-btn>
        </v-col>
        <v-col cols="6"></v-col>
      </v-row>
      <hr />
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class CasesView extends Vue {
  controlAllVideoMode: "unmute" | "mute" = "mute";

  controlAllAudioMode: "unmute" | "mute" = "mute";

  muteAllAudio(): void {
    this.controlAllAudioMode = "unmute";
  }

  muteAllVideo(): void {
    this.controlAllVideoMode = "unmute";
  }

  unmuteAllAudio(): void {
    this.controlAllAudioMode = "mute";
  }

  unmuteAllVideo(): void {
    this.controlAllVideoMode = "mute";
  }
}
</script>