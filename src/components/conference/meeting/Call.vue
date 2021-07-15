<template>
  <div class="h-100 d-flex flex-column justify-space-between">
    <!-- Header -->
    <v-app-bar color="white" flat>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer" />
      <img src="../../../../public/img/icons/CourtCallIconDark.png" />
    </v-app-bar>

    <!-- Body -->
    <div>
      <!-- Temporarily Disabled until Video Portion is revised -->
      <!-- <v-row>
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
      </v-row> -->
    </div>

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
import WebsocketConnectionService from "@/services/websocket-connection";
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
  drawer = true;

  get isMobile(): boolean {
    // TODO: Reference mobile breakpoint vuetify service
    return false;
  }

  get sidebarMode(): string {
    return this.$store.state.SidebarModule.sidebar;
  }

  mounted(): void {
    WebsocketConnectionService.connectMeeting();
  }
}
</script>
<style lang="scss" scoped>
$header-height: 65px;
$control-bar-height: 110px;

.calc-height {
  height: calc(100% - #{$header-height} - #{$control-bar-height}) !important;
}
</style>
