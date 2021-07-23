<template>
  <v-card color="secondary" flat class="pa-10">
    <v-row>
      <v-col cols="auto" align-self="center">
        <h1 class="c-primary">
          {{ conference ? conference.displayName : "Room Name Here" }}
        </h1>
      </v-col>

      <v-spacer />

      <v-col
        cols="auto"
        align-self="center"
        class="d-flex flex-row justify-center align-center"
      >
        <!-- Toggle Save Preferences -->
        <v-checkbox
          v-model="savePreferences"
          :label="$t('avOptions.savePreferences')"
          color="accent"
          class="mr-5"
        />

        <!-- Toggle Video ON/OFF -->
        <v-btn
          large
          fab
          depressed
          outlined
          :color="videoStatus.btnColor"
          class="mr-5"
          @click="onToggleVideo"
        >
          <v-icon :color="videoStatus.iconColor">
            {{ videoStatus.icon }}
          </v-icon>
        </v-btn>

        <!-- Toggle Audio ON/OFF -->
        <v-btn
          large
          fab
          depressed
          outlined
          :color="audioStatus.btnColor"
          class="mr-5"
          @click="onToggleAudio"
        >
          <v-icon :color="audioStatus.iconColor">
            {{ audioStatus.icon }}
          </v-icon>
        </v-btn>

        <!-- Join Meeting -->
        <v-btn x-large color="accent" :to="{ name: 'Waiting Room' }">{{
          $t("avOptions.joinMeeting")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { SubConference } from "@/model/meeting/meeting-ui/sub-conference";
import {
  AudioState,
  VideoState,
} from "@/store/conference/conference-setup-module";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SetupBar extends Vue {
  savePreferences = false;

  get isVideoEnabled(): boolean {
    return this.videoState === VideoState.Enabled;
  }

  get isAudioEnabled(): boolean {
    return this.audioState === AudioState.Unmuted;
  }

  get videoState(): VideoState {
    return this.$store.state.ConferenceSetupModule.videoState;
  }

  get audioState(): AudioState {
    return this.$store.state.ConferenceSetupModule.audioState;
  }

  get videoStatus(): { icon: string; iconColor: string; btnColor: string } {
    return {
      icon: this.isVideoEnabled ? "mdi-video" : "mdi-video-off-outline",
      iconColor: this.isVideoEnabled ? "accent" : "#b5b5b5",
      btnColor: this.isVideoEnabled ? "accent" : "#b5b5b5",
    };
  }

  get audioStatus(): { icon: string; iconColor: string; btnColor: string } {
    return {
      icon: this.isAudioEnabled ? "mdi-microphone" : "mdi-microphone-off",
      iconColor: this.isAudioEnabled ? "accent" : "#b5b5b5",
      btnColor: this.isAudioEnabled ? "accent" : "#b5b5b5",
    };
  }

  get conferenceId(): string {
    return this.$route.params.conferenceId;
  }

  get conference(): SubConference {
    return this.$store.getters["ConferenceModule/getSubConferenceByid"](
      this.conferenceId
    );
  }

  async onToggleVideo(): Promise<void> {
    await this.$store.dispatch("ConferenceSetupModule/toggleVideoState");
  }

  onToggleAudio(): void {
    const newState = this.isAudioEnabled
      ? AudioState.Muted
      : AudioState.Unmuted;
    this.$store.dispatch("ConferenceSetupModule/alterAudioState", newState);
  }

  async destroyed(): Promise<void> {
    if (this.videoState === VideoState.Enabled) {
      this.$store.dispatch("ConferenceSetupModule/toggleVideoState");
    }
  }
}
</script>

<style lang="scss" scoped></style>
