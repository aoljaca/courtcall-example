<template>
  <div id="meetingUI">
    <v-container fluid>
      <v-row>
          <v-col class="py-0 header-col">header</v-col>
      </v-row>
      <v-row>
        <v-col class="px-0 py-0">
          <v-container fluid>
            <v-row>
              <v-col class="px-0 py-0">
                <video-platform></video-platform>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="px-0 py-0">
                <control-bar></control-bar>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col class="px-0 py-0 navigation-element" cols="2" v-if="sidebarMode">
            <chat v-if="sidebarMode === 'chat'"></chat>
            <files v-if="sidebarMode === 'files'"></files>
            <participants v-if="sidebarMode === 'participants'"></participants>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ControlBar from "./control-bar/ControlBar.vue";
import VideoPlatform from "./VideoPlatform.vue";
import Chat from './sidebar/chat/Chat.vue';
import Files from './sidebar/files/Files.vue';
import Participants from './sidebar/participants/Participants.vue';
import "reflect-metadata";
@Component({
  components: {
    ControlBar,
    VideoPlatform,
    Chat,
    Files,
    Participants,
  },
})
export default class MeetingUI extends Vue {
  drawer = true;

  get sidebarMode() {
    return this.$store.state.SidebarModule.sidebar;
  }
}
</script>
<style lang="scss" scoped>
.header-col {
    height: 4vh;
    background: lightgray;
}
.navigation-element {
    border-left: 1px solid black;
    overflow-y: auto;
}
</style>
<style lang="scss"></style>
