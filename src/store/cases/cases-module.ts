import { Case } from "@/model/meeting/meeting-ui/case";
import { Module } from "vuex";
import { DateTime } from "luxon";
const CASES: { [key: string]: Case } = {
  1: {
    name: "Ca",
    number: "1",
    startTime: DateTime.now().minus({ hours: 12 }).toISODate(),
    participants: ["1", "2", "3"],
    id: "1",
  },
  2: {
    name: "Cb",
    number: "2",
    startTime: DateTime.now().minus({ hours: 6 }).toISODate(),
    id: "2",
    participants: ["4", "5", "6"],
  },
  3: {
    name: "Cc",
    number: "3",
    startTime: DateTime.now().minus({ hours: 30 }).toISODate(),
    id: "3",
    participants: ["7", "8", "9"],
  },
  4: {
    name: "Cd",
    number: "4",
    startTime: DateTime.now().minus({ minutes: 90 }).toISODate(),
    id: "4",
    participants: ["2", "4", "6", "8"],
  },
  5: {
    name: "Ce",
    number: "5",
    startTime: DateTime.now().minus({ minutes: 45 }).toISODate(),
    id: "5",
    participants: ["1", "3", "5", "7", "9"],
  },
  6: {
    name: "Cf",
    number: "6",
    startTime: DateTime.now().minus({ minutes: 20 }).toISODate(),
    id: "6",
    participants: ["1", "2", "3"],
  },
  7: {
    name: "Cg",
    number: "7",
    id: "7",
    startTime: DateTime.now().minus({ minutes: 10 }).toISODate(),
    participants: ["3", "2", "5"],
  },
  8: {
    name: "Ch",
    number: "8",
    id: "8",
    startTime: DateTime.now().toISODate(),
    participants: ["5", "1", "7"],
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
  },
};
