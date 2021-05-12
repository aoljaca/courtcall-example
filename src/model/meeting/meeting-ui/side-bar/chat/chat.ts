import { ChatMessage } from "./chat-message";

export interface Chat {
    uuid: string;
    participants: number[];
    messages: ChatMessage[];
}