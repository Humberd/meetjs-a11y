import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../dialog';
import { OnCloseListener } from '../../services/dialogs.service';
import { NewUser, UserStatus } from '../../models';

export interface CreateUserDialogProps<T> {
  onClose: OnCloseListener<T>
}

export const CreateUserDialog: React.FC<CreateUserDialogProps<NewUser>> = ({onClose}) => {
  const onSubmit = () => {
    onClose({
      name: 'abc',
      avatar: '',
      status: UserStatus.ACTIVE,
    });
  };


  return (
      <Dialog onClose={onClose}>
        <DialogHeader title="Create User" onClose={onClose}/>

        <form onSubmit={onSubmit}>

          <DialogContent>
            <label>
              Name
              <input name="name" type="text"/>
            </label>

            <label>
              Is active
              <input name="isActive" type="checkbox"/>
            </label>
          </DialogContent>

          <DialogFooter submitLabel="Create" onClose={onClose}/>
        </form>


      </Dialog>

  );
};
