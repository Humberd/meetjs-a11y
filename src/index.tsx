import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppHeader } from './components/header';
import { UsersList } from './components/users';

const App: React.FC = () => {
  return (
      <main className="App">
        <AppHeader/>
        <UsersList/>
      </main>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
