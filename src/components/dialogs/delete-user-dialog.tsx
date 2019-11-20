import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../dialog';
import { OnCloseListener } from '../../services/dialogs.service';
import { User } from '../../models';

export interface DeleteUserDialogProps<T> {
  onClose: OnCloseListener<T>,
  user: User
}

export const DeleteUserDialog: React.FC<DeleteUserDialogProps<number>> = ({onClose, user}) => {
  return (
      <form onSubmit={event => onClose(user.id)}>
        <Dialog onClose={onClose}>
          <DialogHeader title="Delete User" onClose={onClose}/>

          <DialogContent className="content">
            <p>
              Are you sure you want to delete {user.name}?
            </p>
          </DialogContent>

          <DialogFooter submitLabel="Delete" onClose={onClose}/>
        </Dialog>
      </form>
  );
};
