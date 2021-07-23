<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <v-btn
          fab
          dark
          outlined
          depressed
          class="pa-5"
          @click="toggleChatSidebar()"
          :title="$t('conference.meeting.controlBar.chat')"
        >
          <v-icon>mdi-message</v-icon>
        </v-btn>
        <p class="white--text body-2 mt-2 mb-0">
          {{ $t("conference.meeting.controlBar.chat") }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ChatButton extends Vue {
  toggleChatSidebar(): void {
    this.$store.dispatch("SidebarModule/alterSidebarMode", {
      sidebarMode: "chat",
    });
  }
}
</script>
