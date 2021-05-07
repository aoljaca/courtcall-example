import Vue from "vue";
import Vuex from "vuex";
import EntryModule from './entry/entry-module';
import BackgroundBlurModule from './background-blur/background-blur-module';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    EntryModule,
    BackgroundBlurModule
  },
});
