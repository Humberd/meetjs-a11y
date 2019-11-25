import React from 'react';
import meetjs from './meetjs-logo.png';
import './app-header.scss';

export const AppHeader: React.FC = () => {
  return (
      <div className="top-level-container AppHeader">
        <img src={meetjs} alt="Meet.js logo"/>
      </div>
  );
};
