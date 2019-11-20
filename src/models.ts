export interface User {
  id: number;
  avatar: string;
  name: string;
  isActive: boolean;
}

export interface NewUser {
  avatar: string;
  name: string;
  isActive: boolean;
}
