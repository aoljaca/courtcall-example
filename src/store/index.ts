import Vue from "vue";
import Vuex from "vuex";
import EntryModule from './entry/entry-module';
import BackgroundBlurModule from './background-blur/background-blur-module';
import SidebarModule from './sidebar/sidebar-module';
import ChatModule from './chat/chat-module';
import ParticipantsModule from './participants/participants-module';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    EntryModule,
    BackgroundBlurModule,
    SidebarModule,
    ChatModule,
    ParticipantsModule
    
  },
});
