<template>
  <div class="h-100">
    <conference-header v-if="!hideAll" />

    <router-view :class="classes" :key="$route.fullPath" />

    <conference-footer v-if="showFooter && !hideAll" />
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

  get classes(): string {
    let classes = "conf-body-height-header";

    if (this.showFooter) {
      classes = "conf-body-height-both";
    }

    if (this.hideAll) {
      classes = "";
    }

    return classes;
  }

  get hideAll(): boolean {
    const routesWithFooter = ["Conference Call"];
    return routesWithFooter.includes(this.$route.name as string);
  }

  get showFooter(): boolean {
    const routesWithFooter = ["Login", "Room Entry"];
    return routesWithFooter.includes(this.$route.name as string);
  }

  mounted(): void {
    this.websocketConnectionService.connectMeeting();
    this.themeService.switchTheme(CustomTheme.CONFERENCE, this.$vuetify);
  }
}
</script>

<style lang="scss" scoped></style>
