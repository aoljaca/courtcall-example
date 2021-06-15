import { Module } from "vuex";
import { Room } from "@/model/admin/room/room";

const rooms: {
  [key: string]: Room;
} = {
  R1: {
    uuid: "R1",
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
    templateId: "0",
    modified: false,
  },
  R2: {
    uuid: "R2",
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
    templateId: "0",
    modified: false,
  },
  R3: {
    uuid: "R3",
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
    templateId: "0",
    modified: false,
  },
  R4: {
    uuid: "R4",
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
    templateId: "0",
    modified: false,
  },
  R5: {
    uuid: "R5",
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
    templateId: "0",
    modified: false,
  },
  R6: {
    uuid: "R6",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "verygoodpasscod3",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "HIGH",
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: false,
      handRaising: false,
      chat: false,
      recording: false,
      emailLinkToAll: false,
      transcription: false,
      remoteTranslation: false,
      streaming: false,
      duplicateParticipantHandling: false,
    },
    roomDetails: {
      name: "Judge Mikes's Room",
      organization: "Puyallup District Court - 59492",
      status: "Available",
      phone: "620-223-0012",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    templateId: "0",
    modified: false,
  },
  R7: {
    uuid: "R7",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "codejustice2384",
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
      videoQuality: "LOW",
      screenSharing: true,
      requireScreenSharingRequest: true,
      fileManagement: true,
      handRaising: true,
      chat: true,
      recording: false,
      emailLinkToAll: false,
      transcription: false,
      remoteTranslation: false,
      streaming: false,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Jason's Room",
      organization: "Tacoma Federal Court - 59492",
      status: "Available",
      phone: "101-321-1212",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    templateId: "0",
    modified: false,
  },
  R8: {
    uuid: "R8",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "BigCheese3434",
      allowPasscode: true,
      video: false,
      audio: false,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: true,
      allowParticipantsToggleAudio: true,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: true,
      videoQuality: "MEDIUM",
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: false,
      handRaising: false,
      chat: false,
      recording: true,
      emailLinkToAll: true,
      transcription: true,
      remoteTranslation: true,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Daves's Room",
      organization: "Pierce County District Court - 59492",
      status: "Available",
      phone: "321-432-4343",
      hostAccessCode: 3123,
      participantAccessCode: 3241,
    },
    templateId: "0",
    modified: false,
  },
  R9: {
    uuid: "R9",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "HonorJustice4553",
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
      name: "Judge Paul's Room",
      organization: "Pierce County District Court - 59492",
      status: "Available",
      phone: "000-000-0000",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    },
    templateId: "0",
    modified: false,
  },
  R10: {
    uuid: "R10",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "MaxHonor3434",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "LOW",
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: false,
      handRaising: false,
      chat: false,
      recording: true,
      emailLinkToAll: true,
      transcription: true,
      remoteTranslation: true,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Lori's Room",
      organization: "Dartmouth County Municipal Court - 59492",
      status: "Available",
      phone: "404-303-6565",
      hostAccessCode: 1202,
      participantAccessCode: 2939,
    },
    templateId: "0",
    modified: false,
  },
  R11: {
    uuid: "R11",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "Justice4All12",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: false,
      waitingRoom: false,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: true,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: true,
      videoQuality: "HIGH",
      screenSharing: true,
      requireScreenSharingRequest: true,
      fileManagement: true,
      handRaising: true,
      chat: true,
      recording: false,
      emailLinkToAll: false,
      transcription: false,
      remoteTranslation: false,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Amanda's Room",
      organization: "LA County Municipal Court - 59492",
      status: "Available",
      phone: "206-420-5301",
      hostAccessCode: 4939,
      participantAccessCode: 2341,
    },
    templateId: "0",
    modified: false,
  },
  R12: {
    uuid: "R12",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "JusticeFr3312",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "HIGH",
      screenSharing: false,
      requireScreenSharingRequest: true,
      fileManagement: true,
      handRaising: true,
      chat: true,
      recording: true,
      emailLinkToAll: true,
      transcription: true,
      remoteTranslation: true,
      streaming: false,
      duplicateParticipantHandling: false,
    },
    roomDetails: {
      name: "Judge Mark's Room",
      organization: "LA County District Court - 59492",
      status: "Available",
      phone: "909-444-1304",
      hostAccessCode: 3674,
      participantAccessCode: 3674,
    },
    templateId: "0",
    modified: false,
  },
  R13: {
    uuid: "R13",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "FreedomFree334",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: false,
      waitingRoom: false,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "LOW",
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: true,
      handRaising: true,
      chat: true,
      recording: false,
      emailLinkToAll: false,
      transcription: true,
      remoteTranslation: true,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Keith's Room",
      organization: "Reno County District Court - 59492",
      status: "Available",
      phone: "202-444-6363",
      hostAccessCode: 7249,
      participantAccessCode: 7249,
    },
    templateId: "0",
    modified: false,
  },
  R14: {
    uuid: "R14",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "HonorYour999",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
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
      name: "Judge Nate's Room",
      organization: "Reno County District Court - 59492",
      status: "Available",
      phone: "435-253-2471",
      hostAccessCode: 5379,
      participantAccessCode: 5379,
    },
    templateId: "0",
    modified: false,
  },
  R15: {
    uuid: "R15",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "JudgeSup3r",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: true,
      videoQuality: "LOW",
      screenSharing: false,
      requireScreenSharingRequest: false,
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
      name: "Judge Bob's Room",
      organization: "LA County District Court - 59492",
      status: "Available",
      phone: "242-105-3575",
      hostAccessCode: 3579,
      participantAccessCode: 3579,
    },
    templateId: "0",
    modified: false,
  },
  R16: {
    uuid: "R16",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "4th3p3opl3",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "LOW",
      screenSharing: false,
      requireScreenSharingRequest: true,
      fileManagement: true,
      handRaising: true,
      chat: true,
      recording: true,
      emailLinkToAll: false,
      transcription: false,
      remoteTranslation: false,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Michelle's Room",
      organization: "Tarkov County Criminal Court - 59492",
      status: "Available",
      phone: "432-101-4432",
      hostAccessCode: 7359,
      participantAccessCode: 7359,
    },
    templateId: "0",
    modified: false,
  },
  R17: {
    uuid: "R17",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "freeentry2345",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "HIGH",
      screenSharing: false,
      requireScreenSharingRequest: false,
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
      name: "Judge Tate's Room",
      organization: "King County District Court - 59492",
      status: "Available",
      phone: "431-202-2212",
      hostAccessCode: 7240,
      participantAccessCode: 7240,
    },
    templateId: "0",
    modified: false,
  },
  R18: {
    uuid: "R18",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "HonorYour999",
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
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: false,
      handRaising: false,
      chat: true,
      recording: true,
      emailLinkToAll: true,
      transcription: true,
      remoteTranslation: true,
      streaming: true,
      duplicateParticipantHandling: true,
    },
    roomDetails: {
      name: "Judge Spock's Room",
      organization: "Federation District Court - 59492",
      status: "Available",
      phone: "432-414-5545",
      hostAccessCode: 7435,
      participantAccessCode: 7435,
    },
    templateId: "0",
    modified: false,
  },
  R19: {
    uuid: "R19",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "Logstamp3424",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "MEDIUM",
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: false,
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
      name: "Judge Jean's Room",
      organization: "Darth County District Court - 59492",
      status: "Available",
      phone: "205-443-2347",
      hostAccessCode: 3759,
      participantAccessCode: 3759,
    },
    templateId: "0",
    modified: false,
  },
  R20: {
    uuid: "R20",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "Timewarp2408",
      allowPasscode: true,
      video: true,
      audio: true,
      allowSelectBeforeEnter: true,
      waitingRoom: true,
      audioOnlyType: "Ready To Meet",
      providerPSTN: "ZIPDX",
      allowParticipantsToggleVideo: false,
      allowParticipantsToggleAudio: false,
      defaultCanvasLayout: "Grid",
      allowParticipantsChangeLayout: false,
      videoQuality: "HIGH",
      screenSharing: false,
      requireScreenSharingRequest: false,
      fileManagement: false,
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
      name: "Judge Joanna's Room",
      organization: "Hoquiam County District Court - 59492",
      status: "Available",
      phone: "234-777-2345",
      hostAccessCode: 4523,
      participantAccessCode: 5356,
    },
    templateId: "0",
    modified: false,
  },
};

const adminRoomModule: Module<any, any> = {
  namespaced: true,
  state: {
    rooms: rooms,
  },
  mutations: {},
  actions: {},
  getters: {
    getById: (state) => (id: string) => {
      return state.rooms[id];
    },
    getRoomNameById: (state) => (id: string) => {
      return state.rooms[id].roomDetails.name;
    },
    getAsList: (state) => Object.values(state.cases),
  },
};

export default adminRoomModule;
