import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import './users-header.scss';
import { UsersContext } from '../services/users.service';
import { DialogsContext } from '../services/dialogs.service';

export const UsersHeader: React.FC = () => {
  const usersService = useContext(UsersContext);
  const {users} = usersService;
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
        <span className="title">
          Users
          <span> ({users.length}) </span>
        </span>

        <div
            className="app-button success new"
            onClick={openDialog}
        >
          <FaPlus/>
          New
        </div>
      </section>
  );
};
