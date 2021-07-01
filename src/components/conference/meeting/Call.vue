<template>
  <div id="meetingUI">
    <v-container fluid>
      <v-row class="body-row">
        <v-col class="px-0 py-0">
          <video-platform></video-platform>
          <control-bar></control-bar>
        </v-col>
        <v-col
          class="px-0 py-0 navigation-element"
          md="3"
          cols="12"
          v-if="sidebarMode"
        >
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
import Chat from "./sidebar/chat/Chat.vue";
import Files from "./sidebar/files/Files.vue";
import Participants from "./sidebar/participants/ParticipantsMainView.vue";
import "reflect-metadata";
import { inject } from "inversify-props";
import { WebsocketConnectionService } from "@/services/websocket-connection";
import { INJECTION_TYPES } from "@/inversify/injection-types";
@Component({
  components: {
    ControlBar,
    VideoPlatform,
    Chat,
    Files,
    Participants,
  },
})
export default class Call extends Vue {
  @inject(INJECTION_TYPES.WEBSOCKET_CONNECTION)
  websocketConnectionService: WebsocketConnectionService | undefined;
  drawer = true;

  get sidebarMode(): string {
    return this.$store.state.SidebarModule.sidebar;
  }

  mounted(): void {
    this.websocketConnectionService?.connectMeeting();
  }
}
</script>
<style lang="scss" scoped>
.header-col {
  height: 4vh;
  background: lightgray;
}
.body-row {
  height: 96vh;
}
.navigation-element {
  border-left: 1px solid black;
  overflow-y: auto;
}
</style>
