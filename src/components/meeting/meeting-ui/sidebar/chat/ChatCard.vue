<template>
  <div id="chatCard">
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col cols="2 d-flex align-center">
            <v-icon v-if="chat.newMessages">mdi-alert-circle</v-icon>
          </v-col>
          <v-col class="d-flex align-center title-font">
            <span>
              {{ this.chatTitle }}
            </span>
          </v-col>
          <v-col cols="2">
            <v-btn icon @click="selectChat()"
              ><v-icon>mdi-arrow-right</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script lang="ts">
import { INJECTION_TYPES } from "@/inversify/injection-types";
import { Chat } from "@/model/meeting/meeting-ui/side-bar/chat/chat";
import { ChatFormatService } from "@/services/chat-format";
import { inject } from "inversify-props";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class ChatCard extends Vue {
  @inject(INJECTION_TYPES.CHAT_FORMAT)
  chatFormatService: ChatFormatService | undefined;
  @Prop()
  chat: Chat | undefined;

  get chatTitle(): string {
    if (!this.chat) {
      return "Unknown";
    }
    return this.chatFormatService?.formatTitle({
      myId: this.$store.state.ParticipantsModule.me.id,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      participantIds: this.chat!.participants,
      participants: this.$store.state.ParticipantsModule.participants,
      this: this,
      type: this.chat.type,
    }) as string;
  }

  selectChat() {
    this.$store.dispatch("ChatModule/alterSelectedChatId", {
      id: this.chat?.uuid,
    });
  }
}
</script>
<style lang="scss" scoped>
.title-font {
  font-size: 0.75rem;
}
</style>
