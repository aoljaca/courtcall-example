export type InviteParticipantMode =
  | "sharedLink"
  | "singleLink"
  | "scheduledLink";

interface InviteParticipantType {
  type: InviteParticipantMode;
  translationText: string;
}

const INVITE_PARTICIPANT_TYPES: InviteParticipantType[] = [
  {
    type: "sharedLink",
    translationText:
      "meetingUI.controlBar.more.inviteParticipants.sharedAccessLink",
  },
  {
    type: "singleLink",
    translationText:
      "meetingUI.controlBar.more.inviteParticipants.dedicatedLink",
  },
  {
    type: "scheduledLink",
    translationText:
      "meetingUI.controlBar.more.inviteParticipants.scheduledLink",
  },
];

export { InviteParticipantType, INVITE_PARTICIPANT_TYPES };
