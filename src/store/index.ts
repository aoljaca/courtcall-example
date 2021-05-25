import Vue from "vue";
import Vuex from "vuex";
import EntryModule from "./entry/entry-module";
import BackgroundBlurModule from "./background-blur/background-blur-module";
import SidebarModule from "./sidebar/sidebar-module";
import ChatModule from "./chat/chat-module";
import ParticipantsModule from "./participants/participants-module";
<<<<<<< HEAD
import adminRoomModule from "./admin/admin-room-module";
=======
import FileShareModule from "./file-share/file-share";
import CasesModule from "./cases/cases-module";
import SubconferenceModule from "./sub-conference/sub-conference-module";
>>>>>>> 67f8a7bb60abc8a9caa2dea2d4f6ea2f3c43f92d
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    EntryModule,
    BackgroundBlurModule,
    SidebarModule,
    ChatModule,
    ParticipantsModule,
<<<<<<< HEAD
    adminRoomModule,
=======
    FileShareModule,
    CasesModule,
    SubconferenceModule,
>>>>>>> 67f8a7bb60abc8a9caa2dea2d4f6ea2f3c43f92d
  },
});
