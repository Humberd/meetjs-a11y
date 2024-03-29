import React from 'react';
import { NewUser, User } from '../models';
import { observable } from 'mobx';

export const DEFAULT_AVATAR = './assets/images/default-user.png';

export const USER_AVATARS = [
  'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
  './assets/images/girl-icon.png',
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

  private allUsers: User[] = initialUsers;

  @observable
  searchQuery = '';

  addUser(user: NewUser) {
    this.allUsers = [
      ...this.users,
      {
        ...user,
        id: ++usersCounter,
      },
    ];

    this.filterUsers(this.searchQuery);
  }

  deleteUser(userId: number) {
    this.allUsers = this.allUsers.filter(user => user.id !== userId);
    this.filterUsers(this.searchQuery);
  }

  updateUser(user: User) {
    const userIndex = this.allUsers.findIndex(it => it.id === user.id);
    const newUsers = [...this.allUsers];
    newUsers.splice(userIndex, 1, user);
    this.allUsers = newUsers;
    this.filterUsers(this.searchQuery);
  }

  filterUsers(searchQuery: string) {
    this.searchQuery = searchQuery;
    this.users = this.allUsers.filter(it => it.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
}

export const UsersContext = React.createContext<UsersService>(new UsersService());
