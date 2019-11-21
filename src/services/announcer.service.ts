import { observable } from 'mobx';
import React from 'react';

type Politeness = 'polite' | 'assertive';
export class AnnouncerService {
  @observable
  text: string = '';

  @observable
  politeness: Politeness = 'polite';

  announce(text: string, politeness: Politeness = 'assertive') {
    this.text = text;
    this.politeness = politeness
  }
}

export const GlobalAnnouncer = new AnnouncerService();
export const AnnouncerContext = React.createContext(GlobalAnnouncer);
