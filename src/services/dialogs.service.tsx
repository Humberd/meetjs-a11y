import React, { ReactElement } from 'react';
import { observable } from 'mobx';
import { GlobalAnnouncer } from './announcer.service';
import { CreateUserDialog } from '../components/dialogs/create-user-dialog';
import { NewUser, User } from '../models';

export class DialogsService {
  @observable
  dialogRef: DialogRef<any> | null = null;

  openCreateUserDialog(): DialogRef<NewUser> {
    const dialogRef = new DialogRef<NewUser>(<CreateUserDialog onClose={result => dialogRef.closeDialog(result)}/>);

    return this.openDialog(dialogRef);
  }

  openEditUserDialog(user: User): DialogRef<User> {
    const dialogRef = new DialogRef<User>(<CreateUserDialog onClose={result => {
      if (!result) {
        return dialogRef.closeDialog()
      }
      return dialogRef.closeDialog({...result, id: user.id});
    }}/>);

    return this.openDialog(dialogRef);
  }

  private openDialog<T>(dialogRef: DialogRef<T>): DialogRef<T> {
    dialogRef.addOnCloseListener(() => {
      this.dialogRef = null;
      GlobalAnnouncer.announce('Dialog closed');
    });
    GlobalAnnouncer.announce('Dialog opened');

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
