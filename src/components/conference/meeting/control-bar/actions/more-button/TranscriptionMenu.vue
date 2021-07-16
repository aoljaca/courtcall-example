<template>
  <div id="transcription">
    <v-card>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center">
            <h4>
              {{ $t("conference.meeting.controlBar.more.transcription.title") }}
            </h4>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="6">
            <v-btn :title="$t('general.cancel')">{{
              $t("general.cancel")
            }}</v-btn>
          </v-col>
          <v-col v-if="!transcriptionStarted" cols="6">
            <v-btn
              @click="toggleTranscription()"
              :title="$t('general.start')"
              >{{ $t("general.start") }}</v-btn
            >
          </v-col>
          <v-col cols="6" v-if="transcriptionStarted">
            <v-btn @click="toggleTranscription()" :title="$t('general.stop')">{{
              $t("general.stop")
            }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class TranscriptionMenu extends Vue {
  transcriptionStarted = false;

  toggleTranscription(): void {
    this.transcriptionStarted = !this.transcriptionStarted;
  }
}
</script>
