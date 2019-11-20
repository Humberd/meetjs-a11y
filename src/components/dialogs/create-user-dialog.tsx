import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../dialog';
import { OnCloseListener } from '../../services/dialogs.service';
import { NewUser } from '../../models';
import useForm from 'react-hook-form';
import './create-user-dialog.scss';

export interface CreateUserDialogProps<T> {
  onClose: OnCloseListener<T>
}

export const CreateUserDialog: React.FC<CreateUserDialogProps<NewUser>> = ({onClose}) => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (result: any) => {
    onClose(result as NewUser);
  };

  return (
      <form className="CreateUserDialogForm" onSubmit={handleSubmit(onSubmit)}>
        <Dialog onClose={onClose}>
          <DialogHeader title="Create User" onClose={onClose}/>

          <DialogContent className="content">
            <label>
              Name
              <input name="name" type="text" ref={register}/>
            </label>

            <label>
              Is active
              <input name="isActive" type="checkbox" ref={register}/>
            </label>
          </DialogContent>

          <DialogFooter submitLabel="Create" onClose={onClose}/>
        </Dialog>
      </form>

  );
};
