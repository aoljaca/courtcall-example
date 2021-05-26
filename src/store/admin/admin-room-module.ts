import { Module } from "vuex";

const roomSettings = {
  template: "Template Name (Modified)",
  passcode: "YourHonor931",
  video: "ON",
  audio: "ON",
  allowSelectBeforeEnter: "YES",
  waitingRoom: "ON",
  audioOnlyConference: "Ready-to-Meet",
  providerPSTN: "ZIPDX",
  allowParticipantsToggleVideo: "YES",
  allowParticipantsToggleAudio: "YES",
  defaultCanvasLayout: "Grid",
  allowPartcipantsChangeLayout: "YES",
  videoQuality: "HIGH",
  screenSharing: "ON",
  requireScreenSharingRequest: "ON",
  fileManagement: "ON",
  handRaising: "ON",
  chat: "ON",
  recording: "ENABLED",
  emailLinkToAll: "ON",
  transcription: "ENABLED",
  remoteTranslation: "ENABLED",
  streaming: "ENABLED",
  duplicateParticipantHandling: "SUPPORT"
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