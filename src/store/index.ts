import Vue from "vue";
import Vuex from "vuex";
import EntryModule from "./entry/entry-module";
import BackgroundBlurModule from "./background-blur/background-blur-module";
import SidebarModule from "./sidebar/sidebar-module";
import ChatModule from "./chat/chat-module";
import ParticipantsModule from "./participants/participants-module";
import RoomModule from "./admin/room-module";
import RoomTemplateModule from "./admin/room-template-module";
import FileShareModule from "./file-share/file-share";
import CasesModule from "./cases/cases-module";
import SubconferenceModule from "./sub-conference/sub-conference-module";
import OrganizationsModule from "./organizations/organizations-module";
import PermissionsModule from "./permission/permissions-module";
import SupportModule from "./support/support-module";
import SystemUsersModule from "./system-users/system-users-module";
import SystemUserRolesModule from "./system-users/system-user-roles-module";
import RoomSessionModule from "./room-session/room-session-module";
import SearchModule from "./admin/dashboard/search-module";
import ConferenceSetupModule from "./conference/conference-setup-module";
import ConferenceModule from "./conference/conference-module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    EntryModule,
    BackgroundBlurModule,
    SidebarModule,
    ChatModule,
    ParticipantsModule,
    RoomModule,
    RoomTemplateModule,
    FileShareModule,
    CasesModule,
    SubconferenceModule,
    OrganizationsModule,
    PermissionsModule,
    SupportModule,
    SystemUsersModule,
    SystemUserRolesModule,
    RoomSessionModule,
    SearchModule,
    ConferenceSetupModule,
    ConferenceModule,
  },
});
