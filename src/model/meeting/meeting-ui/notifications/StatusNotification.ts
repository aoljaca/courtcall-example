import { StatusNotificationType } from "./StatusNotificationType";

export interface StatusNotification {
  type: StatusNotificationType;
  message: string;
  dismissTimeInSeconds?: number;
}
