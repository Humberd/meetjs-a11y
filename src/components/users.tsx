import React, { useContext } from 'react';
import { User } from '../models';
import './users.scss';
import { UsersContext } from '../services/users.service';
import { observer } from 'mobx-react';
import { Avatar } from './avatar';
import { DialogsContext } from '../services/dialogs.service';
import { AppEditIcon, AppTrashIcon } from './app/app-icons';

export const UsersTable = observer(() => {
  const {users} = useContext(UsersContext);

  return (
      <table className="UsersTable top-level-container" aria-label="Users table">
        <thead>
        <tr>
          <th aria-label="Row counter"/>
          <th aria-label="Avatar"/>
          <th className="name">Name</th>
          <th className="actions">Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <UserRow key={user.id} user={user} index={index}/>
        ))}
        </tbody>
      </table>
  );
});

export interface UserItemProps {
  user: User,
  index: number
}

export const UserRow: React.FC<UserItemProps> = observer(({user, index}) => {
  const usersService = useContext(UsersContext);
  const dialogsService = useContext(DialogsContext);

  const onUpdateUser = () => {
    const ref = dialogsService.openEditUserDialog(user);
    ref.addOnCloseListener(newUser => {
      if (!newUser) {
        return;
      }
      usersService.updateUser(newUser);
    });
  };

  const onDeleteUser = () => {
    const ref = dialogsService.openDeleteUserDialog(user);
    ref.addOnCloseListener(result => {
      if (!result) {
        return;
      }
      usersService.deleteUser(user.id);
    });
  };

  return (
      <tr
          aria-label={!user.isActive ? 'User inactive' : undefined}
          className={!user.isActive ? 'inactive' : undefined}
      >
        <td><span className="counter">{index + 1}.</span></td>
        <td><Avatar src={user.avatar} className="avatar"/></td>
        <td>
          <h3 className="name">{user.name}</h3>
        </td>

        <td>
          <div className="actions">
            <button
                className="app-button only-icon edit"
                title={`Edit ${user.name}`}
                onClick={onUpdateUser}
            >
              <AppEditIcon/>
            </button>
            <button
                className="app-button only-icon delete"
                title={`Delete ${user.name}`}
                onClick={onDeleteUser}
            >
              <AppTrashIcon/>
            </button>
          </div>
        </td>
      </tr>
  );
});
