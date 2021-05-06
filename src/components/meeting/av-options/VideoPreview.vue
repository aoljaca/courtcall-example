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
            v-if="!videoVisible"
            :size="100"
            indeterminate
            :title="$t('general.loading')"
          ></v-progress-circular>
          <v-hover :style="styleObject" id="hoverElement">
            <template v-slot:default="">
              <v-card elevation="0">
                <v-card-text class="p-0"
                  ><video
                    class="video-dimensions"
                    autoplay
                    id="video-preview"
                  ></video
                ></v-card-text>

                <v-fade-transition>
                  <v-overlay v-if="true" absolute class="video-overlay">
                    <v-container fluid class="h-100 align-end d-flex">
                      <v-row>
                        <v-col cols="6">
                          <v-select
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
@Component
export default class VideoPreview extends Vue {
  selectedVideoDevice: MediaDeviceInfo | null = null;
  videoDevices: MediaDeviceInfo[] = [];
  styleObject = {
    display: "none",
  };
  videoVisible = false;

  async switchMediaDevice() {
      const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
              deviceId: this.selectedVideoDevice?.deviceId
          }
      });
      (document.getElementById('video-preview') as HTMLVideoElement).srcObject = stream;
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
        this.styleObject.display = 'block'
      }, 500);
    }
  }
}
</script>
<style lang="scss" scoped>
.video-dimensions {
  height: 45vh;
}
</style>
<style lang="scss">
.video-overlay {
  .v-overlay__content {
    height: 100% !important;
    width: 100% !important;
  }
}
</style>
