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

  getToasts = () => {
    return this.getToastsHandler && this.getToastsHandler();
  };

  closeAll = () => {
    return this.closeAllHandler && this.closeAllHandler();
  };

  // info = (message: string, settings: ToastSettings) => {
  //   return this.notifyHandler(message, { ...settings, intent: 'info' });
  // };

  success = (message: string, settings: ToastSettings) => {
    return this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'success' });
  };

  // warning = (message: string, settings: ToastSettings) => {
  //   return this.notifyHandler(message, { ...settings, intent: 'warning' });
  // };

  error = (message: string, settings: ToastSettings) => {
    return this.notifyHandler && this.notifyHandler(message, { ...settings, intent: 'error' });
  };

  remove = (id: string) => {
    return this.removeHandler && this.removeHandler(id);
  };
}

export default new Toaster();
