<template>
  <div>
    <conference-header />

    <v-container fluid class="px-10">
      <v-row>
        <v-col class="px-0 py-0">
          <router-view :key="$route.fullPath"></router-view>
        </v-col>
      </v-row>
    </v-container>

    <conference-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { WebsocketConnectionService } from "@/services/websocket-connection";
import ConferenceHeader from "./navigation/ConferenceHeader.vue";
import ConferenceFooter from "./navigation/ConferenceFooter.vue";
import { CustomTheme, ThemeService } from "@/services/theme-service";

@Component({
  components: {
    ConferenceHeader,
    ConferenceFooter,
  },
})
export default class Conference extends Vue {
  @inject(INJECTION_TYPES.WEBSOCKET_CONNECTION)
  websocketConnectionService!: WebsocketConnectionService;
  @inject(INJECTION_TYPES.THEME_SERVICE)
  themeService!: ThemeService;
  
  mounted(): void {
    this.websocketConnectionService.connectMeeting();
    this.themeService.switchTheme(CustomTheme.CONFERENCE, this.$vuetify);
  }
}
</script>

<style lang="scss" scoped></style>
