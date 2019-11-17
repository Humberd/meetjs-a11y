import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './header.scss';

export const AppHeader: React.FC = () => {
  const openModal = () => {
    // @ts-ignore
  };

  return (
      <header className="AppHeader">
        <h2>Users</h2>

        <button
            className="app-button new"
            onClick={openModal}
        >
          New
          <FaPlus/>
        </button>
      </header>
  );
};
