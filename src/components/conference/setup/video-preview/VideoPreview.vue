<template>
  <div class="h-100 d-flex flex-column justify-space-around">
    <!-- Video Loading -->
    <div v-if="isVideoLoading" class="text-center">
      <v-progress-circular
        :size="100"
        indeterminate
        :title="$t('general.loading')"
      />
    </div>

    <!-- Video ON -->
    <v-hover
      :class="{
        'd-none':
          hasActiveBackground || isVideoDisabledOrUnavailable || isVideoLoading,
      }"
    >
      <template v-slot:default="{ hover }">
        <v-card flat rounded="10" class="d-flex">
          <canvas
            id="canvas-preview"
            :class="{
              'w-100': true,
              'd-none':
                !hasActiveBackground ||
                isVideoDisabledOrUnavailable ||
                isVideoLoading,
              'canvas-element': true,
            }"
          />
          <video
            autoplay
            :class="{
              'w-100': true,
              'd-none':
                hasActiveBackground ||
                isVideoDisabledOrUnavailable ||
                isVideoLoading,
            }"
            id="video-preview"
          />

          <video-overlay
            v-if="!isVideoDisabledOrUnavailable && !isVideoLoading"
            class="p-absolute"
            :hover="hover"
            @toggledBackgrounds="onToggleShowBackgrounds"
          />
        </v-card>
      </template>
    </v-hover>
    <background-selector
      v-if="openBackground"
      :class="{
        'd-none': isVideoDisabledOrUnavailable || isVideoLoading,
      }"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NO_BACKGROUND_BLUR_OPTION } from "@/model/meeting/av-options/background-option";
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { IBackgroundBlurService } from "@/services/background-blur";
import {
  AudioState,
  VideoState,
} from "@/store/conference/conference-setup-module";
import VideoOverlay from "./VideoOverlay.vue";
import BackgroundSelector from "./BackgroundSelector.vue";

@Component({
  components: {
    VideoOverlay,
    BackgroundSelector,
  },
})
export default class VideoPreview extends Vue {
  @inject(INJECTION_TYPES.BACKGROUND_BLUR)
  backgroundBlurService!: IBackgroundBlurService;

  openBackground = false;

  get videoDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.videoDevices;
  }

  get hasActiveBackground(): boolean {
    return (
      this.$store.state.ConferenceSetupModule.activeBackground !==
      NO_BACKGROUND_BLUR_OPTION
    );
  }

  get audioState(): AudioState {
    return this.$store.state.ConferenceSetupModule.audioState;
  }

  get videoState(): VideoState {
    return this.$store.state.ConferenceSetupModule.videoState;
  }

  get isVideoLoading(): boolean {
    return this.videoState === VideoState.Loading;
  }

  get isVideoEnabled(): boolean {
    return this.videoState === VideoState.Enabled;
  }

  get isVideoDisabledOrUnavailable(): boolean {
    return (
      this.videoState === VideoState.Disabled ||
      this.videoState === VideoState.Unavailable
    );
  }

  async mounted(): Promise<void> {
    this.$store.dispatch(
      "ConferenceSetupModule/alterVideoState",
      VideoState.Loading
    );
    await this.$store.dispatch("ConferenceSetupModule/loadVideoDevices");

    if (this.videoDevices.length) {
      await this.$store.dispatch(
        "ConferenceSetupModule/alterSelectedVideoDevice",
        this.videoDevices[0]
      );
      this.$store.dispatch(
        "ConferenceSetupModule/alterVideoState",
        VideoState.Enabled
      );
    }

    setTimeout(() => {
      this.backgroundBlurService.bootstrap();
    }, 500);
  }

  async destroyed(): Promise<void> {
    this.$store.dispatch("ConferenceSetupModule/toggleVideoState");
  }

  onToggleShowBackgrounds() {
    this.openBackground = !this.openBackground;
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: 1280px) {
  .video-dimensions {
    max-height: 45vh;
  }
}
@media (max-width: 1279px) {
  .video-dimensions {
    width: 100%;
  }
}

.canvas-element {
  background-size: cover !important;
}
</style>
