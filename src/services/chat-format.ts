import { ChatFormatParams } from "@/model/meeting/meeting-ui/side-bar/chat/chat-format-params";

class ChatFormatService {
  formatTitle(params: ChatFormatParams): string {
    if (params.type === "moderators") {
      return params.this.$t("sidebar.chat.chatCard.hostsAndModerators");
    }
    if (params.type === "room") {
      return params.this.$t("sidebar.chat.chatCard.room");
    }
    const actualParticipants = params.participantIds
      .filter((id) => id !== params.myId)
      .map((p) =>
        params.participants[p] ? params.participants[p].name : "Unknown"
      );
    if (actualParticipants.length === 0) {
      return params.this.$t("sidebar.chat.chatCard.nobody");
    } else if (actualParticipants.length === 1) {
      return actualParticipants[0];
    } else if (actualParticipants.length == 2) {
      return `${actualParticipants[0]} and ${actualParticipants[1]}`;
    } else if (actualParticipants.length <= 4) {
      let returnString = "";
      for (let i = 0; i < actualParticipants.length - 1; i++) {
        returnString += `${actualParticipants[i]},`;
      }
      returnString += `and ${
        actualParticipants[actualParticipants.length - 1]
      }`;
      return returnString;
    } else {
      let returnString = "";
      for (let i = 0; i < 4; i++) {
        returnString += `${actualParticipants[i]},`;
      }
      returnString += `+ ${actualParticipants.length - 4} more`;
      return returnString;
    }
  }
}

export default new ChatFormatService();
