import React, { ComponentProps, useState } from 'react';

import { AlertIntent } from '../../Alert/Alert';
import Toast from '../Toast/Toast';

import styles from './ToastManager.module.css';

export interface ToastSettings {
  id?: string;
  isClosable?: boolean;
  durationInSeconds?: number;
  intent: AlertIntent;
}

export interface ToastInstance extends ComponentProps<typeof Toast> {
  id: string;
}

export type ToastCallHandler = (message: string, settings: ToastSettings) => void;

interface Props {
  bindNotify: (handler: ToastCallHandler) => void;
  bindRemove: (handler: (id: string) => void) => void;
  bindGetToasts: (handler: () => ToastInstance[]) => void;
  bindCloseAll: (handler: () => void) => void;
}

const ToastManager = ({ bindNotify, bindRemove, bindGetToasts, bindCloseAll }: Props) => {
  const [toasts, setToasts] = useState<ToastInstance[]>([]);

  const getToasts = () => toasts;

  const closeAll = () => {
    setToasts(toasts.map((toast) => ({ ...toast, isShown: false })));
  };

  const closeToast = (id: string) => {
    setToasts(
      toasts.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            isShown: false,
          };
        }

        return toast;
      }),
    );
  };

  const safeCloseToast = (id: string) => {
    const toastToRemove = toasts.find((toast) => String(toast.id).startsWith(id));

    if (toastToRemove) {
      closeToast(toastToRemove.id);
    }
  };

  const removeToast = (id?: string) => {
    if (id) {
      const updatedToasts = toasts.filter((toast) => !String(toast.id).startsWith(id));
      setToasts(updatedToasts);
      return updatedToasts;
    }
    return toasts;
  };

  const createToastInstance = (
    message: string,
    { isClosable = true, durationInSeconds = 5, id, intent }: ToastSettings,
  ): ToastInstance => {
    const uniqueId = new Date().getTime();
    const generatedId = id ? `${id}-${uniqueId}` : `${uniqueId}`;

    return {
      id: generatedId,
      message,
      isClosable,
      durationInSeconds,
      onClose: () => safeCloseToast(generatedId),
      intent,
      isShown: true,
    };
  };

  const notify = (message: string, settings: ToastSettings) => {
    const tempToasts = settings.id ? removeToast(settings.id) : toasts;
    const instance = createToastInstance(message, settings);
    setToasts([instance, ...tempToasts]);
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);
  bindGetToasts(getToasts);
  bindCloseAll(closeAll);

  return (
    <span className={styles.toastManagerContainer}>
      {toasts.map(({ id, durationInSeconds, isShown, message, intent, isClosable }) => (
          <Toast
            key={id}
            onClose={() => removeToast(id)}
            durationInSeconds={durationInSeconds}
            isShown={isShown}
            message={message}
            intent={intent}
            isClosable={isClosable}
          />
        ))}
    </span>
  );
};

export default ToastManager;
