import { UserPermission } from "./user-permission";

/**
 * We shouldn't just key off Ids,
 * and we shouldn't key off of text names
 */
export enum SystemUserRoleType {
  ADMIN = "admin",
  MODERATOR = "moderator",
  MANAGER = "manager",
  SUPPORT = "support",
}
export enum SystemUserRoleName {
  ADMIN = "Admin",
  MODERATOR = "Moderator",
  MANAGER = "Manager",
  SUPPORT = "Support",
}

export interface SystemUserRole {
  id: string;
  name: SystemUserRoleName;
  permissions?: UserPermission[];
  type: SystemUserRoleType;
}
