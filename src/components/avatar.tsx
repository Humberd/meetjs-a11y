import React from 'react';
import './avatar.scss';
import { DEFAULT_AVATAR } from '../services/users.service';

export interface AvatarProps {
  src: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({className = '', src}) => {
  return (
      <img src={src || DEFAULT_AVATAR} alt="user avatar" aria-hidden={true} className={className + ' avatar'}/>
  );
};
