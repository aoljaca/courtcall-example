import { WS_TYPES } from "@/model/ws-types";

export interface SocketEvent {
  eventType: WS_TYPES;
  actionName: string;
  log?: string;
}

export const SOCKET_EVENTS: SocketEvent[] = [
  {
    eventType: WS_TYPES.PARTICIPANTS_UPDATED,
    actionName: "ParticipantsModule/alterParticipants",
  },
  {
    eventType: WS_TYPES.MY_PARTICIPANT_UPDATED,
    actionName: "ParticipantsModule/alterMyParticipant",
  },
  {
    eventType: WS_TYPES.CHATS_UPDATED,
    actionName: "ChatModule/alterChats",
  },
  {
    eventType: WS_TYPES.CASES_UPDATED,
    actionName: "CasesModule/alterCases",
  },
  {
    eventType: WS_TYPES.SHARES_UPDATED,
    actionName: "FileShareModule/alterShares",
  },
  {
    eventType: WS_TYPES.ROLES_UPDATED,
    actionName: "PermissionsModule/alterRoles",
  },
  {
    eventType: WS_TYPES.SUBCONFERENCES_UPDATED,
    actionName: "SubconferenceModule/alterSubconferences",
  },
  {
    eventType: WS_TYPES.CURRENT_SUBCONFERENCE_UPDATED,
    actionName: "SubconferenceModule/alterCurrentSubconference",
  },
  {
    eventType: WS_TYPES.NOTIFICATION_SENT,
    actionName: "ConferenceNotificationModule/processNotification",
  },
  {
    eventType: WS_TYPES.NOTIFICATION_RESOLVED,
    actionName: "ConferenceNotificationModule/resolveNotification",
  },
];
