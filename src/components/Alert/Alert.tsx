import React from 'react';
import { AlertCircle, CheckCircle, X } from 'react-feather';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Alert.module.css';

export type AlertIntent = 'error' | 'success';

interface Props {
  intent?: AlertIntent;
  message: string;
  className?: string;
  onClose?: () => void;
}

const Alert: React.FC<Props> = ({ intent = 'error', message, className, onClose }: Props) => {
  const mergedClassNames = classNames(
    cssReset.ventura,
    styles.alert,
    {
      [styles.alertError]: intent === 'error',
      [styles.alertSuccess]: intent === 'success',
    },
    className,
  );

  const contentContainer = classNames(styles.contentContainer, {
    [styles.closable]: Boolean(onClose),
  });

  return (
    <div className={mergedClassNames}>
      <div className={contentContainer}>
        {intent === 'error' && (
          <AlertCircle className={classNames(styles.icon, styles.iconError)} />
        )}
        {intent === 'success' && (
          <CheckCircle className={classNames(styles.icon, styles.iconSuccess)} />
        )}
        <span className={styles.message}>{message}</span>
      </div>
      {onClose && (
        <div className={styles.closeContainer}>
          <X onClick={onClose} className={styles.closeAlert} />
        </div>
      )}
    </div>
  );
};

export default Alert;
