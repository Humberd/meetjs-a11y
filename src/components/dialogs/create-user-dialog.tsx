import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../dialog';
import { OnCloseListener } from '../../services/dialogs.service';
import { NewUser, User } from '../../models';
import useForm from 'react-hook-form';
import './create-user-dialog.scss';
import { USER_AVATARS } from '../../services/users.service';
import { Avatar } from '../avatar';

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
            <label className="row">
              <span>Name</span>
              <input
                  name="name"
                  type="text"
                  aria-invalid={!!errors.name}
                  aria-describedby="error-name-required"
                  ref={register({required: true})}
                  aria-required={true}
              />
              {errors.name && errors.name.type === 'required' && (
                  <span role="alert" id="error-name-required" className="error-message">
                    This field is required
                  </span>
              )}
            </label>

            <label className="row">
              <span>Avatar</span>
              <select name="avatar" ref={register}>
                <option/>
                {USER_AVATARS.map((url, index) => (
                    <option key={url} value={url}>{index + 1}</option>
                ))}
              </select>

              <Avatar src={watch('avatar')} className="avatar"/>
            </label>

            <label className="row">
              <span>Is active</span>
              <input name="isActive" type="checkbox" ref={register}/>
            </label>


          </DialogContent>

          <DialogFooter submitLabel={submitLabel} onClose={onClose}/>
        </form>

      </Dialog>

  );
};
