export interface Permission {
  id: string;
  systemName: string;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
}
