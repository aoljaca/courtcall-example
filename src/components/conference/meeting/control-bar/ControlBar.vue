<template>
  <div id="controlBar" class="control-bar-background">
    <v-container fluid class="px-0 py-0">
      <v-row>
        <v-col class="d-flex align-center" cols="4" md="2">
          <span class="pr-1">
            <v-btn icon elevation="0">
              <v-icon>mdi-microphone</v-icon>
            </v-btn>
          </span>
          <span>
            <v-btn icon elevation="0">
              <v-icon>mdi-video</v-icon>
            </v-btn>
          </span>
        </v-col>
        <v-col cols="4" md="1">
          <get-support-icon></get-support-icon>
        </v-col>
        <v-col cols="4" md="1">
          <raise-hand-icon></raise-hand-icon>
        </v-col>
        <v-col cols="4" md="1">
          <chat-icon></chat-icon>
        </v-col>
        <v-col cols="4" md="1">
          <participants-icon></participants-icon>
        </v-col>
        <v-col cols="4" md="1">
          <files-icon></files-icon>
        </v-col>
        <v-col cols="4" md="1">
          <move-icon></move-icon>
        </v-col>
        <v-col cols="4" md="1">
          <share-screen-icon></share-screen-icon>
        </v-col>
        <v-col cols="4" md="1">
          <more-icon></more-icon>
        </v-col>

        <v-col cols="4" md="1" class="d-flex align-center">
          <v-btn icon elevation="0">
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
  min-height: max(75px, calc(10vh + 12px));
}
</style>
<style lang="scss">
.control-bar-icon-font {
  font-size: 0.75rem;
}
</style>
