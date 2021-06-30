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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { inject } from "inversify-props";
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { WebsocketConnectionService } from "@/services/websocket-connection";
import ConferenceHeader from "./navigation/ConferenceHeader.vue";

@Component({
  components: {
    ConferenceHeader,
  },
})
export default class Conference extends Vue {
  @inject(INJECTION_TYPES.WEBSOCKET_CONNECTION)
  websocketConnectionService: WebsocketConnectionService | undefined;

  mounted(): void {
    this.websocketConnectionService?.connectMeeting();
  }
}
</script>

<style lang="scss" scoped></style>
