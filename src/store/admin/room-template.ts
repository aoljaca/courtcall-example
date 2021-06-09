import { Module } from "vuex";
import { RoomTemplate } from "@/model/admin/room/room-template";

const templates: {
  [key: string]: RoomTemplate;
} = {
  a: {
    uuid: "T1",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "YourHonor931",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
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
    },
    roomDetails: {
      name: "Judge Frank's Room",
      organization: "LA County Superior Court - 12345",
      status: "Available",
      phone: "555-555-5555",
      hostAccessCode: 5555,
      participantAccessCode: 5555,
    },
    organizationId: "O1",
  },
  b: {
    uuid: "T2",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "HonorYour999",
      allowPasscode: true,
      video: false,
      audio: false,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "HIGH",
      screenSharing: true,
      requireScreenSharingRequest: true,
      fileManagement: true,
      handRaising: true,
      chat: true,
      recording: true,
      emailLinkToAll: false,
      transcription: false,
      remoteTranslation: true,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Paul's Room",
      organization: "Pierce County District Court - 59492",
      status: "Available",
      phone: "000-000-0000",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    organizationId: "O2",
  },
  c: {
    uuid: "T3",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "YourHonYour",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: true,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: true,
      videoQuality: "HIGH",
      screenSharing: true,
      requireScreenSharingRequest: true,
      fileManagement: false,
      handRaising: false,
      chat: false,
      recording: false,
      emailLinkToAll: true,
      transcription: true,
      remoteTranslation: true,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Mikes's Room",
      organization: "Pierce County Superior Court - 59492",
      status: "Available",
      phone: "253-800-2200",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    organizationId: "O3",
  },
  d: {
    uuid: "T4",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "passwordcodeisbad",
      allowPasscode: true,
      video: false,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: true,
      videoQuality: "MEDIUM",
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
    },
    roomDetails: {
      name: "Judge Paul's Room",
      organization: "King County Municipal Court - 59492",
      status: "Available",
      phone: "210-444-0550",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    organizationId: "O4",
  },
  e: {
    uuid: "T5",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "time49313",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: true,
      allowParticipantsToggleAudio: true,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: true,
      videoQuality: "HIGH",
      screenSharing: true,
      requireScreenSharingRequest: false,
      fileManagement: false,
      handRaising: false,
      chat: true,
      recording: true,
      emailLinkToAll: true,
      transcription: false,
      remoteTranslation: false,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Matt's Room",
      organization: "King County District Court - 59492",
      status: "Available",
      phone: "502-122-4432",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    organizationId: "O5",
  },
};

const roomTemplateModule: Module<any, any> = {
  namespaced: true,
  state: {
    templates: templates;
  },
  mutations: {},
  actions: {},
  getters: {
  },
};

export default roomTemplateModule;
