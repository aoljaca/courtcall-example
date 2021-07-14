<template>
  <div id="changeBackground">
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col class="d-flex justify-center">
            <span class="font-weight-bold">{{
              $t("conference.meeting.controlBar.more.changeBackground.selectBackground")
            }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-radio-group
              class="background-radio"
              row
              v-model="selectedBackgroundOption"
            >
              <v-radio
                class="py-1"
                :label="$t('avOptions.videoPreview.none')"
                :value="noBackgroundOption"
              ></v-radio>
              <v-radio
                class="py-1"
                :label="$t('avOptions.videoPreview.blur')"
                :value="blurBackgroundOption"
              ></v-radio>
              <v-radio
                class="py-1"
                v-for="background in backgroundOptions"
                :key="background.backgroundUrl"
                :value="background"
              >
                <template v-slot:label>
                  <v-img
                    :alt="background.backgroundUrl"
                    max-height="100"
                    max-width="100"
                    :src="calculateBackgroundUrl(background)"
                  ></v-img>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn elevation="0">{{ $t("general.apply") }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  BackgroundOption,
  NO_BACKGROUND_BLUR_OPTION,
  BACKGROUND_OPTIONS,
  BLUR_OPTION,
} from "@/model/meeting/av-options/background-option";
@Component
export default class ChangeBackground extends Vue {
  noBackgroundOption = NO_BACKGROUND_BLUR_OPTION;
  blurBackgroundOption = BLUR_OPTION;
  backgroundOptions = BACKGROUND_OPTIONS;
  selectedBackgroundOption: BackgroundOption = NO_BACKGROUND_BLUR_OPTION;
  get origin() {
    return document.location.origin;
  }

  calculateBackgroundUrl(option: BackgroundOption) {
    return `${this.origin}/${option.backgroundUrl}`;
  }
}
</script>
