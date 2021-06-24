import { SystemUserRole } from "./system-user-role";

export interface SystemUser {
  id: string;
  name: string;
  role: SystemUserRole;
  organizationIds: string[];
  email: string;
  phone: string;
  pstnPIN: number;
  roomPermissions: {
    allRooms: boolean;
    roomIds: string[];
    organizationIds: string[];
  };
  active?: boolean;
  archived?: boolean;
}
