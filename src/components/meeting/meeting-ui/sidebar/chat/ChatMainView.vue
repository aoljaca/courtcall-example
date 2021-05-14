<template>
  <div id="chatMainView">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-end">
          <v-btn
            fab
            @click="openAddScreen"
            :title="$t('sidebar.chat.chatOverview.newChat')"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div v-if="creatingChat">
        <v-row>
          <v-col>
            <v-select
              :label="$t('sidebar.chat.chatOverview.selectParticipants')"
              :items="participants"
              item-text="name"
              multiple
              chips
              return-object
              dense
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-space-between">
            <v-btn @click="cancelCreation()">{{ $t("general.cancel") }}</v-btn>
            <v-btn>{{ $t("sidebar.chat.chatOverview.newChat") }}</v-btn>
          </v-col>
        </v-row>
      </div>
      <div v-if="!creatingChat">
        <v-row v-for="chat in chats" :key="chat.uuid">
          <v-col>
            <chat-card :chat="chat"></chat-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script lang="ts">
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Vue } from "vue-property-decorator";
import ChatCard from "./ChatCard.vue";
@Component({
  components: {
    ChatCard,
  },
})
export default class ChatMainView extends Vue {
  creatingChat = false;

  selectedParticipants: Participant[] = [];
  openAddScreen(): void {
    this.creatingChat = true;
  }

  cancelCreation() {
    this.creatingChat = false;
    this.selectedParticipants = [];
  }

  get participants(): Participant[] {
    return this.$store.getters["ParticipantsModule/getAsListNoSelf"];
  }

  get chats() {
    return this.$store.getters["ChatModule/chatsAsList"];
  }
}
</script>
