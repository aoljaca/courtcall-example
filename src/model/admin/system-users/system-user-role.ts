import { UserPermission } from "./user-permission";

export enum SystemUserRoleName {
    ADMIN = "Admin",
    MODERATOR = "Moderator",
    MANAGER = "Manager",
    SUPPORT = "Support"
}

export interface SystemUserRole {
  id: string;
  name: SystemUserRoleName;
  permissions?: UserPermission[];
}
