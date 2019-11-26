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
      <table className="UsersTable top-level-container">
        <thead>
        <tr>
          <th/>
          <th/>
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
          className={!user.isActive ? 'inactive' : undefined}
      >
        <td><span className="counter">{index + 1}.</span></td>
        <td><Avatar src={user.avatar} className="avatar"/></td>
        <td>
          <span className="name">{user.name}</span>
        </td>

        <td>
          <div className="actions">
            <div
                className="app-button only-icon edit"
                onClick={onUpdateUser}
            >
              <AppEditIcon/>
            </div>
            <div
                className="app-button only-icon delete"
                onClick={onDeleteUser}
            >
              <AppTrashIcon/>
            </div>
          </div>
        </td>
      </tr>
  );
});
