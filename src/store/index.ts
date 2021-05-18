import Vue from "vue";
import Vuex from "vuex";
import EntryModule from "./entry/entry-module";
import BackgroundBlurModule from "./background-blur/background-blur-module";
import SidebarModule from "./sidebar/sidebar-module";
import ChatModule from "./chat/chat-module";
import ParticipantsModule from "./participants/participants-module";
import FileShareModule from "./file-share/file-share";
import CasesModule from "./cases/cases-module";
import SubconferenceModule from "./sub-conference/sub-conference-module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    EntryModule,
    BackgroundBlurModule,
    SidebarModule,
    ChatModule,
    ParticipantsModule,
    FileShareModule,
    CasesModule,
    SubconferenceModule,
  },
});
