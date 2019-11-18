import React, { useContext } from 'react';
import { User } from '../models';
import { FaEllipsisH } from 'react-icons/all';
import './users.scss';
import { UsersContext } from '../users-context';
import { observer } from 'mobx-react';

export const UsersList = observer(() => {
  const users = useContext(UsersContext);

  return (
      <ul className="UsersList">
        {users.users.map(user => (
            <li key={user.id}>
              <UserItem user={user}/>
            </li>
        ))}
      </ul>
  );
});

export interface UserItemProps {
  user: User
}

export const UserItem: React.FC<UserItemProps> = ({user}) => {
  return (
      <div className="UserListItem">
        <img
            className="avatar"
            src={user.avatar}
            alt="user avatar"
        />
        <span>{user.name}</span>
        <button className="app-button only-icon options">
          <FaEllipsisH/>
        </button>
      </div>
  );
};
