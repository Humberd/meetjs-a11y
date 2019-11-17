import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppHeader } from './components/header';
import { User, UserStatus } from './models';
import { UsersList } from './components/users';

const initialUsers: User[] = [
  {
    id: 1,
    name: 'Bob',
    avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
    status: UserStatus.ACTIVE,
  },
  {
    id: 2,
    name: 'Alice',
    avatar: 'https://p7.hiclipart.com/preview/118/942/565/computer-icons-avatar-child-user-avatar-thumbnail.jpg',
    status: UserStatus.INACTIVE,
  },
];

const App: React.FC = () => {
  const [users] = useState<User[]>(initialUsers);

  return (
      <main className="App">
        <AppHeader/>
        <UsersList users={users}/>
      </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
