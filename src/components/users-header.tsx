import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import './users-header.scss';
import { UsersContext } from '../services/users.service';
import { DialogsContext } from '../services/dialogs.service';

export const UsersHeader: React.FC = () => {
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
      <section className="UsersHeader">
        <h1 className="title">
          Users
          <span> ({usersService.users.length}) </span>
        </h1>

        <button
            className="app-button success new"
            onClick={openDialog}
            aria-label="Create new user"
        >
          <FaPlus/>
          New
        </button>
      </section>
  );
};
