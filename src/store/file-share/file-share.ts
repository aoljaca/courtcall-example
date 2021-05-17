import {
  CollaborationShare,
  FileShare,
  Share,
  SignatureShare,
} from "@/model/meeting/meeting-ui/side-bar/files/file-share";
import { Module } from "vuex";
const FILE_SHARES: { [key: string]: FileShare } = {
  sf1: {
    type: "file",
    ownerId: "1",
    id: "sf1",
    participants: ["1", "2", "3", "4", "5", "6", "7"],
    fileName: "fileShare1.pdf",
    opened: true,
  },
  sf2: {
    type: "file",
    ownerId: "2",
    id: "sf2",
    participants: ["1", "2", "3"],
    fileName: "fileShare2.jpg",
    opened: true,
  },
  sf3: {
    type: "file",
    opened: false,
    id: "sf3",
    participants: ["1", "5", "3"],
    ownerId: "3",
    fileName: "fileShare3.doc",
  },
};

const COLLABORATION_SHARES: { [key: string]: CollaborationShare } = {
  sc1: {
    type: "collaboration",
    jwt: "",
    ownerId: "1",
    id: "sc1",
    participants: ["1", "2", "3"],
    fileName: "collaboration1.pdf",
    opened: true,
  },
  sc2: {
    type: "collaboration",
    jwt: "",
    ownerId: "2",
    id: "sc2",
    participants: ["1", "2", "4"],
    fileName: "collaboration2.pdf",
    opened: true,
  },
  sc3: {
    type: "collaboration",
    jwt: "",
    ownerId: "3",
    participants: ["1", "3", "5"],
    fileName: "collaboration3.pdf",
    opened: false,
    id: "sc3",
  },
};

const SIGNATURE_SHARES: { [key: string]: SignatureShare } = {
  ss1: {
    type: "signature",
    signatureType: "docusign",
    ownerId: "1",
    participants: ["1", "2", "4"],
    fileName: "signature1.pdf",
    opened: true,
    signed: ["1", "2"],
    id: "ss1",
  },
  ss2: {
    id: "ss1",
    type: "signature",
    signatureType: "adobesign",
    ownerId: "2",
    participants: ["1", "2", "6", "7"],
    fileName: "signature2.pdf",
    signed: [],
    opened: false,
  },
  ss3: {
    id: "ss3",
    type: "signature",
    signatureType: "adobesign",
    ownerId: "3",
    participants: ["1", "3", "9"],
    fileName: "signature3.pdf",
    signed: [],
    opened: true,
  },
};

const SHARES: { [key: string]: Share } = {
  ...FILE_SHARES,
  ...COLLABORATION_SHARES,
  ...SIGNATURE_SHARES,
};

const fileShareModule: Module<any, any> = {
  namespaced: true,
  state: {
    shares: SHARES,
  },
  mutations: {
    markAsOpened(state, payload: string) {
      state.shares[payload] = true;
    },
  },
  actions: {
    markOpened({ commit }, payload) {
      commit("markAsOpened", payload.id);
    },
  },
  getters: {
    getById: (state) => (id: string) => state.shares[id],
    getAsList: (state) => Object.values(state.shares),
    getSharesBelongingToOwner: (state) => (id: string) =>
      Object.values(state.shares).filter((s: any) => s.ownerId === id),
    getUnopened: (state) => (id: string) =>
      Object.values(state.shares).filter(
        (s: any) => s.opened === false && s.ownerId !== id
      ),
    getOpenedSharesNotBelongingToOwner: (state) => (id: string) =>
      Object.values(state.shares).filter(
        (s: any) => s.opened === true && s.ownerId !== id
      ),
  },
};

export default fileShareModule;
