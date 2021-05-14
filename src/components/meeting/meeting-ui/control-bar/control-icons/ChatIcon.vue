<template>
  <span id="chatIcon">
    <v-container fluid>
      <v-row class="px-0 py-0">
        <v-col class="px-0 py-0">
          <v-btn
            fab
            elevation="0"
            @click="toggleChatSidebar()"
            :title="$t('meetingUI.controlBar.chat')"
          >
            <v-icon>mdi-message</v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="py-0 px-0">
        <v-col class="py-0 px-0 control-bar-icon-font d-flex justify-center">{{
          $t("meetingUI.controlBar.chat")
        }}</v-col>
      </v-row>
    </v-container>
  </span>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ChatIcon extends Vue {
  toggleChatSidebar() {
    this.$store.dispatch("SidebarModule/alterSidebarMode", {
      sidebarMode: "chat",
    });
  }
}
</script>
