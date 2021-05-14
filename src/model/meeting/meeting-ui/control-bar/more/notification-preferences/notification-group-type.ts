type recipientType =
  | "hostsAndModerators"
  | "selectedConferenceRooms"
  | "selectedCases";
interface NotificationGroupType {
  translationText: string;
  type: recipientType;
}

const NOTIFICATION_GROUP_TYPES: NotificationGroupType[] = [
  {
    translationText:
      "meetingUI.controlBar.more.sendNotification.hostsAndModeratorsOnly",
    type: "hostsAndModerators",
  },
  {
    translationText:
      "meetingUI.controlBar.more.sendNotification.selectedConferenceRooms",
    type: "selectedConferenceRooms",
  },
  {
    translationText: "meetingUI.controlBar.more.sendNotification.selectedCases",
    type: "selectedCases",
  },
];

export { NOTIFICATION_GROUP_TYPES, NotificationGroupType };
