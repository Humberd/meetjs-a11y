import React, { ReactElement } from 'react';
import { observable } from 'mobx';
import { Dialog } from '../components/dialog';

export class DialogsService {

  @observable
  dialogRef: DialogRef<any> | null = null;

  openCreateDialog() {
    const dialogRef = new DialogRef(<Dialog
        title="Add User"
        onClose={() => dialogRef.closeDialog()}
    >
      <button
          className="app-button"
          onClick={() => dialogRef.closeDialog()}
      >
        Close
      </button>
      <button className="app-button">
        Create
      </button>

    </Dialog>);

    dialogRef.addOnCloseListener(() => this.dialogRef = null);

    this.dialogRef = dialogRef;

    return dialogRef;
  }
}

export type OnCloseListener<T> = (result?: T) => void;

export class DialogRef<T> {
  private onCloseListeners: OnCloseListener<T>[] = [];

  constructor(public elem: ReactElement) {

  }

  addOnCloseListener(listener: OnCloseListener<T>) {
    this.onCloseListeners.push(listener);
  }

  closeDialog(result?: T) {
    this.onCloseListeners.forEach(it => it(result));
  }

}

export const DialogsContext = React.createContext(new DialogsService());
