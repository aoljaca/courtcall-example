<template>
  <div>
    <v-row dense>
      <v-col class="text-center">
        <v-btn
          icon
          dark
          x-large
          outlined
          depressed
          class="pa-5"
          :title="$t('conference.meeting.controlBar.shareScreen.title')"
        >
          <v-icon>mdi-laptop</v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">
          {{ $t("conference.meeting.controlBar.shareScreen.title") }}
        </p></v-col
      >
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ScreenShareButton extends Vue {}
</script>
