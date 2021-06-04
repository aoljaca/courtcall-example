export interface RoomSettings {
  template: string;
  passcode: string;
  allowPasscode: boolean;
  video: boolean;
  audio: boolean;
  allowSelectBeforeEnter: boolean;
  waitingRoom: boolean;
  audioOnlyType: string;
  providerPSTN: string;
  allowParticipantsToggleVideo: boolean;
  allowParticipantsToggleAudio: boolean;
  defaultCanvasLayout: string;
  allowParticipantsChangeLayout: boolean;
  videoQuality: string;
  screenSharing: boolean;
  requireScreenSharingRequest: boolean;
  fileManagement: boolean;
  handRaising: boolean;
  chat: boolean;
  recording: boolean;
  emailLinkToAll: boolean;
  transcription: boolean;
  remoteTranslation: boolean;
  streaming: boolean;
  duplicateParticipantHandling: boolean;
}
