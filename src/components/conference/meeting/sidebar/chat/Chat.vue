<template>
  <div id="chatBar">
    <v-container fluid>
      <v-row>
        <v-col>
          <h2>{{ $t("sidebar.chat.header") }}</h2>
        </v-col>
      </v-row>
      <div v-if="!selectedChat">
        <chat-main-view></chat-main-view>
      </div>
      <v-row v-if="selectedChat">
        <v-col class="py-0 px-0">
          <chat-room :chat="selectedChat"></chat-room>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { Component, Vue } from "vue-property-decorator";
import ChatMainView from "./ChatMainView.vue";
import ChatRoom from "./ChatRoom.vue";
@Component({
  components: {
    ChatMainView,
    ChatRoom,
  },
})
export default class ChatComponent extends Vue {
  get selectedChat(): Chat {
    return this.$store.getters["ChatModule/selectedChat"];
  }
}
</script>
