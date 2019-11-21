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
      <Dialog onClose={onClose}>
        <DialogHeader title="Delete User" onClose={onClose}/>

        <form onSubmit={() => onClose(user.id)}>

          <DialogContent className="content">
            <p>
              Are you sure you want to delete {user.name}?
            </p>
          </DialogContent>

          <DialogFooter submitLabel="Delete" submitAriaLabel={`Delete ${user.name}`} onClose={onClose}/>

        </form>

      </Dialog>
  );
};
