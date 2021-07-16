<template>
  <v-card
    tile
    flat
    color="primary"
    class="pa-5 w-100 d-flex flex-row justify-space-between"
  >
    <audio-video-controls />

    <div class="d-flex flex-row dynamic-buttons">
      <!-- Condensed Version -->
      <template v-if="showCondensedVersion">
        <v-divider dark vertical />
        <participants-button />
        <more-button />
        <v-divider dark vertical class="mx-0" />
      </template>

      <!-- All Buttons -->
      <template v-else>
        <move-button />
        <screen-share-button />
        <v-divider dark vertical class="mx-8" />
        <chat-button />
        <participants-button />
        <files-button />
        <v-divider dark vertical class="mx-8" />
        <more-button />
      </template>
    </div>

    <exit-button />
  </v-card>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatButton from "./actions/ChatButton.vue";
import FilesButton from "./actions/FilesButton.vue";
import GetSupportIcon from "./actions/GetSupportIcon.vue";
import MoreButton from "./actions/more-button/MoreButton.vue";
import MoveButton from "./actions/MoveButton.vue";
import ParticipantsButton from "./actions/ParticipantsButton.vue";
import RaiseHandIcon from "./actions/RaiseHandIcon.vue";
import ScreenShareButton from "./actions/ScreenShareButton.vue";
import AudioVideoControls from "./actions/audio-video-controls/AudioVideoControls.vue";
import ExitButton from "./actions/exit/ExitButton.vue";

@Component({
  components: {
    AudioVideoControls,
    MoveButton,
    ScreenShareButton,
    ChatButton,
    FilesButton,
    GetSupportIcon,
    MoreButton,
    ParticipantsButton,
    RaiseHandIcon,
    ExitButton,
  },
})
export default class ControlBar extends Vue {
  get showCondensedVersion(): boolean {
    return this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm;
  }
}
</script>

<style lang="scss" scoped>
.dynamic-buttons {
  * + * {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
