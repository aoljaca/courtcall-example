import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import RoomEntry from "../components/meeting/entry/RoomEntry.vue";
import Login from "../components/login/Login.vue";
import WaitingRoom from "../components/meeting/waiting-room/WaitingRoom.vue";
import EndMeeting from "../components/meeting/end-meeting/EndMeeting.vue";
import AvOptions from "../components/meeting/av-options/AvOptions.vue";
import MeetingUI from "../components/meeting/meeting-ui/MeetingUI.vue";
import Dashboard from "../components/admin/dashboard/Dashboard.vue";
import Admin from "@/components/admin/Admin.vue";
import MyAccount from "../components/admin/my-account/MyAccount.vue";
import Organizations from "@/components/admin/organizations/Organizations.vue";
import SystemUsersList from "@/components/admin/system-users/SystemUsers.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login/:code",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/login/",
    name: "Login",
    component: Login,
  },
  {
    path: "/waiting-room",
    name: "Waiting Room",
    component: WaitingRoom,
  },
  {
    path: "/entry",
    name: "Room Entry",
    component: RoomEntry,
  },
  {
    path: "/logout",
    name: "Logout",
    component: EndMeeting,
  },
  {
    path: "/av-options",
    name: "A/V Options",
    component: AvOptions,
  },
  {
    path: "/meeting-ui",
    name: "Meeting UI",
    component: MeetingUI,
  },
  {
    path: "/logout",
    name: "Logout",
    component: EndMeeting,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
        name: "Dashboard",
      },
      {
        path: "my-account",
        component: MyAccount,
        name: "My Account",
      },
      {
        path: "system-users",
        component: SystemUsersList,
        name: "System Users View",
      },
      {
        path: "organizations",
        component: Organizations,
        name: "Organizations List",
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
