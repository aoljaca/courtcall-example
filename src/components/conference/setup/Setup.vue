<template>
  <div>
    <v-overlay v-model="showPermissionsPrompt">
      <request-permissions-card
        @permissionsConfirmed="showPermissionsPrompt = false"
      />
    </v-overlay>

    <!-- Connection Status -->
    <v-row class="pt-2 pr-16">
      <v-col class="text-right">
        <span class="c-primary">
          {{ $t("avOptions.internetConnection") }}
          <v-icon class="mr-2 mb-1" small :color="internetStatus.color">
            {{ internetStatus.icon }}
          </v-icon>
          {{ $t("avOptions.courtcallSystem") }}
          <v-icon class="mb-1" small :color="systemStatus.color">
            {{ systemStatus.icon }}
          </v-icon>
        </span>
      </v-col>
    </v-row>

    <div class="calc-height d-flex flex-column justify-space-around">
      <div>
        <v-row dense justify="center">
          <!-- Video Setup Label -->
          <v-col dense cols="5" lg="5" md="5" sm="10">
            <h3>
              <v-icon color="accent" size="28" class="mr-1"
                >mdi-video-outline</v-icon
              >
              {{ $t("avOptions.videoPreview.title") }}
            </h3>
          </v-col>
          <!-- Audio Setup Label -->
          <v-col dense cols="3" lg="3" md="3" sm="10">
            <h3>
              <v-icon color="accent" size="24" class="mb-1 mr-1"
                >mdi-volume-high</v-icon
              >
              {{ $t("avOptions.audioSetup.title") }}
            </h3>
          </v-col>
        </v-row>

        <!-- Setup Content -->
        <v-row justify="center">
          <v-col cols="5" lg="5" md="5" sm="10" class="text-center">
            <!-- Video Off/Unavailable -->
            <v-card
              v-if="isVideoDisabledOrUnavailable"
              flat
              height="400"
              color="secondary"
              class="h-100 w-100 d-flex text-center justify-space-around"
            >
              <v-icon size="80" color="primary">mdi-video-off-outline</v-icon>
            </v-card>
            <!-- Video On -->
            <video-preview v-else />
          </v-col>
          <v-col cols="3" lg="3" md="3" sm="10">
            <audio-setup />
          </v-col>
        </v-row>

        <!-- Setup Bar -->
        <v-row dense justify="center" class="mt-8">
          <v-col cols="8" lg="8" md="8" sm="10">
            <setup-bar />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
import AudioSetup from "./AudioSetup.vue";
import VideoPreview from "./video-preview/VideoPreview.vue";
import RequestPermissionsCard from "./RequestPermissionsCard.vue";
import SetupBar from "./SetupBar.vue";
import { VideoState } from "@/store/conference/conference-setup-module";

@Component({
  components: {
    AudioSetup,
    VideoPreview,
    RequestPermissionsCard,
    SetupBar,
  },
})
export default class Setup extends Vue {
  showPermissionsPrompt = true;

  get internetStatus(): { icon: string; color: string } {
    const connected = true;
    return {
      icon: connected ? "mdi-check-circle" : "mdi-close-circle",
      color: connected ? "success" : "error",
    };
  }

  get systemStatus(): { icon: string; color: string } {
    const connected = true;
    return {
      icon: connected ? "mdi-check-circle" : "mdi-close-circle",
      color: connected ? "success" : "error",
    };
  }

  get videoState(): VideoState {
    return this.$store.state.ConferenceSetupModule.videoState;
  }

  get isVideoDisabledOrUnavailable(): boolean {
    return (
      this.videoState === VideoState.Disabled ||
      this.videoState === VideoState.Unavailable
    );
  }

  get videoDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.videoDevices;
  }

  get audioInputDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.audioInputDevices;
  }

  get audioOutputDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.audioOutputDevices;
  }

  async mounted(): Promise<void> {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        this.showPermissionsPrompt = false;
        stream.getTracks().forEach((t) => t.stop());
      });
  }

  destroyed(): void {
    this.$store.dispatch("ConferenceSetupModule/stopAllStreams");
  }
}
</script>

<style lang="scss" scoped>
$status-bar-height: 50px;

.calc-height {
  height: calc(100% - #{$status-bar-height});
}
</style>
