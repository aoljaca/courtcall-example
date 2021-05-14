<template>
  <div id="controlBar" class="control-bar-background">
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <span class="pr-1">
            <v-btn fab elevation="0">
              <v-icon>mdi-microphone</v-icon>
            </v-btn>
          </span>
          <span>
            <v-btn fab elevation="0">
              <v-icon>mdi-video</v-icon>
            </v-btn>
          </span>
        </v-col>
        <v-col cols="9" class="d-flex justify-center">
          <get-support-icon class="px-2"></get-support-icon>
          <raise-hand-icon class="px-2"></raise-hand-icon>
          <chat-icon class="px-2"></chat-icon>
          <participants-icon class="px-2"></participants-icon>
          <files-icon class="px-2"></files-icon>
          <move-icon class="px-2"></move-icon>
          <share-screen-icon class="px-2"></share-screen-icon>
          <more-icon class="px-2"></more-icon>
        </v-col>
        <v-col cols="1">
          <v-btn fab elevation="0">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChatIcon from "./control-icons/ChatIcon.vue";
import FilesIcon from "./control-icons/FilesIcon.vue";
import GetSupportIcon from "./control-icons/GetSupportIcon.vue";
import MoreIcon from "./control-icons/MoreIcon.vue";
import MoveIcon from "./control-icons/MoveIcon.vue";
import ParticipantsIcon from "./control-icons/ParticipantsIcon.vue";
import RaiseHandIcon from "./control-icons/RaiseHandIcon.vue";
import ShareScreenIcon from "./control-icons/ShareScreenIcon.vue";
@Component({
  components: {
    ChatIcon,
    FilesIcon,
    GetSupportIcon,
    MoreIcon,
    MoveIcon,
    ParticipantsIcon,
    RaiseHandIcon,
    ShareScreenIcon,
  },
})
export default class ControlBar extends Vue {}
</script>
<style lang="scss" scoped>
.control-bar-background {
  background-color: lightgray;
  height: 10vh;
  min-height: 100px;
}
</style>
<style lang="scss">
.control-bar-icon-font {
  font-size: 0.75rem;
}
</style>
