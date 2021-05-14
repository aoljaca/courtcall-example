<template>
  <div id="audioSetup">
    <v-container fluid class="main-container">
      <v-row>
        <v-col>
          <h3>{{ $t("avOptions.audioSetup.title") }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn-toggle mandatory v-model="audioSetupMode">
            <v-btn value="computerSetup">
              <v-icon>mdi-laptop</v-icon>
              <span>{{ $t("avOptions.audioSetup.computerSetup.title") }}</span>
            </v-btn>
            <v-btn value="callInSetup">
              <v-icon>mdi-phone</v-icon>
              <span>{{ $t("avOptions.audioSetup.callInSetup.title") }}</span>
            </v-btn>
            <v-btn value="callMeSetup">
              <v-icon>mdi-phone-incoming</v-icon>
              <span>{{ $t("avOptions.audioSetup.callMeSetup") }}</span>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="setup-height">
          <call-me-audio-setup
            v-if="audioSetupMode === 'callMeSetup'"
          ></call-me-audio-setup>
          <call-in-audio-setup
            v-if="audioSetupMode === 'callInSetup'"
          ></call-in-audio-setup>
          <computer-audio-setup
            v-if="audioSetupMode === 'computerSetup'"
          ></computer-audio-setup>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import CallMeAudioSetup from "./setup-modes/CallMeAudioSetup.vue";
import CallInAudioSetup from "./setup-modes/CallInAudioSetup.vue";
import ComputerAudioSetup from "./setup-modes/ComputerAudioSetup.vue";
@Component({
  components: {
    CallMeAudioSetup,
    CallInAudioSetup,
    ComputerAudioSetup,
  },
})
export default class AudioSetup extends Vue {
  audioSetupMode = "computerSetup";

  @Watch("audioSetupMode")
  watchAudioSetupMode(newVal: string): void {
    console.log("Setup Mode Changed");
  }
}
</script>
<style lang="scss" scoped></style>
