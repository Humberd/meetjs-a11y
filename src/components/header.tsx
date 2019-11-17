import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './header.scss';

export const AppHeader: React.FC = () => {
  return (
      <header className="AppHeader">
        <h2>Users</h2>

        <button className="app-button new">
          New
          <FaPlus/>
        </button>
      </header>
  );
};
