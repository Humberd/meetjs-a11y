import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import './header.scss';
import { UsersContext } from '../services/users.service';
import { UserStatus } from '../models';

export const AppHeader: React.FC = () => {
  const usersService = useContext(UsersContext);

  const openModal = () => {
    usersService.addUser({
      name: 'foobar',
      avatar: '',
      status: UserStatus.ACTIVE
    })
  };

  return (
      <header className="AppHeader">
        <h2>Users</h2>

        <button
            className="app-button new"
            onClick={openModal}
        >
          New
          <FaPlus/>
        </button>
      </header>
  );
};
