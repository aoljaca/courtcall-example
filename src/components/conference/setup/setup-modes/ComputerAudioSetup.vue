<template>
  <div>
    <v-row>
      <v-col>
        <div class="d-flex">
          <label id="microphone-select-label" for="microphone-select">
            {{ $t("avOptions.audioSetup.computer.microphone") }}
          </label>
          <v-spacer />
          <template v-if="isTestingMic">
            <av-media
              v-if="micMedia"
              line-color="#006298"
              :canvWidth="75"
              :canv-height="25"
              :frequ-lnum="10"
              :media="micMedia"
            />
            <v-btn class="ml-2" icon small @click="isTestingMic = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <a v-else class="c-accent" @click="onTestMic">{{
            $t("avOptions.audioSetup.computer.test")
          }}</a>
        </div>
        <v-select
          v-model="selectedMicrophone"
          id="microphone-select"
          :items="audioInputDevices"
          item-text="label"
          item-value="deviceId"
          aria-describedby="microphone-select-label"
          :disabled="isTestingMic"
          return-object
          hide-details
          single-line
          dense
          @change="onChangeAudioInputDevice"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="hasSpeakerControl">
        <div class="d-flex">
          <label id="speaker-select-label" for="speaker-select">
            {{ $t("avOptions.audioSetup.computer.speakers") }}
          </label>
          <v-spacer />
          <template v-if="isTestingSpeakers">
            <span class="c-primary">Sound Playing...</span>
            <audio ref="speakerTestAudio">
              <source :src="speakerTestSoundPath" type="audio/mpeg" />
            </audio>
            <v-btn class="ml-2" icon small @click="onStopTestingSpeakers">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <a v-else class="c-accent" @click="onTestSpeakers">{{
            $t("avOptions.audioSetup.computer.test")
          }}</a>
        </div>
        <v-select
          v-model="selectedSpeaker"
          id="speaker-select"
          :items="audioOutputDevices"
          item-text="label"
          item-value="deviceId"
          aria-describedby="speaker-select-label"
          return-object
          single-line
          hide-details
          dense
          :disabled="this.isTestingSpeakers"
          @change="onChangeAudioOutputDevice"
        />
      </v-col>
    </v-row>
    <v-checkbox
      v-model="echoCancellation"
      color="accent"
      :label="$t('avOptions.audioSetup.computer.echoCancelation')"
      @click="onToggleEchoCancellation"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ComputerAudioSetup extends Vue {
  isTestingMic = false;
  isTestingSpeakers = false;
  micMedia: MediaStream = {} as MediaStream;
  speakerMedia: MediaStream = {} as MediaStream;
  speakerTestSoundPath = "../../../../assets/sounds/bicycle-bell-sound.mp3";

  get hasSpeakerControl(): boolean {
    return !!this.audioOutputDevices.length;
  }

  get echoCancellation(): boolean {
    return this.$store.state.ConferenceSetupModule.echoCancellation;
  }

  get selectedMicrophone(): MediaDeviceInfo {
    return this.$store.state.ConferenceSetupModule.selectedAudioInputDevice;
  }

  get selectedSpeaker(): MediaDeviceInfo {
    return this.$store.state.ConferenceSetupModule.selectedAudioOutputDevice;
  }

  get audioInputDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.audioInputDevices;
  }

  get audioOutputDevices(): MediaDeviceInfo[] {
    return this.$store.state.ConferenceSetupModule.audioOutputDevices;
  }

  async mounted(): Promise<void> {
    await this.$store.dispatch("ConferenceSetupModule/loadAudioDevices");
    this.micMedia = await this.getMicMedia();
    this.speakerMedia = await this.getSpeakerMedia();
  }

  async getAudioMediaStream(
    deviceId: string,
    groupId: string
  ): Promise<MediaStream> {
    return await navigator.mediaDevices.getUserMedia({
      audio: {
        deviceId: deviceId,
        groupId: groupId,
      },
    });
  }

  async getMicMedia(): Promise<MediaStream> {
    return await this.getAudioMediaStream(
      this.selectedMicrophone.deviceId,
      this.selectedMicrophone.groupId
    );
  }

  async getSpeakerMedia(): Promise<MediaStream> {
    return await this.getAudioMediaStream(
      this.selectedSpeaker.deviceId,
      this.selectedSpeaker.groupId
    );
  }

  async onTestMic(): Promise<void> {
    this.isTestingMic = true;
    this.micMedia = await this.getMicMedia();
  }

  async onTestSpeakers(): Promise<void> {
    this.isTestingSpeakers = true;
    this.speakerMedia = await this.getSpeakerMedia();
    const refs = this.$refs as any;
    refs["speakerTestAudio"].setSinkId(this.selectedSpeaker.deviceId);
    refs["speakerTestAudio"].play();
    refs["speakerTestAudio"].onended = () => (this.isTestingSpeakers = false);
  }

  onStopTestingSpeakers(): void {
    this.isTestingSpeakers = false;
    const refs = this.$refs as any;
    refs["speakerTestAudio"].pause();
    refs["speakerTestAudio"].currentTime = 0;
  }

  onToggleEchoCancellation(): void {
    this.$store.dispatch("ConferenceSetupModule/toggleEchoCancellation");
  }

  async onChangeAudioInputDevice(device: MediaDeviceInfo): Promise<void> {
    await this.$store.dispatch(
      "ConferenceSetupModule/alterSelectedAudioInputDevice",
      device
    );

    this.micMedia = await this.getMicMedia();
  }

  async onChangeAudioOutputDevice(device: MediaDeviceInfo): Promise<void> {
    await this.$store.dispatch(
      "ConferenceSetupModule/alterSelectedAudioOutputDevice",
      device
    );

    this.speakerMedia = await this.getSpeakerMedia();
  }
}
</script>

<style lang="scss" scoped></style>
