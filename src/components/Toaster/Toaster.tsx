import React from 'react';
import ReactDOM from 'react-dom';

import ToastManager, {
  ToastCallHandler,
  ToastInstance,
  ToastSettings,
} from './ToastManager/ToastManager';

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
class Toaster {
  notifyHandler?: ToastCallHandler;

  removeHandler?: (id: string) => void;

  getToastsHandler?: () => ToastInstance[];

  closeAllHandler?: () => void;

  constructor() {
    if (typeof document !== 'undefined') {
      const container = document.createElement('div');
      container.setAttribute('id', 'ventura-toasters');
      document.body.appendChild(container);

      ReactDOM.render(
        <ToastManager
          bindNotify={this.bindNotify}
          bindRemove={this.bindRemove}
          bindGetToasts={this.bindGetToasts}
          bindCloseAll={this.bindCloseAll}
        />,
        container,
      );
    }
  }

  private bindNotify = (handler: ToastCallHandler) => {
    this.notifyHandler = handler;
  };

  private bindRemove = (handler: (id: string) => void) => {
    this.removeHandler = handler;
  };

  private bindGetToasts = (handler: () => ToastInstance[]) => {
    this.getToastsHandler = handler;
  };

  private bindCloseAll = (handler: () => void) => {
    this.closeAllHandler = handler;
  };

  getToasts = () => this.getToastsHandler && this.getToastsHandler();

  closeAll = () => this.closeAllHandler && this.closeAllHandler();

  // info = (message: string, settings?: Omit<ToastSettings, 'intent'>) => {
  //   return this.notifyHandler(message, { ...settings, intent: 'info' });
  // };

  success = (message: string, settings?: Omit<ToastSettings, 'intent'>) => this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'success' });

  warning = (message: string, settings?: Omit<ToastSettings, 'intent'>) => this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'warning' });

  error = (message: string, settings?: Omit<ToastSettings, 'intent'>) => this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'error' });

  remove = (id: string) => this.removeHandler && this.removeHandler(id);
}

export default new Toaster();
