import { PersistentNotificationType } from "./PersistentNotificationType";

export interface PersistentNotification {
  id: string;
  type: PersistentNotificationType;
  participantIds: string[];
}
