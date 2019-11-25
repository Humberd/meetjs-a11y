import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../dialog';
import { OnCloseListener } from '../../services/dialogs.service';
import { User } from '../../models';
import { FaTrash } from 'react-icons/all';
import './delete-user-dialog.scss';

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
            <p    >
              Are you sure you want to delete {user.name}?
            </p>
          </DialogContent>

          <DialogFooter onClose={onClose}>
            <button className="app-button warn">
              <FaTrash/>
              Delete
            </button>
          </DialogFooter>

        </form>

      </Dialog>
  );
};
