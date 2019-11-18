export interface User {
  id: number;
  avatar: string;
  name: string;
  status: UserStatus
}

export interface NewUser {
  avatar: string;
  name: string;
  status: UserStatus
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}
