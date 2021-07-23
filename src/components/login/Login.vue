<template>
  <div class="d-flex flex-column space-between h-100 bc-secondary">
    <conference-header id="header" />

    <v-row justify="center">
      <v-col sm="6" md="5" lg="4" class="text-right" align-self="center">
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
import AdminLogin from "@/components/login/AdminLogin.vue";
import JoinConference from "@/components/login/JoinConference.vue";
import ConferenceHeader from "@/components/conference/navigation/ConferenceHeader.vue";
import ConferenceFooter from "@/components/conference/navigation/ConferenceFooter.vue";
import { CustomTheme } from "@/services/theme-service";
import ThemeService from "@/services/theme-service";
import WebsocketConnectionService from "@/services/websocket/websocket-connection";
@Component({
  components: {
    AdminLogin,
    ConferenceHeader,
    ConferenceFooter,
    JoinConference,
  },
})
export default class Login extends Vue {
  mounted(): void {
    WebsocketConnectionService.connectMeeting();
    ThemeService.switchTheme(CustomTheme.CONFERENCE, this.$vuetify);
  }
}
</script>

<style lang="scss"></style>
