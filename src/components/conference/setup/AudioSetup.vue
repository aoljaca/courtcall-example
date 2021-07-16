<template>
  <div>
    <div class="d-flex flex-row justify-space-between">
      <v-btn
        v-for="mode in audioSetupModes"
        :key="mode.setupMode"
        large
        depressed
        :outlined="isSelected(mode.setupMode)"
        :color="isSelected(mode.setupMode) ? 'accent' : 'secondary'"
        :class="isSelected(mode.setupMode) ? 'c-accent' : 'c-primary'"
        @click="audioSetupMode = mode.setupMode"
      >
        <v-icon class="mr-2">{{ mode.icon }}</v-icon>
        <span>{{ mode.title }}</span>
      </v-btn>
    </div>

    <br />

    <computer-audio-setup v-if="audioSetupMode === AudioSetupMode.COMPUTER" />
    <call-in-audio-setup v-if="audioSetupMode === AudioSetupMode.CALL_IN" />
    <call-me-audio-setup v-if="audioSetupMode === AudioSetupMode.CALL_ME" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CallMeAudioSetup from "../setup/setup-modes/CallMeAudioSetup.vue";
import CallInAudioSetup from "../setup/setup-modes/CallInAudioSetup.vue";
import ComputerAudioSetup from "../setup/setup-modes/ComputerAudioSetup.vue";

enum AudioSetupMode {
  COMPUTER = "Computer",
  CALL_IN = "Call In",
  CALL_ME = "Call Me",
}

@Component({
  components: {
    CallMeAudioSetup,
    CallInAudioSetup,
    ComputerAudioSetup,
  },
})
export default class AudioSetup extends Vue {
  AudioSetupMode = AudioSetupMode;
  audioSetupModes = [
    {
      setupMode: AudioSetupMode.COMPUTER,
      icon: "mdi-laptop",
      title: this.$t("avOptions.audioSetup.computer.title"),
    },
    {
      setupMode: AudioSetupMode.CALL_IN,
      icon: "mdi-phone",
      title: this.$t("avOptions.audioSetup.callIn.title"),
    },
    {
      setupMode: AudioSetupMode.CALL_ME,
      icon: "mdi-phone-incoming",
      title: this.$t("avOptions.audioSetup.callMe.title"),
    },
  ];

  audioSetupMode = AudioSetupMode.COMPUTER;

  isSelected(mode: AudioSetupMode): boolean {
    return this.audioSetupMode === mode;
  }
}
</script>
<style lang="scss" scoped></style>
