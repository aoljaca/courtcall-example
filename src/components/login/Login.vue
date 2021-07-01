<template>
  <div class="d-flex flex-column space-between h-100 bc-secondary">
    <conference-header id="header" />

      <v-row justify="center">
        <v-col cols="auto" class="text-right" align-self="center">
          <admin-login />
        </v-col>

        <!-- TODO: Present this as another option -->
        <!-- <v-col cols="auto" class="text-center mx-5">
          <v-divider vertical />
        </v-col>
        <v-col cols="4" class="text-left" align-self="center">
          <join-conference />
        </v-col> -->
      </v-row>

    <conference-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "reflect-metadata";
import AdminLogin from "@/components/login/AdminLogin.vue";
import JoinConference from "@/components/login/JoinConference.vue";
import ConferenceHeader from "@/components/conference/navigation/ConferenceHeader.vue";
import ConferenceFooter from "@/components/conference/navigation/ConferenceFooter.vue";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { CustomTheme, ThemeService } from "@/services/theme-service";
import { inject } from "inversify-props";
import { WebsocketConnectionService } from "@/services/websocket-connection";
@Component({
  components: {
    AdminLogin,
    ConferenceHeader,
    ConferenceFooter,
    JoinConference,
  },
})
export default class Login extends Vue {
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

<style lang="scss"></style>
