import { Module } from "vuex";
import { Room } from "@/model/admin/room/room";

const rooms: {
  [key: string]: Room;
} = {
  a: {
    uuid: "a",
    roomSettings: {
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
    },
    roomDetails: {
      organization: "LA County Superior Court - 12345",
      status: "Available",
      phone: "555-555-5555",
      hostAccessCode: 5555,
      participantAccessCode: 5555,
    }
  },
  b: {
    uuid: "b",
    roomSettings: {
      template: "Template Name (Modified)",
      passcode: "YourHonor931",
      allowPasscode: true,
      video: false,
      audio: false,
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
    },
    roomDetails: {
      organization: "LA County Superior Court - 12345",
      status: "Available",
      phone: "000-000-0000",
      hostAccessCode: 5656,
      participantAccessCode: 5656,
    }
  }
}

const adminRoomModule: Module<any, any> = {
  namespaced: true,
  state: {
    rooms: rooms,
    selectedRoomId: "a",
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    selectedRoomSettings: (state) => state.rooms[state.selectedRoomId].roomSettings,
    selectedRoomDetails: (state) => state.rooms[state.selectedRoomId].roomDetails,
    getRoomsList: (state) => state.rooms,
  },
};

export default adminRoomModule;