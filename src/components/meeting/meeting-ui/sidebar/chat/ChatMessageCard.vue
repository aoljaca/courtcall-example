<template>
  <div id="chatMessageCard">
    <v-card elevation="2">
      <v-card-subtitle>
        <v-container fluid>
          <v-row>
            <v-col cols="6 small-text">{{ userName }}</v-col>
            <v-col cols="6 small-text"> {{ formatTimestamp }}</v-col>
          </v-row>
        </v-container>
      </v-card-subtitle>
      <v-card-text>{{ message.message }}</v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { ChatMessage } from "@/model/meeting/meeting-ui/side-bar/chat/chat-message";
import { Participant } from "@/model/meeting/meeting-ui/side-bar/participant";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DateTime } from "luxon";
@Component({})
export default class ChatMessageCard extends Vue {
  @Prop()
  message: ChatMessage | undefined;

  get userName() {
    const participant: Participant = this.$store.getters[
      "ParticipantsModule/getByPubNubId"
    ](this.message?.uuid);
    if (participant) {
      return participant.name;
    } else {
      return "Unknown";
    }
  }

  get formatTimestamp() {
    if (!this.message?.timetoken) {
      return "unknown";
    }
    const tsNumber = Number(
      (Number(this.message?.timetoken) / 10000).toFixed(0)
    );
    const dt = DateTime.fromMillis(tsNumber);
    return dt.toFormat("MMM-dd h:mm a");
  }
}
</script>
<style lang="scss" scoped>
.small-text {
  font-size: 0.75rem;
}
</style>
