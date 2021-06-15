interface RoomSettings {
  template: string | null;
  passcode: string | null;
  allowPasscode: boolean | null;
  video: boolean | null;
  audio: boolean | null;
  allowSelectBeforeEnter: boolean | null;
  waitingRoom: boolean | null;
  audioOnlyType: string | null;
  providerPSTN: string | null;
  allowParticipantsToggleVideo: boolean | null;
  allowParticipantsToggleAudio: boolean | null;
  defaultCanvasLayout: string | null;
  allowParticipantsChangeLayout: boolean | null;
  videoQuality: string | null;
  screenSharing: boolean | null;
  requireScreenSharingRequest: boolean | null;
  fileManagement: boolean | null;
  handRaising: boolean | null;
  chat: boolean | null;
  recording: boolean | null;
  emailLinkToAll: boolean | null;
  transcription: boolean | null;
  remoteTranslation: boolean | null;
  streaming: boolean | null;
  duplicateParticipantHandling: boolean | null;
}

const NULL_ROOM_SETTINGS: RoomSettings = {
  template: null,
  passcode: null,
  allowPasscode: null,
  video: null,
  audio: null,
  allowSelectBeforeEnter: null,
  waitingRoom: null,
  audioOnlyType: null,
  providerPSTN: null,
  allowParticipantsToggleVideo: null,
  allowParticipantsToggleAudio: null,
  defaultCanvasLayout: null,
  allowParticipantsChangeLayout: null,
  videoQuality: null,
  screenSharing: null,
  requireScreenSharingRequest: null,
  fileManagement: null,
  handRaising: null,
  chat: null,
  recording: null,
  emailLinkToAll: null,
  transcription: null,
  remoteTranslation: null,
  streaming: null,
  duplicateParticipantHandling: null,
};

export { RoomSettings, NULL_ROOM_SETTINGS };
