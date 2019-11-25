import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../dialog';
import { OnCloseListener } from '../../services/dialogs.service';
import { NewUser, User } from '../../models';
import useForm from 'react-hook-form';
import './create-user-dialog.scss';
import { USER_AVATARS } from '../../services/users.service';
import { Avatar } from '../avatar';
import { FaPlus } from 'react-icons/all';

export interface CreateUserDialogProps<T> {
  onClose: OnCloseListener<T>,
  existingUser?: User
}

export const CreateUserDialog: React.FC<CreateUserDialogProps<NewUser>> = ({onClose, existingUser}) => {
  const title = existingUser ? 'Edit User' : 'Create User';
  const submitLabel = existingUser ? 'Save' : 'Create';

  const {register, handleSubmit, watch, errors} = useForm({
    defaultValues: existingUser && {
      name: existingUser.name,
      avatar: existingUser.avatar,
      isActive: existingUser.isActive,
    },
  });

  const onSubmit = (result: any) => {
    onClose(result as NewUser);
  };

  return (
      <Dialog onClose={onClose}>
        <DialogHeader title={title} onClose={onClose}/>

        <form className="CreateUserDialogForm" onSubmit={handleSubmit(onSubmit)}>

          <DialogContent className="content">

            <section className="preview">
              <Avatar src={watch('avatar')} className="avatar-preview"/>
            </section>

            <section className="form-content">
              <label className="row">
                <span>Name</span>
                <input
                    name="name"
                    type="text"
                    aria-required={true}
                    aria-invalid={!!errors.name}
                    ref={register({required: true})}
                />
              </label>
              {errors.name && errors.name.type === 'required' && (
                  <p className="error-message">
                    This field is required
                  </p>
              )}

              <label className="row avatar">
                <span>Avatar</span>
                <select name="avatar" ref={register}>
                  <option/>
                  {USER_AVATARS.map((url, index) => (
                      <option key={url} value={url}>{index + 1}</option>
                  ))}
                </select>
              </label>

              <label className="row is-active">
                <input name="isActive" type="checkbox" ref={register}/>
                <span>Is active</span>
              </label>
            </section>

          </DialogContent>

          <DialogFooter onClose={onClose}>
            <button className="app-button success">
              <FaPlus/>
              {submitLabel}
            </button>
          </DialogFooter>

        </form>

      </Dialog>

  );
};
