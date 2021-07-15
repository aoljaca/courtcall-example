<template>
  <v-container class="h-100 d-flex flex-column justify-flex-end">
    <v-row align="end" class="flex-grow-0 bc-secondary opacity-70">
      <v-col>
        <v-select
          @focus="selectFocused = true"
          @blur="selectFocused = false"
          v-model="selectedVideoDevice"
          @change="switchMediaDevice"
          :items="videoDevices"
          item-text="label"
          :title="$t('avOptions.videoPreview.videoSelectTitle')"
          return-object
          hide-details
          single-line
          dense
        />
      </v-col>
      <v-col cols="auto">
        <v-btn
          :dark="!openBackground"
          :outlined="!openBackground"
          :color="openBackground ? 'accent' : 'primary'"
          @click="onToggleShowBackgrounds()"
          depressed
          >{{ $t("avOptions.videoPreview.background") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BackgroundOption } from "@/model/meeting/av-options/background-option";
import BackgroundBlurService from "@/services/background-blur";
@Component({})
export default class VideoOverlay extends Vue {
  @Prop()
  hover!: boolean;

  selectFocused = false;
  openBackground = false;

  get selectedVideoDevice(): MediaDeviceInfo {
    return this.$store.state.ConferenceSetupModule.selectedVideoDevice;
  }

  get videoDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.videoDevices;
  }

  get activeBackground(): BackgroundOption {
    return this.$store.state.ConferenceSetupModule.activeBackground;
  }

  onToggleShowBackgrounds() {
    this.openBackground = !this.openBackground;
    this.$emit("toggledBackgrounds");
  }

  async switchMediaDevice(newDevice: MediaDeviceInfo) {
    await this.$store.dispatch(
      "ConferenceSetupModule/alterSelectedVideoDevice",
      newDevice
    );

    setTimeout(
      () =>
        BackgroundBlurService.alterVideo(
          "video-preview",
          "canvas-preview",
          this.activeBackground
        ),
      500
    );
  }
}
</script>

<style lang="scss" scoped>
.justify-flex-end {
  justify-content: flex-end;
}
</style>
