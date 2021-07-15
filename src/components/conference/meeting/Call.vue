<template>
  <div class="h-100 d-flex flex-column justify-space-between">
    <!-- Header -->
    <call-header />

    <!-- Body -->
    <div class="bc-secondary">
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
import "reflect-metadata";
import { inject } from "inversify-props";
import { WebsocketConnectionService } from "@/services/websocket-connection";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { isEmpty } from "lodash";
import CallHeader from "./navigation/CallHeader.vue";

@Component({
  components: {
    ControlBar,
    VideoPlatform,
    Chat,
    Files,
    Participants,
    CallHeader,
  },
  methods: {
    isEmpty,
  },
})
export default class Call extends Vue {
  @inject(INJECTION_TYPES.WEBSOCKET_CONNECTION)
  websocketConnectionService!: WebsocketConnectionService;

  get sidebarMode(): string {
    return this.$store.state.SidebarModule.sidebar;
  }

  mounted(): void {
    this.websocketConnectionService.connectMeeting();
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
