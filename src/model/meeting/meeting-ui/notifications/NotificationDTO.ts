import { NotificationDTOType } from "./NotificationDTOType";

export interface NotificationDTO {
  id: string;
  type: NotificationDTOType;
  participantIds: string[];
  data: any;
}
