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
import OrganizationComp from "../components/admin/organizations/Organization.vue";
import SystemUsersList from "@/components/admin/system-users/SystemUsers.vue";
import SupportQueue from "@/components/admin/support/SupportQueue.vue";
import SupportArchive from "@/components/admin/support/SupportArchive.vue";
import CaseView from "@/components/admin/case/view/CaseView.vue";
import i18n from "@/plugins/i18n";
import store from "../store/index";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login/:code",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Login,
  },
  {
    path: "/login",
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
        meta: { 
          breadcrumb: i18n.t("admin.navigation.dashboard")
        }
      },
      {
        path: "my-account",
        component: MyAccount,
        name: "My Account",
        meta: { 
          breadcrumb: i18n.t("admin.navigation.myAccount")
        }
      },
      {
        path: "system-users",
        component: SystemUsersList,
        name: "System Users",
        meta: { 
          breadcrumb: i18n.t("admin.navigation.systemUsers")
        }
      },
      {
        path: "organizations",
        meta: { 
          breadcrumb: i18n.t("admin.navigation.organizations")
        },
        component: {
          render(c) {
             return c("router-view");
          }
        },
        children: [
          {
            path: "/",
            component: Organizations,
            name: "Organizations",
            meta: { 
              breadcrumb: i18n.t("admin.organizations.organization.all")
            },
          },
          {
            path: "view/:organizationId",
            component: OrganizationComp,
            name: "Organization",
            meta: { 
              breadcrumbFunc: (route: any) => `${store.getters["OrganizationsModule/getById"](route.params.organizationId).name}`
            },
          },
        ]
      },
      {
        path: "support",
        component: {
          render(c) {
             return c("router-view");
          }
        },
        meta: { 
          breadcrumb: i18n.t("admin.navigation.support")
        },
        children: [
          {
            path: "",
            name: "Support",
            redirect: to => "active",
            component: SupportQueue,
          },
          {
            path: "active",
            component: SupportQueue,
            name: "Support Queue",
            meta: { 
              breadcrumb: i18n.t("admin.support.active.activeSupport")
            },
          },
          {
            path: "archived",
            component: SupportArchive,
            name: "Support Archive",
            meta: { 
              breadcrumb: i18n.t("admin.support.archive.archivedSupport")
            },
          },
        ]
      },
      {
        path: "case",
        meta: { 
          breadcrumb: "Judge Frank's Room"
        },
        component: {
          render(c) {
             return c("router-view");
          }
        },
        children: [
          {
            path: "view/:caseId",
            component: CaseView,
            name: "Organization",
            meta: { 
              breadcrumbFunc: (route: any) => `${store.getters["CasesModule/getById"](route.params.caseId).name}`
            },
          },
        ]
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const breadcrumbFunc = to.meta.breadcrumbFunc;

  if (breadcrumbFunc && typeof breadcrumbFunc === 'function') {
    to.meta.breadcrumb = breadcrumbFunc(to);
  }

  next();
});

export default router;
