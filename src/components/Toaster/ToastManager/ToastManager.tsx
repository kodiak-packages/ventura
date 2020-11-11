import React, { memo, useState } from 'react';

import { AlertIntent } from '../../Alert/Alert';
import Toast from '../Toast/Toast';

import styles from './ToastManager.module.css';

export interface ToastSettings {
  id?: string;
  hasCloseButton?: boolean;
  duration?: number;
  intent: AlertIntent;
}

export interface ToastInstance {
  id: string;
  message: string;
  hasCloseButton: boolean;
  duration: number;
  onClose: () => void;
  intent: AlertIntent;
  isShown: boolean;
}

export type ToastCallHandler = (message: string, settings: ToastSettings) => void;

interface Props {
  bindNotify: (handler: ToastCallHandler) => void;
  bindRemove: (handler: ToastCallHandler) => void;
  bindGetToasts: (handler: ToastCallHandler) => void;
  bindCloseAll: (handler: ToastCallHandler) => void;
}

const hasCustomId = (settings: ToastSettings) => Object.hasOwnProperty.call(settings, 'id');

const ToastManager = memo(({ bindNotify, bindRemove, bindGetToasts, bindCloseAll }: Props) => {
  const [toasts, setToasts] = useState<ToastInstance[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const getToasts = () => toasts;

  const closeAll = () => {
    setToasts(toasts.map((toast) => ({ ...toast, isShown: false })));
  };

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
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
    { hasCloseButton = true, duration = 5, id, intent }: ToastSettings,
  ): ToastInstance => {
    const uniqueId = idCounter;
    setIdCounter(idCounter + 1);
    const generatedId = id ? `${id}-${uniqueId}` : `${uniqueId}`;

    return {
      id: generatedId,
      message,
      hasCloseButton,
      duration,
      onClose: () => safeCloseToast(generatedId),
      intent,
      isShown: true,
    };
  };

  const notify = (message: string, settings: ToastSettings) => {
    let tempToasts = toasts;
    if (hasCustomId(settings)) {
      tempToasts = removeToast(settings?.id);
    }

    const instance = createToastInstance(message, settings);
    setToasts([instance, ...tempToasts]);
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);
  bindGetToasts(getToasts);
  bindCloseAll(closeAll);

  return (
    <span className={styles.toastManagerContainer}>
      {toasts.map(({ id, duration, isShown, message }) => {
        return (
          <Toast
            key={id}
            onRemove={() => removeToast(id)}
            duration={duration}
            isShown={isShown}
            message={message}
          />
        );
      })}
    </span>
  );
});

export default ToastManager;
