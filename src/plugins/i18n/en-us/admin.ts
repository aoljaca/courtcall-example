import dashboard from "./admin/dashboard";
import systemUser from "./admin/system-user";
import organizationList from "./admin/organizations/organization-list";
import support from "./admin/support";
import newOrganization from "./admin/organizations/new-organization";
import organization from "./admin/organizations/organization";
import navigation from "./admin/navigation";
export default {
  dashboard,
  systemUser,
  organizations: {
    organizationList: organizationList,
    newOrganization: newOrganization,
    organization: organization
  },
  support,
  navigation: navigation
};
