import React from 'react';
import meetjs from './meetjs-logo.png';
import './app-header.scss';

export const AppHeader: React.FC = () => {
  return (
      <header className="top-level-container AppHeader">
        <h1>
          <img src={meetjs} alt="Meet.js logo"/>
        </h1>
      </header>
  );
};
