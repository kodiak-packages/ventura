import React from 'react';
import { AlertCircle } from 'react-feather';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Alert.module.css';

interface Props {
  intent?: 'error';
  message: string;
  className?: string;
}

const Alert: React.FC<Props> = ({ intent = 'error', message, className }: Props) => {
  const mergedClassNames = classNames(cssReset.ventura, styles.alert, className);

  return (
    <div className={mergedClassNames}>
      {intent === 'error' && <AlertCircle className={styles.icon} />}
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default Alert;
