export interface ChatMessage {
    message: string;
    timetoken: string;
    uuid: string;
    message_type: string|null;
}