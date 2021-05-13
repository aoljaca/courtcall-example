import { ChatMessage } from "./chat-message";
export type ChatType = "regular" | "room" | "moderators";
export interface Chat {
  uuid: string;
  participants: number[];
  messages: ChatMessage[];
  type: ChatType;
  newMessages: boolean;
}
