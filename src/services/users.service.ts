import React from 'react';
import { NewUser, User } from '../models';
import { observable } from 'mobx';

const initialUsers: User[] = [
  {
    id: 1,
    name: 'Bob',
    avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
    isActive: true,
  },
  {
    id: 2,
    name: 'Alice',
    avatar: 'https://p7.hiclipart.com/preview/118/942/565/computer-icons-avatar-child-user-avatar-thumbnail.jpg',
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
    this.users = this.users.filter(user => user.id !== userId)
  }

  updateUser(user: User) {
    const userIndex = this.users.findIndex(it => it.id === user.id);
    const newUsers = [...this.users];
    newUsers.splice(userIndex, 1, user);
    this.users = newUsers;
  }
}

export const UsersContext = React.createContext<UsersService>(new UsersService());
