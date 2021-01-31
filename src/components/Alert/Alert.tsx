import React from 'react';
import { AlertTriangle, CheckCircle, X, XOctagon } from 'react-feather';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Alert.module.css';

export type AlertIntent = 'error' | 'success' | 'warning';

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
      [styles.alertWarning]: intent === 'warning',
    },
    className,
  );

  const contentContainer = classNames(styles.contentContainer, {
    [styles.closable]: Boolean(onClose),
  });

  return (
    <div className={mergedClassNames}>
      <div className={contentContainer}>
        {intent === 'error' && <XOctagon className={classNames(styles.icon, styles.iconError)} />}
        {intent === 'success' && (
          <CheckCircle className={classNames(styles.icon, styles.iconSuccess)} />
        )}
        {intent === 'warning' && (
          <AlertTriangle className={classNames(styles.icon, styles.iconWarning)} />
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
