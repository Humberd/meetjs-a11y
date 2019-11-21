import React, { useContext } from 'react';
import { UsersContext } from '../services/users.service';
import { observer } from 'mobx-react';

export const SearchBar: React.FC = observer(() => {
  const usersService = useContext(UsersContext);

  return (
      <form role="search" aria-label="Users">
        <input
            type="search"
            placeholder="Search"
            value={usersService.searchQuery}
            onChange={event => usersService.filterUsers(event.target.value)}
        />
      </form>
  );
});
