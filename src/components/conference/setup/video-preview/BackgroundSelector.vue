<template>
  <v-card color="secondary" flat class="mt-2 py-4 w-100">
    <v-slide-group :value="selectedBackground" show-arrows mandatory>
      <v-slide-item
        v-for="(background, i) in backgrounds"
        :key="i"
        v-slot="{ active, toggle }"
        :value="background"
      >
        <v-card
          rounded
          flat
          outlined
          width="75"
          height="50"
          :class="`${
            active ? 'accent-border' : ''
          } mx-2 text-center justify-center d-flex flex-column`"
          @click="
            toggle();
            setUpBackgroundBlur(background);
          "
        >
          <span>
            {{ background.title }}
          </span>
          <v-img
            v-if="background.backgroundUrl"
            class="h-100 w-100"
            :alt="background.backgroundUrl"
            :src="buildBackgroundURL(background)"
          />
          <div v-if="active" class="p-absolute text-end h-100 w-100">
            <v-icon
              color="accent"
              size="16"
              class="mr-1"
              v-text="'mdi-check-circle'"
            />
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  BackgroundOption,
  BACKGROUND_OPTIONS,
} from "@/model/meeting/av-options/background-option";
import BackgroundBlurService from "@/services/background-blur";
import VideoOverlay from "./VideoOverlay.vue";
@Component({
  components: {
    VideoOverlay,
  },
})
export default class BackgroundSelector extends Vue {
  readonly backgrounds = BACKGROUND_OPTIONS;
  openBackground = false;

  get selectedBackground(): BackgroundOption {
    return this.$store.state.ConferenceSetupModule.activeBackground;
  }

  buildBackgroundURL(option: BackgroundOption) {
    return `${document.location.origin}/${option.backgroundUrl}`;
  }

  setUpBackgroundBlur(selectedBackground: BackgroundOption) {
    if (selectedBackground) {
      BackgroundBlurService.alterVideo(
        "video-preview",
        "canvas-preview",
        selectedBackground
      );
    }
  }

  onToggleShowBackgrounds() {
    this.openBackground = !this.openBackground;
  }
}
</script>
<style lang="scss" scoped>
.accent-border {
  border: var(--v-accent-base) 1px solid !important;
}
</style>
