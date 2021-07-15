<template>
  <div>
    <!-- Header -->
    <v-app-bar color="white" flat>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />
      <img src="../../../../public/img/icons/CourtCallIconDark.png" />
    </v-app-bar>

    <!-- Body -->
    <v-row>
      <v-col>
        <video-platform />
      </v-col>
      <v-col
        class="px-0 py-0 navigation-element"
        md="3"
        cols="12"
        v-if="sidebarMode"
      >
        <chat v-if="sidebarMode === 'chat'" />
        <files v-if="sidebarMode === 'files'" />
        <participants v-if="sidebarMode === 'participants'" />
      </v-col>
    </v-row>

    <!-- Control Bar -->
    <control-bar />
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
import { isEmpty } from "lodash";

@Component({
  components: {
    ControlBar,
    VideoPlatform,
    Chat,
    Files,
    Participants,
  },
  methods: {
    isEmpty,
  },
})
export default class Call extends Vue {
  @inject(INJECTION_TYPES.WEBSOCKET_CONNECTION)
  websocketConnectionService!: WebsocketConnectionService;
  drawer = true;

  get isMobile(): boolean {
    // TODO: Reference mobile breakpoint vuetify service
    return false;
  }

  get sidebarMode(): string {
    return this.$store.state.SidebarModule.sidebar;
  }

  mounted(): void {
    this.websocketConnectionService.connectMeeting();
  }
}
</script>
<style lang="scss" scoped></style>
