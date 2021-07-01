import { Module } from "vuex";
import { Room } from "@/model/admin/room/room";
import { DateTime } from "luxon";

const dates = [];

for (let i = 0; i < 20; i++) {
  dates.push(DateTime.now().minus({ days: i }).toISODate());
}

const rooms: {
  [key: string]: Room;
} = {
  R1: {
    uuid: "R1",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Frank's Room",
      organization: "LA County Superior Court - 12345",
      status: "Available",
      phone: "555-555-5555",
      hostAccessCode: 5555,
      participantAccessCode: 5555,
      lastUsed: dates[0],
    },
    templateId: "0",
    modified: false,
  },
  R2: {
    uuid: "R2",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Paul's Room",
      organization: "Pierce County District Court - 59492",
      status: "Available",
      phone: "000-000-0000",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[1],
    },
    templateId: "0",
    modified: false,
  },
  R3: {
    uuid: "R3",
    active: false,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Mikes's Room",
      organization: "Pierce County Superior Court - 59492",
      status: "Available",
      phone: "253-800-2200",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[2],
    },
    templateId: "0",
    modified: false,
  },
  R4: {
    uuid: "R4",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Paul's Room",
      organization: "King County Municipal Court - 59492",
      status: "Available",
      phone: "210-444-0550",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[3],
    },
    templateId: "0",
    modified: false,
  },
  R5: {
    uuid: "R5",
    active: false,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Matt's Room",
      organization: "King County District Court - 59492",
      status: "Available",
      phone: "502-122-4432",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[4],
    },
    templateId: "0",
    modified: false,
  },
  R6: {
    uuid: "R6",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Mikes's Room",
      organization: "Puyallup District Court - 59492",
      status: "Available",
      phone: "620-223-0012",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[5],
    },
    templateId: "0",
    modified: false,
  },
  R7: {
    uuid: "R7",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Jason's Room",
      organization: "Tacoma Federal Court - 59492",
      status: "Available",
      phone: "101-321-1212",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[6],
    },
    templateId: "0",
    modified: false,
  },
  R8: {
    uuid: "R8",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Daves's Room",
      organization: "Pierce County District Court - 59492",
      status: "Available",
      phone: "321-432-4343",
      hostAccessCode: 3123,
      participantAccessCode: 3241,
      lastUsed: dates[7],
    },
    templateId: "0",
    modified: false,
  },
  R9: {
    uuid: "R9",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Paul's Room",
      organization: "Pierce County District Court - 59492",
      status: "Available",
      phone: "000-000-0000",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
      lastUsed: dates[8],
    },
    templateId: "0",
    modified: false,
  },
  R10: {
    uuid: "R10",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Lori's Room",
      organization: "Dartmouth County Municipal Court - 59492",
      status: "Available",
      phone: "404-303-6565",
      hostAccessCode: 1202,
      participantAccessCode: 2939,
      lastUsed: dates[9],
    },
    templateId: "0",
    modified: false,
  },
  R11: {
    uuid: "R11",
    active: false,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Amanda's Room",
      organization: "LA County Municipal Court - 59492",
      status: "Available",
      phone: "206-420-5301",
      hostAccessCode: 4939,
      participantAccessCode: 2341,
      lastUsed: dates[10],
    },
    templateId: "0",
    modified: false,
  },
  R12: {
    uuid: "R12",
    active: false,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Mark's Room",
      organization: "LA County District Court - 59492",
      status: "Available",
      phone: "909-444-1304",
      hostAccessCode: 3674,
      participantAccessCode: 3674,
      lastUsed: dates[11],
    },
    templateId: "0",
    modified: false,
  },
  R13: {
    uuid: "R13",
    active: false,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Keith's Room",
      organization: "Reno County District Court - 59492",
      status: "Available",
      phone: "202-444-6363",
      hostAccessCode: 7249,
      participantAccessCode: 7249,
      lastUsed: dates[12],
    },
    templateId: "0",
    modified: false,
  },
  R14: {
    uuid: "R14",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Nate's Room",
      organization: "Reno County District Court - 59492",
      status: "Available",
      phone: "435-253-2471",
      hostAccessCode: 5379,
      participantAccessCode: 5379,
      lastUsed: dates[13],
    },
    templateId: "0",
    modified: false,
  },
  R15: {
    uuid: "R15",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Bob's Room",
      organization: "LA County District Court - 59492",
      status: "Available",
      phone: "242-105-3575",
      hostAccessCode: 3579,
      participantAccessCode: 3579,
      lastUsed: dates[14],
    },
    templateId: "0",
    modified: false,
  },
  R16: {
    uuid: "R16",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Michelle's Room",
      organization: "Tarkov County Criminal Court - 59492",
      status: "Available",
      phone: "432-101-4432",
      hostAccessCode: 7359,
      participantAccessCode: 7359,
      lastUsed: dates[15],
    },
    templateId: "0",
    modified: false,
  },
  R17: {
    uuid: "R17",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Tate's Room",
      organization: "King County District Court - 59492",
      status: "Available",
      phone: "431-202-2212",
      hostAccessCode: 7240,
      participantAccessCode: 7240,
      lastUsed: dates[16],
    },
    templateId: "0",
    modified: false,
  },
  R18: {
    uuid: "R18",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Spock's Room",
      organization: "Federation District Court - 59492",
      status: "Available",
      phone: "432-414-5545",
      hostAccessCode: 7435,
      participantAccessCode: 7435,
      lastUsed: dates[17],
    },
    templateId: "0",
    modified: false,
  },
  R19: {
    uuid: "R19",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Jean's Room",
      organization: "Darth County District Court - 59492",
      status: "Available",
      phone: "205-443-2347",
      hostAccessCode: 3759,
      participantAccessCode: 3759,
      lastUsed: dates[18],
    },
    templateId: "0",
    modified: false,
  },
  R20: {
    uuid: "R20",
    active: true,
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
      details:
        "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.Sed do eiusmod tempor.",
      name: "Judge Joanna's Room",
      organization: "Hoquiam County District Court - 59492",
      status: "Available",
      phone: "234-777-2345",
      hostAccessCode: 4523,
      participantAccessCode: 5356,
      lastUsed: dates[19],
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
    getAsList: (state) => Object.values(state.rooms),
  },
};

export default adminRoomModule;
