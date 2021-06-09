import { Case } from "@/model/meeting/meeting-ui/case";
import { Module } from "vuex";
import { DateTime } from "luxon";
const CASES: { [key: string]: Case } = {
  "1c": {
    name: "Ada County (1c)",
    number: "1",
    startTime: DateTime.now().minus({ hours: 12 }).toISODate(),
    participants: ["1", "2", "3"],
    id: "1c",
    live: false,
    roomId: "R1",
  },
  "2c": {
    name: "Ada County (2c)",
    number: "2",
    startTime: DateTime.now().minus({ hours: 6 }).toISODate(),
    id: "2c",
    participants: ["4", "5", "6"],
    live: true,
    roomId: "R1",
  },
  "3c": {
    name: "Ada County (3c)",
    number: "3",
    startTime: DateTime.now().minus({ hours: 30 }).toISODate(),
    id: "3c",
    participants: ["7", "8", "9"],
    live: false,
    roomId: "R1",
  },
  "4c": {
    name: "Story County (4c)",
    number: "4",
    startTime: DateTime.now().minus({ minutes: 90 }).toISODate(),
    id: "4c",
    participants: ["2", "4", "6", "8"],
    live: false,
    roomId: "R1",
  },
  "5c": {
    name: "Story County (5c)",
    number: "5",
    startTime: DateTime.now().minus({ minutes: 45 }).toISODate(),
    id: "5c",
    participants: ["1", "3", "5", "7", "9"],
    live: false,
    roomId: "R2",
  },
  "6c": {
    name: "Story County (6c)",
    number: "6",
    startTime: DateTime.now().minus({ minutes: 20 }).toISODate(),
    id: "6c",
    participants: ["1", "2", "3"],
    live: false,
    roomId: "R2",
  },
  "7c": {
    name: "Fairfield County (7c)",
    number: "7",
    id: "7c",
    startTime: DateTime.now().minus({ minutes: 10 }).toISODate(),
    participants: ["3", "2", "5"],
    live: false,
    roomId: "R2",
  },
  "8c": {
    name: "Fairfield County (8c)",
    number: "8",
    id: "8c",
    startTime: DateTime.now().toISODate(),
    participants: ["5", "1", "7"],
    live: false,
    roomId: "R2",
  },
};

const casesModule: Module<any, any> = {
  namespaced: true,
  state: {
    cases: CASES,
  },
  mutations: {},
  actions: {},
  getters: {
    getById: (state) => (id: string) => state.cases[id],
    getAsList: (state) => Object.values(state.cases),
    getCaseNamesAsList: (state) => {
      const caseNames = Object.values(state.cases) as Case[];
      return caseNames.map((c) => c.name);
    },
  },
};

export default casesModule;
