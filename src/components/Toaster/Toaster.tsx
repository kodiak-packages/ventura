import React from 'react';
import ReactDOM from 'react-dom';

import ToastManager, {
  ToastCallHandler,
  ToastInstance,
  ToastSettings,
} from './ToastManager/ToastManager';

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

  private bindNotify(handler: ToastCallHandler) {
    this.notifyHandler = handler;
  }

  private bindRemove(handler: (id: string) => void) {
    this.removeHandler = handler;
  }

  private bindGetToasts(handler: () => ToastInstance[]) {
    this.getToastsHandler = handler;
  }

  private bindCloseAll(handler: () => void) {
    this.closeAllHandler = handler;
  }

  public getToasts() {
    return this.getToastsHandler && this.getToastsHandler();
  }

  public closeAll() {
    return this.closeAllHandler && this.closeAllHandler();
  }

  // info = (message: string, settings?: Omit<ToastSettings, 'intent'>) => {
  //   return this.notifyHandler(message, { ...settings, intent: 'info' });
  // };

  public success(message: string, settings?: Omit<ToastSettings, 'intent'>) {
    return this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'success' });
  }

  public warning(message: string, settings?: Omit<ToastSettings, 'intent'>) {
    return this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'warning' });
  }

  public error(message: string, settings?: Omit<ToastSettings, 'intent'>) {
    return this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'error' });
  }

  public remove(id: string) {
    return this.removeHandler && this.removeHandler(id);
  }
}

export default new Toaster();
