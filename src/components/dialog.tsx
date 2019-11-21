import React, { useEffect } from 'react';
import './dialog.scss';
import { OnCloseListener } from '../services/dialogs.service';
import FocusTrap from 'focus-trap-react';
import { FaTimes } from 'react-icons/all';

export interface DialogOptions<T> {
  onClose: OnCloseListener<T>;
}

export const Dialog: React.FC<DialogOptions<any>> = ({onClose, children}) => {
  useEffect(() => listenForEscKey(onClose), [onClose]);

  return (
      <div className="AppDialog--Backdrop" onClick={() => onClose()}>
        <FocusTrap
            focusTrapOptions={{
              clickOutsideDeactivates: true,
            }}
        >
          <div
              className="AppDialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="DialogTitle"
              onClick={event => event.stopPropagation()}
          >
            {children}
          </div>
        </FocusTrap>
      </div>
  );
};

function listenForEscKey(onClose: () => any) {
  const listener = (ev: KeyboardEvent) => ev.key === 'Escape' && onClose();
  document.addEventListener('keydown', listener);
  return () => document.removeEventListener('keydown', listener);
}

export interface DialogHeaderProps<T> {
  title: string;
  onClose: OnCloseListener<T>;
}

export const DialogHeader: React.FC<DialogHeaderProps<any>> = ({onClose, title}) => {
  return (
      <header className="DialogHeader">
        <h2 className="dialogTitle" id="DialogTitle">
          {title}
        </h2>

        <button
            className="app-button only-icon"
            onClick={() => onClose()}
            type="button"
            title="Close dialog"
        >
          <FaTimes/>
        </button>
      </header>
  );
};

export interface DialogContentProps {
  className?: string
}

export const DialogContent: React.FC<DialogContentProps> = ({className, children}) => {
  return (
      <section className={className + ' DialogContent'}>
        {children}
      </section>
  );
};

export interface DialogFooterProps<T> {
  submitLabel: string;
  submitAriaLabel?: string;
  onClose: OnCloseListener<T>;
}

export const DialogFooter: React.FC<DialogFooterProps<any>> = ({onClose, submitLabel, submitAriaLabel}) => {
  return (
      <footer className="DialogFooter">
        <button
            className="app-button close"
            onClick={() => onClose()}
            type="button"
            title="Close dialog"
        >
          Close
        </button>
        <button className="app-button" type="submit" aria-label={submitAriaLabel}>
          {submitLabel}
        </button>
      </footer>
  );
};

