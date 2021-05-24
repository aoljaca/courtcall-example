import { Case } from "@/model/meeting/meeting-ui/case";
import { Module } from "vuex";
import { DateTime } from "luxon";
const CASES: { [key: string]: Case } = {
  "1c": {
    name: "Ca",
    number: "1",
    startTime: DateTime.now().minus({ hours: 12 }).toISODate(),
    participants: ["1", "2", "3"],
    id: "1c",
  },
  "2c": {
    name: "Cb",
    number: "2",
    startTime: DateTime.now().minus({ hours: 6 }).toISODate(),
    id: "2c",
    participants: ["4", "5", "6"],
  },
  "3c": {
    name: "Cc",
    number: "3",
    startTime: DateTime.now().minus({ hours: 30 }).toISODate(),
    id: "3c",
    participants: ["7", "8", "9"],
  },
  "4c": {
    name: "Cd",
    number: "4",
    startTime: DateTime.now().minus({ minutes: 90 }).toISODate(),
    id: "4c",
    participants: ["2", "4", "6", "8"],
  },
  "5c": {
    name: "Ce",
    number: "5",
    startTime: DateTime.now().minus({ minutes: 45 }).toISODate(),
    id: "5c",
    participants: ["1", "3", "5", "7", "9"],
  },
  "6c": {
    name: "Cf",
    number: "6",
    startTime: DateTime.now().minus({ minutes: 20 }).toISODate(),
    id: "6c",
    participants: ["1", "2", "3"],
  },
  "7c": {
    name: "Cg",
    number: "7",
    id: "7c",
    startTime: DateTime.now().minus({ minutes: 10 }).toISODate(),
    participants: ["3", "2", "5"],
  },
  "8c": {
    name: "Ch",
    number: "8",
    id: "8c",
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

export default casesModule;
