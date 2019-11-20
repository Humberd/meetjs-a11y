import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import './header.scss';
import { UsersContext } from '../services/users.service';
import { DialogsContext } from '../services/dialogs.service';

export const AppHeader: React.FC = () => {
  const usersService = useContext(UsersContext);
  const dialogsService = useContext(DialogsContext);

  const openDialog = () => {
    const ref = dialogsService.openCreateUserDialog();

    ref.addOnCloseListener(result => {
      if (!result) {
        return;
      }

      usersService.addUser(result);
    });
  };

  return (
      <header className="AppHeader">
        <h2>Users</h2>

        <button
            className="app-button new"
            onClick={openDialog}
        >
          New
          <FaPlus/>
        </button>
      </header>
  );
};
