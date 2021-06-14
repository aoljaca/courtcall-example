import dashboard from "./admin/dashboard";
import systemUser from "./admin/system-user";
import roomSettings from "./admin/room/room-settings";
import roomDetails from "./admin/room/room-details";
import roomTemplate from "./admin/room/room-template";
import roomNav from "./admin/room/room-nav"
import roomCases from "./admin/room/room-cases";
import roomParticipants from "./admin/room/room-participants";
import organizations from "./admin/organizations";
import support from "./admin/support";
import organizationList from "./admin/organizations/organization-list";
import newOrganization from "./admin/organizations/new-organization";
import organization from "./admin/organizations/organization";
import navigation from "./admin/navigation";

  export default {
    dashboard,
    roomSettings,
    roomDetails,
    roomNav,
    roomCases,
    roomParticipants,
    roomTemplate,
    systemUser,
    support,
    organizations: {
      organizationList: organizationList,
      newOrganization: newOrganization,
      organization: organization
    },
    navigation: navigation
};
