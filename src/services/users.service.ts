import React from 'react';
import { NewUser, User } from '../models';
import { observable } from 'mobx';

export const DEFAULT_AVATAR = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

export const USER_AVATARS = [
  'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
  'https://p7.hiclipart.com/preview/118/942/565/computer-icons-avatar-child-user-avatar-thumbnail.jpg',
];

const initialUsers: User[] = [
  {
    id: 1,
    name: 'Bob',
    avatar: USER_AVATARS[0],
    isActive: true,
  },
  {
    id: 2,
    name: 'Alice',
    avatar: USER_AVATARS[1],
    isActive: false,
  },
];
let usersCounter = initialUsers.length;

export class UsersService {
  @observable
  users: User[] = initialUsers;

  addUser(user: NewUser) {
    this.users = [
      ...this.users,
      {
        ...user,
        id: ++usersCounter,
      },
    ];
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  updateUser(user: User) {
    const userIndex = this.users.findIndex(it => it.id === user.id);
    const newUsers = [...this.users];
    newUsers.splice(userIndex, 1, user);
    this.users = newUsers;
  }
}

export const UsersContext = React.createContext<UsersService>(new UsersService());
