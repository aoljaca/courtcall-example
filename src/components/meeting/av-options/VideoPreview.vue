<template>
  <div id="videoPreview">
    <v-container>
      <v-row>
        <v-col>
          <h3>{{ $t("avOptions.videoPreview.title") }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="!videoDevices.length">
          <span class="font-weight-bold">{{
            $t("avOptions.videoPreview.noDevicesDetected")
          }}</span>
        </v-col>
        <v-col v-if="videoDevices.length" class="d-flex justify-center">
          <v-progress-circular
            v-if="shouldShowLoading"
            :size="100"
            indeterminate
            :title="$t('general.loading')"
          ></v-progress-circular>
          <v-hover :class="{'d-none':!videoVisible}" id="hoverElement">
            <template v-slot:default="{hover}" >
              <v-card elevation="0">
                <v-card-text class="p-0"
                  >
                  <canvas id="canvas-preview" :class="{'d-none':shouldHideCanvas,'video-dimensions':true}"></canvas>
                  <video
                    autoplay
                    :class="{'d-none':shouldHideVideo,'video-dimensions':true}"
                    id="video-preview"
                  ></video
                ></v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="hover || selectFocused" absolute class="video-overlay">
                    <v-container fluid class="h-100 align-end d-flex">
                      <v-row>
                        <v-col class="py-0" v-if="openBackground" cols="12">
                            <v-radio-group class="background-radio" row v-model="selectedBackgroundOption" @change="setUpBackgroundBlur()">
                                <v-radio
                                :label="$t('avOptions.videoPreview.none')"
                                :value="noBackgroundOption"></v-radio>
                                <v-radio
                                :label="$t('avOptions.videoPreview.blur')"
                                :value="blurBackgroundOption"></v-radio>
                                <v-radio 
                                v-for="background in backgroundOptions"
                                :key="background.backgroundUrl"
                                :value="background"
                                >
                                <template v-slot:label>
                                    <v-img v-if="shouldShowRadioImages" max-height="50" max-width="50" :alt="background.backgroundUrl" :src="background.backgroundUrl"></v-img>
                                </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                        <v-col cols="8" class="py-0">
                          <v-select
                            @focus="focusSelect()"
                            @blur="blurSelect()"
                            v-model="selectedVideoDevice"
                            @change="switchMediaDevice()"
                            id="video-select"
                            :items="videoDevices"
                            item-text="label"
                            item-value="device-id"
                            :title="
                              $t('avOptions.videoPreview.videoSelectTitle')
                            "
                            return-object
                            single-line
                          ></v-select>
                        </v-col>
                        <v-col cols="4" class="d-flex align-center py-0">
                          <v-btn @click="toggleOpenBackground()" elevation="0" class="overlay-btn">{{
                            $t("avOptions.videoPreview.background")
                          }}</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import {BackgroundOption} from '@/model/meeting/av-options/background-option';
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { IBackgroundBlurService } from "@/services/background-blur";
@Component({})
export default class VideoPreview extends Vue {

  @inject(INJECTION_TYPES.BACKGROUND_BLUR)
  backgroundBlurService: IBackgroundBlurService|undefined;

  selectedVideoDevice: MediaDeviceInfo | null = null;
  selectFocused = false;
  videoDevices: MediaDeviceInfo[] = [];
  styleObject = {
    display: "none",
  };
  videoVisible = false;
  openBackground = false;
  readonly noBackgroundOption: BackgroundOption = {
      type: 'none'
  }
  readonly blurBackgroundOption: BackgroundOption = {
      type: 'blur'
  }
  readonly backgroundOptions: BackgroundOption[] = [
    {
      type: 'background',
      backgroundUrl: `${this.origin}/assets/backgrounds/beach-chairs-seaside.jpg`
    },
    {
      type: 'background',
      backgroundUrl: `${this.origin}/assets/backgrounds/boise.jpg`
    },
    {
      type: 'background',
      backgroundUrl: `${this.origin}/assets/backgrounds/city-skyscrapers.jpg`
    },
    {
      type: 'background',
      backgroundUrl: `${this.origin}/assets/backgrounds/home-office.jpg`
    },
    {
      type: 'background',
      backgroundUrl: `${this.origin}/assets/backgrounds/law-gavel.jpg`
    },
        {
      type: 'background',
      backgroundUrl: `${this.origin}/assets/backgrounds/courtroom.jpg`
    }
  ]
  selectedBackgroundOption: BackgroundOption = this.noBackgroundOption;

  setUpBackgroundBlur() {
    this.openBackground = false;
    const setupFunc = () => {
        this.backgroundBlurService?.alterVideo('video-preview','canvas-preview',this.selectedBackgroundOption,this.$store);
        this.openBackground = true;
    } 
    setTimeout(setupFunc)
  }



  toggleOpenBackground() {
      this.openBackground = !this.openBackground;
  }
  get shouldHideVideo() {
    return !this.videoVisible || this.$store.state.BackgroundBlurModule.mode === 'loading' || this.$store.state.BackgroundBlurModule.mode === 'on';
  }

  get origin() {
    return document.location.origin;
  }

  get shouldHideCanvas() {
    return !this.videoVisible || this.$store.state.BackgroundBlurModule.mode === 'loading' || this.$store.state.BackgroundBlurModule.mode === 'off';
  }

  get shouldShowLoading() {
    return !this.videoVisible || this.$store.state.BackgroundBlurModule.mode === 'loading';
  }

  get shouldShowRadioImages() {
    return this.openBackground && !this.shouldShowLoading;
  }

  async switchMediaDevice() {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        deviceId: this.selectedVideoDevice?.deviceId,
      },
    });
    (document.getElementById(
      "video-preview"
    ) as HTMLVideoElement).srcObject = stream;
    setTimeout(() => this.backgroundBlurService?.alterVideo('video-preview','canvas-preview',this.selectedBackgroundOption,this.$store),500);
  }

  focusSelect() {
    this.selectFocused = true;
  }
  blurSelect() {
    this.selectFocused = false;
  }

  async mounted() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((device) => {
      if (device.kind === "videoinput") {
        this.videoDevices.push(device);
      }
    });
    if (this.videoDevices.length) {
      this.selectedVideoDevice = this.videoDevices[0];
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          deviceId: this.selectedVideoDevice.deviceId,
        },
      });

      const videoElement = document.getElementById(
        "video-preview"
      ) as HTMLVideoElement;
      videoElement.srcObject = stream;

      setTimeout(() => {
        this.videoVisible = true;
        this.styleObject.display = "block";
      }, 500);
    }
  }
}
</script>
<style lang="scss" scoped>
.video-dimensions {
  height: 45vh;
}
.overlay-btn {
  background: #0000 !important;
}
</style>
<style lang="scss">
.video-overlay {
  .v-overlay__content {
    height: 100% !important;
    width: 100% !important;
  }
}
.background-radio {
  .v-messages {
    display: none;
  }
}
</style>
