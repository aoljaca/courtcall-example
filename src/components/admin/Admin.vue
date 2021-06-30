<template>
  <div>
    <v-container fluid class="px-10">
      <v-row no-gutters>
        <v-col cols="auto">
          <h1>CourtCall <span class="c-primary">Admin</span></h1>
        </v-col>

        <v-col cols="6" align-self="center" class="text-center">
          <navigation />
        </v-col>

        <v-spacer />
        <v-col cols="auto" align-self="center" class="text-right">
          <user-actions />
        </v-col>
      </v-row>
    </v-container>

    <v-divider />
    <breadcrumbs v-if="showBreadcrumbs"/>
    <search v-if="showSearch"/>
    <v-divider class="mt-3" v-if="showBreadcrumbs || showSearch" />

    <v-container fluid class="px-10">
      <v-row>
        <v-col class="px-0 py-0">
          <router-view :key="$route.fullPath"></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "@/components/admin/dashboard/Navigation.vue";
import UserActions from "@/components/admin/dashboard/UserActions.vue";
import Breadcrumbs from "@/components/admin/navigation/Breadcrumbs.vue";
import Search from "@/components/admin/dashboard/search/Search.vue";
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { WebsocketConnectionService } from "@/services/websocket-connection";
import { CustomTheme, ThemeService } from "@/services/theme-service";
@Component({
  components: {
    Navigation,
    UserActions,
    Breadcrumbs,
    Search,
  },
})
export default class Admin extends Vue {
  @inject(INJECTION_TYPES.WEBSOCKET_CONNECTION)
  websocketConnectionService!: WebsocketConnectionService;
  @inject(INJECTION_TYPES.THEME_SERVICE)
  themeService!: ThemeService;

  get showBreadcrumbs(): boolean {
    return !this.isSearchOrDashboard;
  }

  get showSearch(): boolean {
    return this.isSearchOrDashboard;
  }

  get isSearchOrDashboard(): boolean {
    const routeNames = ["Search Results", "Dashboard"];
    return routeNames.includes(this.$route.name!);
  }

  mounted(): void {
    this.websocketConnectionService.connectMeeting();
    this.themeService.switchTheme(CustomTheme.ADMIN, this.$vuetify);
  }
}
</script>

<style lang="scss" scoped></style>
