import React from 'react';
import { AlertCircle, CheckCircle } from 'react-feather';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Alert.module.css';

export type AlertIntent = 'error' | 'success';

interface Props {
  intent?: AlertIntent;
  message: string;
  className?: string;
}

const Alert: React.FC<Props> = ({ intent = 'error', message, className }: Props) => {
  const mergedClassNames = classNames(
    cssReset.ventura,
    styles.alert,
    {
      [styles.alertError]: intent === 'error',
      [styles.alertSuccess]: intent === 'success',
    },
    className,
  );

  return (
    <div className={mergedClassNames}>
      {intent === 'error' && <AlertCircle className={classNames(styles.icon, styles.iconError)} />}
      {intent === 'success' && (
        <CheckCircle className={classNames(styles.icon, styles.iconSuccess)} />
      )}
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default Alert;
