import { Module } from "vuex";

const roomSettings = {
  template: "Template Name (Modified)",
  passcode: "YourHonor931",
  allowPasscode: true,
  video: true,
  audio: true,
  allowSelectBeforeEnter: true,
  waitingRoom: true,
  providerPSTN: "ZIPDX",
  allowParticipantsToggleVideo: true,
  allowParticipantsToggleAudio: true,
  defaultCanvasLayout: "Grid",
  allowParticipantsChangeLayout: true,
  videoQuality: "HIGH",
  screenSharing: true,
  requireScreenSharingRequest: true,
  fileManagement: true,
  handRaising: true,
  chat: true,
  recording: true,
  emailLinkToAll: true,
  transcription: true,
  remoteTranslation: true,
  streaming: true,
  duplicateParticipantHandling: true,
}

const roomDetails = {
  organization: "LA County Superior Court - 12345",
  status: "Available",
  phone: "555-555-5555",
  hostAccessCode: "5555",
  participantAccessCode: "5555"
}

const adminRoomModule: Module<any, any> = {
  namespaced: true,
  state: {
    roomSettings: roomSettings,
    roomDetails: roomDetails,
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
};

export default adminRoomModule;