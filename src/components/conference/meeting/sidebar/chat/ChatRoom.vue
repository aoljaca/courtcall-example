<template>
  <div id="chatRoom">
    <v-container fluid>
      <v-row>
        <v-col cols="2">
          <v-btn @click="clearChat()" icon
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          >
        </v-col>
        <v-col class="d-flex align-center justify-center"
          ><h4>{{ title }}</h4></v-col
        >
        <v-col cols="2" class="d-flex align-center"
          ><v-icon>mdi-alert-circle</v-icon></v-col
        >
      </v-row>
      <v-row class="message-row">
        <v-col
          v-for="message in messages"
          cols="12"
          class=""
          :key="message.timetoken"
        >
          <chat-message-card :message="message"></chat-message-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10"
          ><v-textarea
            auto-grow
            :label="$t('general.sendMessage')"
          ></v-textarea>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <v-btn icon :title="$t('general.sendMessage')">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { ChatFormatService } from "@/services/chat-format";
import { inject } from "inversify-props";
import { Component, Prop, Vue } from "vue-property-decorator";
import ChatMessageCard from "./ChatMessageCard.vue";
@Component({
  components: {
    ChatMessageCard,
  },
})
export default class ChatRoom extends Vue {
  @Prop()
  chat: Chat | undefined;

  @inject(INJECTION_TYPES.CHAT_FORMAT)
  chatFormatService: ChatFormatService | undefined;

  clearChat() {
    this.$store.dispatch("ChatModule/alterSelectedChatId", { id: null });
  }

  get messages() {
    return this.$store.getters["ChatModule/messagesForChat"](this.chat?.uuid);
  }

  get title() {
    return this.chatFormatService?.formatTitle({
      this: this,
      participantIds: this.chat!.participants,
      participants: this.$store.state.ParticipantsModule.participants,
      myId: this.$store.state.ParticipantsModule.me.id,
      type: this.chat!.type,
    });
  }
}
</script>
<style lang="scss" scoped>
.message-row {
  height: 50vh;
  overflow-y: auto;
}
</style>
