import Vue from "vue";
import Vuex from "vuex";
import EntryModule from "./entry/entry-module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    EntryModule,
  },
});
