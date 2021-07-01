<template>
  <div id="computerAudioSetup">
    <v-container>
      <v-row>
        <v-col cols="6">
          <label
            class="font-weight-black"
            id="microphone-select-label"
            for="microphone-select"
          >
            {{ $t("avOptions.audioSetup.computerSetup.microphone") }}
          </label>
          <v-select
            v-model="selectedMicrophone"
            id="microphone-select"
            :items="microphoneItems"
            item-text="label"
            item-value="deviceId"
            :label="$t('avOptions.audioSetup.computerSetup.noDevicesDetected')"
            aria-describedby="microphone-select-label"
            return-object
            single-line
          ></v-select>
          <v-btn color="primary">{{
            $t("avOptions.audioSetup.computerSetup.test")
          }}</v-btn>
        </v-col>
        <v-col v-if="hasSpeakerControl" cols="6">
          <label
            class="font-weight-black"
            id="speaker-select-label"
            for="speaker-select"
          >
            {{ $t("avOptions.audioSetup.computerSetup.speakers") }}
          </label>
          <v-select
            v-model="selectedSpeaker"
            id="speaker-select"
            :items="speakerItems"
            item-text="label"
            item-value="deviceId"
            :label="$t('avOptions.audioSetup.computerSetup.noDevicesDetected')"
            aria-describedby="speaker-select-label"
            return-object
            single-line
          ></v-select>
          <v-btn color="primary">{{
            $t("avOptions.audioSetup.computerSetup.test")
          }}</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-switch
            :label="$t('avOptions.audioSetup.computerSetup.echoCancelation')"
          ></v-switch>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class computerAudioSetup extends Vue {
  microphoneItems: MediaDeviceInfo[] = [];
  speakerItems: MediaDeviceInfo[] = [];
  selectedMicrophone: MediaDeviceInfo | null = null;
  selectedSpeaker: MediaDeviceInfo | null = null;

  get hasSpeakerControl() {
    const element = document.createElement("video");
    return (element as any).setSinkId;
  }

  async mounted() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    devices.forEach((device) => {
      if (device.kind === "audiooutput") {
        this.speakerItems.push(device);
      }
      if (device.kind === "audioinput") {
        this.microphoneItems.push(device);
      }
    });
    if (this.speakerItems.length) {
      this.selectedSpeaker = this.speakerItems[0];
    }
    if (this.microphoneItems.length) {
      this.selectedMicrophone = this.microphoneItems[0];
    }
  }
}
</script>
<style lang="scss" scoped></style>
