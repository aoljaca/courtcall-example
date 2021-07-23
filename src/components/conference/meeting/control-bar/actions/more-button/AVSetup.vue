<template>
  <div id="avSetup">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" class="py-0"
            ><h4>{{ $t("avOptions.internetConnection") }}</h4></v-col
          >
          <v-col class="py-0">Good</v-col>
        </v-row>
        <v-row>
          <v-col class="py-0" cols="3">
            <h4>{{ $t("avOptions.courtcallSystem") }}</h4>
          </v-col>
          <v-col class="py-0">Connected</v-col>
        </v-row>
        <v-row>
          <v-col class="py-0 px-0">
            <v-container fluid>
              <v-row>
                <v-col
                  ><h4>
                    {{
                      $t(
                        "conference.meeting.controlBar.more.avSetup.videoSetup"
                      )
                    }}
                  </h4></v-col
                >
              </v-row>
              <v-row>
                <v-col class="video-col">
                  <video autoplay id="av-setup-video"></video>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    v-model="selectedVideoDevice"
                    :items="possibleVideoDevices"
                    @change="changeVideoDevice()"
                    item-text="label"
                    :title="
                      $t(
                        'conference.meeting.controlBar.more.avSetup.selectVideoDevice'
                      )
                    "
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col class="py-0 px-0">
            <v-container fluid>
              <v-row>
                <v-col
                  ><h4>
                    {{
                      $t(
                        "conference.meeting.controlBar.more.avSetup.audioSetup"
                      )
                    }}
                  </h4></v-col
                >
              </v-row>
              <v-row>
                <v-col class="py-0">
                  <label for="mic-select" class="font-weight-bold">{{
                    $t("avOptions.audioSetup.computerSetup.microphone")
                  }}</label>
                  <v-select
                    id="mic-select"
                    v-model="selectedAudioDevice"
                    :items="possibleAudioDevices"
                    item-text="label"
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="py-0">
                  <label for="speaker-select" class="font-weight-bold">{{
                    $t("avOptions.audioSetup.computerSetup.speakers")
                  }}</label>
                  <v-select
                    id="speaker-select"
                    v-model="selectedSpeakerDevice"
                    :items="possibleSpeakerDevices"
                    item-text="label"
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="py-0">
                  <v-switch
                    :label="
                      $t('avOptions.audioSetup.computerSetup.echoCancelation')
                    "
                  ></v-switch>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn elevation="0">{{ $t("general.cancel") }}</v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn elevation="0">{{ $t("general.apply") }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class AvSetup extends Vue {
  selectedVideoDevice: MediaDeviceInfo | null = null;
  selectedAudioDevice: MediaDeviceInfo | null = null;
  selectedSpeakerDevice: MediaDeviceInfo | null = null;
  possibleAudioDevices: MediaDeviceInfo[] = [];
  possibleSpeakerDevices: MediaDeviceInfo[] = [];
  possibleVideoDevices: MediaDeviceInfo[] = [];
  async mounted(): Promise<void> {
    const mediaDevices = await navigator.mediaDevices.enumerateDevices();
    mediaDevices.forEach((device) => {
      if (device.kind === "videoinput") {
        this.possibleVideoDevices.push(device);
      }
      if (device.kind === "audioinput") {
        this.possibleAudioDevices.push(device);
      }
      if (device.kind === "audiooutput") {
        this.possibleSpeakerDevices.push(device);
      }
    });
    if (this.possibleVideoDevices.length) {
      this.selectedVideoDevice = this.possibleVideoDevices[0];
    }
    if (this.possibleSpeakerDevices.length) {
      this.selectedSpeakerDevice = this.possibleSpeakerDevices[0];
    }
    if (this.possibleAudioDevices.length) {
      this.selectedAudioDevice = this.possibleAudioDevices[0];
    }
    const videoElement = document.getElementById(
      "av-setup-video"
    ) as HTMLVideoElement;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    videoElement.srcObject = stream;
  }

  async changeVideoDevice(): Promise<void> {
    const videoElement = document.getElementById(
      "av-setup-video"
    ) as HTMLVideoElement;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        deviceId: this.selectedVideoDevice?.deviceId,
      },
    });
    videoElement.srcObject = stream;
  }
}
</script>
<style lang="scss" scoped>
.video-col {
  max-height: 20vh;
}
#av-setup-video {
  height: 100%;
  width: 100%;
}
</style>
