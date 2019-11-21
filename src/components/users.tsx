import React, { useContext } from 'react';
import { User } from '../models';
import { FaEdit, FaTrash } from 'react-icons/all';
import './users.scss';
import { UsersContext } from '../services/users.service';
import { observer } from 'mobx-react';
import { Avatar } from './avatar';
import { DialogsContext } from '../services/dialogs.service';

export const UsersList = observer(() => {
  const users = useContext(UsersContext);

  return (
      <ul className="UsersList" aria-label="Users list">
        {users.users.length > 0 && users.users.map(user => (
            <li key={user.id} aria-label="user">
              <UserItem user={user}/>
            </li>
        ))}

        {users.users.length === 0 &&
        <p className="no-results">
          No results
        </p>
        }
      </ul>
  );
});

export interface UserItemProps {
  user: User
}

export const UserItem: React.FC<UserItemProps> = observer(({user}) => {
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
      <div className={`UserListItem ${!user.isActive && 'inactive'}`}>
        <Avatar src={user.avatar}/>
        <span>{user.name}</span>

        <section className="actions">
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
        </section>
      </div>
  );
});
