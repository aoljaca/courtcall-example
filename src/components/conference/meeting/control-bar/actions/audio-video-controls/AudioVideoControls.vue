<template>
  <div>
    <v-row dense>
      <v-col class="text-center">
        <!-- Toggle Audio ON/OFF -->
        <v-btn
          icon
          dark
          x-large
          outlined
          depressed
          class="pa-5"
          :disabled="!canEnableAudio"
          @click="onToggleAudio"
        >
          <v-icon color="white">
            {{ audioStatus.icon }}
          </v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">{{ audioStatus.text }}</p>
      </v-col>
      <v-col cols="auto" class="ml-4 text-center">
        <!-- Toggle Video ON/OFF -->
        <v-btn
          icon
          dark
          x-large
          outlined
          depressed
          class="pa-5"
          :disabled="!canEnableVideo"
          @click="onToggleVideo"
        >
          <v-icon color="white">
            {{ videoStatus.icon }}
          </v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">{{ videoStatus.text }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import {
  AudioState,
  VideoState,
} from "@/store/conference/conference-setup-module";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AudioVideoControls extends Vue {
  get isVideoEnabled(): boolean {
    return this.videoState === VideoState.Enabled;
  }

  get isAudioEnabled(): boolean {
    return this.audioState === AudioState.Unmuted;
  }

  get videoState(): VideoState {
    return this.$store.getters["ConferenceModule/videoState"];
  }

  get audioState(): AudioState {
    return this.$store.getters["ConferenceModule/audioState"];
  }

  get canEnableVideo(): boolean {
    return this.$store.getters["ConferenceModule/canEnableVideo"];
  }

  get canEnableAudio(): boolean {
    return this.$store.getters["ConferenceModule/canEnableAudio"];
  }

  get videoStatus(): {
    icon: string;
    text: string;
  } {
    return {
      icon: this.isVideoEnabled ? "mdi-video" : "mdi-video-off-outline",
      text: this.isVideoEnabled
        ? (this.$t("conference.meeting.controlBar.stopVideo") as string)
        : (this.$t("conference.meeting.controlBar.startVideo") as string),
    };
  }

  get audioStatus(): {
    icon: string;
    text: string;
  } {
    return {
      icon: this.isAudioEnabled ? "mdi-microphone" : "mdi-microphone-off",
      text: this.isAudioEnabled
        ? (this.$t("conference.meeting.controlBar.mute") as string)
        : (this.$t("conference.meeting.controlBar.unmute") as string),
    };
  }

  async onToggleVideo(): Promise<void> {
    if (this.videoState === VideoState.Disabled && !this.canEnableVideo) {
      return;
    }

    await this.$store.dispatch("ConferenceSetupModule/toggleVideoState");
  }

  onToggleAudio(): void {
    const newState = this.isAudioEnabled
      ? AudioState.Muted
      : AudioState.Unmuted;
    this.$store.dispatch("ConferenceSetupModule/alterAudioState", newState);
  }
}
</script>

<style lang="scss" scoped></style>
