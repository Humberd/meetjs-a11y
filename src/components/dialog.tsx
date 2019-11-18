import React, { useEffect } from 'react';
import './dialog.scss';
import { OnCloseListener } from '../services/dialogs.service';
import FocusTrap from 'focus-trap-react';

export interface DialogOptions<T> {
  title: string;
  onClose: OnCloseListener<T>;
}

export const Dialog: React.FC<DialogOptions<any>> = ({title, onClose, children}) => {
  const titleId = 'dialogTitle';
  const descId = 'dialogDesc';

  useEffect(() => {
    const listener = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [onClose]);

  return (
      <div
          className="AppDialog--Backdrop"
          onClick={onClose}
      >
        <FocusTrap focusTrapOptions={{
          clickOutsideDeactivates: true
        }}>
          <div
              className="AppDialog"
              role="dialog"
              aria-labelledby={titleId}
              onClick={event => event.stopPropagation()}
          >

            <h2
                id={titleId}
                className="dialogTitle"
            >{title}</h2>
            <section
                id={descId}
                className="dialogDesc"
            >

              {children}

            </section>


          </div>
        </FocusTrap>
      </div>
  );
};
