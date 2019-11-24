import React, { useContext } from 'react';
import { User } from '../models';
import { FaEdit, FaTrash } from 'react-icons/all';
import './users.scss';
import { UsersContext } from '../services/users.service';
import { observer } from 'mobx-react';
import { Avatar } from './avatar';
import { DialogsContext } from '../services/dialogs.service';

export const UsersTable = observer(() => {
  const {users} = useContext(UsersContext);

  return (
      <table className="UsersTable top-level-container">
        <thead>
        <tr>
          <td/>
          <td/>
          <td className="name">Name</td>
          <td className="actions">Actions</td>
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
      <tr>
        <td><span className="counter">{index + 1}.</span></td>
        <td><Avatar src={user.avatar}/></td>
        <td>
          <h3>{user.name}</h3>
        </td>

        <td>
          <div className="actions">
            <button
                className="app-button only-icon edit"
                title="Edit user"
                onClick={onUpdateUser}
            >
              <FaEdit/>
            </button>
            <button
                className="app-button only-icon delete"
                title="Delete user"
                onClick={onDeleteUser}
            >
              <FaTrash/>
            </button>
          </div>
        </td>
      </tr>
  );
});
