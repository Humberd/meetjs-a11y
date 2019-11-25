import React from 'react';
import './app-header.scss';

export const AppHeader: React.FC = () => {
  return (
      <header className="top-level-container AppHeader">
        <img src="./assets/images/meetjs-logo.png" alt="Meet.js logo" />
      </header>
  );
};
