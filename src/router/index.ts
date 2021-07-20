import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import RoomEntry from "../components/conference/entry/RoomEntry.vue";
import Login from "../components/login/Login.vue";
import WaitingRoom from "../components/conference/waiting-room/WaitingRoom.vue";
import EndMeeting from "../components/conference/end-meeting/EndMeeting.vue";
import Setup from "../components/conference/setup/Setup.vue";
import Call from "../components/conference/meeting/Call.vue";
import Dashboard from "../components/admin/dashboard/Dashboard.vue";
import Admin from "@/components/admin/Admin.vue";
import RoomViewManage from "../components/admin/room/view/RoomViewManage.vue";
import RoomAddEdit from "../components/admin/room/edit/RoomAddEdit.vue";
import Organizations from "@/components/admin/organizations/Organizations.vue";
import OrganizationComp from "../components/admin/organizations/Organization.vue";
import CreateEditOrganization from "../components/admin/organizations/CreateEditOrganization.vue";
import SystemUsersList from "@/components/admin/system-users/SystemUsers.vue";
import ViewSystemUser from "@/components/admin/system-users/ViewSystemUser.vue";
import CreateSystemUser from "@/components/admin/system-users/CreateSystemUser.vue";
import SupportQueue from "@/components/admin/support/SupportQueue.vue";
import SupportArchive from "@/components/admin/support/SupportArchive.vue";
import ViewParticipant from "@/components/admin/participants/view/ViewParticipant.vue";
import CreateParticipant from "@/components/admin/participants/create/CreateParticipant.vue";
import CaseView from "@/components/admin/case/view/CaseView.vue";
import CaseEdit from "@/components/admin/case/edit/CaseEdit.vue";
import MyAccount from "@/components/admin/my-account/MyAccount.vue";
import NotFound from "@/components/shared/NotFound.vue";
import RoomActivity from "@/components/admin/room/activity/RoomActivity.vue";
import SearchResults from "@/components/admin/dashboard/search/SearchResults.vue";
import Conference from "@/components/conference/Conference.vue";
import i18n from "@/plugins/i18n";
import store from "../store/index";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: () => "/not-found",
  },
  {
    path: "/",
    redirect: () => "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/conference",
    component: Conference,
    children: [
      {
        path: ":conferenceId",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            component: Call,
            name: "Conference Call",
          },
          {
            path: "entry",
            name: "Room Entry",
            component: RoomEntry,
          },
          {
            path: "setup",
            name: "Conference Setup",
            component: Setup,
          },
          {
            path: "waiting-room",
            name: "Waiting Room",
            component: WaitingRoom,
          },
          {
            path: "leave",
            name: "Leave Call",
            component: EndMeeting,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    redirect: () => "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            component: Dashboard,
            name: "Dashboard",
            meta: {
              breadcrumb: i18n.t("admin.navigation.dashboard"),
            },
          },
          {
            path: "search",
            name: "Search Results",
            component: SearchResults,
            meta: {
              hideBreadcrumb: true,
            },
          },
        ],
      },
      {
        path: "my-account",
        name: "My Account",
        component: MyAccount,
        meta: {
          breadcrumb: i18n.t("admin.navigation.myAccount"),
        },
      },

      {
        path: "rooms/:roomId?",
        name: "Rooms",
        meta: {
          breadcrumbFunc: (route: any) =>
            `${store.getters["RoomModule/getRoomNameById"](
              route.params.roomId
            )}`,
          hideBreadcrumbFunc: (route: any) => !route.params.roomId
        },
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: "View Room",
            component: RoomViewManage,
            meta: {
              hideBreadcrumb: true,
            },
          },
          {
            path: "edit",
            name: "Edit Room",
            component: RoomAddEdit,
            meta: {
              breadcrumb: i18n.t("admin.roomDetails.editingRoom"),
            },
          },
          {
            path: "create",
            name: "Create Room",
            component: RoomAddEdit,
            meta: {
              breadcrumb: i18n.t("admin.roomDetails.create"),
            },
          },
          {
            path: "activity",
            name: "Room Activity",
            component: RoomActivity,
            meta: {
              breadcrumb: i18n.t("admin.roomNav.activity"),
            },
          },
          {
            path: "cases",
            name: "Case",
            meta: {
              hideBreadcrumb: true,
            },
            component: {
              render(c) {
                return c("router-view");
              },
            },
            children: [
              {
                path: ":caseId/view",
                component: CaseView,
                name: "View Case",
                meta: {
                  breadcrumbFunc: (route: any) =>
                    `${store.getters["CasesModule/getById"](route.params.caseId)
                      ?.name
                    }`,
                },
              },
              {
                path: ":caseId/edit",
                component: CaseEdit,
                name: "Edit Case",
                meta: {
                  breadcrumbFunc: (route: any) =>
                    `${store.getters["CasesModule/getById"](route.params.caseId)
                      ?.name
                    }`,
                },
              },
              {
                path: "create",
                component: CaseEdit,
                name: "Create Case",
                meta: {
                  breadcrumb: "New Case",
                },
              },
            ],
          },
          {
            path: "participants/:participantId?",
            name: "Participants",
            component: {
              render(c) {
                return c("router-view");
              },
            },
            meta: {
              hideBreadcrumb: true,
            },
            children: [
              {
                path: "",
                component: ViewParticipant,
                name: "Participant",
                meta: {
                  breadcrumbFunc: (route: any) =>
                    `${store.getters["ParticipantsModule/getById"](
                      route.params.participantId
                    )?.name
                    }`,
                },
              },
              {
                path: "create",
                component: CreateParticipant,
                name: "Create Participant",
                props: true,
                meta: {
                  breadcrumb: i18n.t("admin.participants.create"),
                },
              },
            ],
          },
        ],
      },
      {
        path: "system-users",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          breadcrumb: i18n.t("admin.navigation.systemUsers"),
        },
        children: [
          {
            path: "/",
            component: SystemUsersList,
            name: "System Users",
            meta: {
              breadcrumb: i18n.t("admin.systemUsers.list.all"),
            },
          },
          {
            path: "view/:systemUserId",
            component: ViewSystemUser,
            name: "System User",
            props: true,
            meta: {
              breadcrumbFunc: (route: any) =>
                `${store.getters["SystemUsersModule/getById"](
                  route.params.systemUserId
                ).name
                }`,
            },
          },
          {
            path: "create",
            component: CreateSystemUser,
            name: "Create System User",
            props: true,
            meta: {
              breadcrumb: i18n.t("admin.systemUsers.list.create"),
            },
          },
        ],
      },
      {
        path: "organizations",
        meta: {
          breadcrumb: i18n.t("admin.navigation.organizations"),
        },
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "/",
            component: Organizations,
            name: "Organizations",
            meta: {
              breadcrumb: i18n.t("admin.organizations.organization.all"),
            },
          },
          {
            path: "view/:organizationId",
            component: OrganizationComp,
            name: "Organization",
            meta: {
              breadcrumbFunc: (route: any) =>
                `${store.getters["OrganizationsModule/getById"](
                  route.params.organizationId
                ).name
                }`,
            },
          },
          {
            path: "edit/:organizationId",
            component: CreateEditOrganization,
            name: "Edit Organization",
            meta: {
              breadcrumbFunc: (route: any) =>
                `${store.getters["OrganizationsModule/getById"](
                  route.params.organizationId
                ).name
                }`,
            },
          },
          {
            path: "create",
            component: CreateEditOrganization,
            name: "Create Organization",
            meta: {
              breadcrumb: i18n.t(
                "admin.organizations.organization.newOrganization"
              ),
            },
          },
        ],
      },
      {
        path: "support",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        meta: {
          breadcrumb: i18n.t("admin.navigation.support"),
        },
        children: [
          {
            path: "",
            name: "Support",
            redirect: () => "active",
            component: SupportQueue,
          },
          {
            path: "active",
            component: SupportQueue,
            name: "Support Queue",
            meta: {
              breadcrumb: i18n.t("admin.support.active.activeSupport"),
            },
          },
          {
            path: "archived",
            component: SupportArchive,
            name: "Support Archive",
            meta: {
              breadcrumb: i18n.t("admin.support.archive.archivedSupport"),
            },
          },
        ],
      },
    ],
  },
  {
    path: "/not-found",
    name: "Not Found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const breadcrumbFunc = to.meta?.breadcrumbFunc;

  if (breadcrumbFunc && typeof breadcrumbFunc === "function" && to?.meta) {
    to.meta.breadcrumb = breadcrumbFunc(to);
  }

  next();
});

export default router;
