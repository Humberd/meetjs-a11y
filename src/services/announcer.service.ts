import { observable } from 'mobx';
import React from 'react';

export class AnnouncerService {
  @observable
  text: string = '';

  announce(text: string) {
    this.text = text;
  }
}


export const AnnouncerContext = React.createContext(new AnnouncerService());
