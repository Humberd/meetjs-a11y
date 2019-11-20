import React, { useContext } from 'react';
import { UsersContext } from '../services/users.service';
import { observer } from 'mobx-react';

export const SearchBar: React.FC = observer(() => {
  const usersService = useContext(UsersContext);

  return (
      <input
          type="text"
          placeholder="Search"
          value={usersService.searchQuery}
          onChange={event => usersService.filterUsers(event.target.value)}
      />
  );
});
