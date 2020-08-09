import React, { ReactNode } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './FormField.module.css';

type Props = {
  label?: string;
  hint?: ReactNode;
  errorMessage?: string;
  className?: string;
  children: ReactNode;
  isSpaced?: boolean;
};

const FormField: React.FC<Props> = ({
  label,
  className,
  children,
  hint,
  errorMessage,
  isSpaced = false,
}: Props) => {
  const mergedClassNames = classNames(cssReset.ventura, className, {
    [styles.isSpaced]: isSpaced,
  });
  return (
    <div className={mergedClassNames}>
      {Boolean(label) && <span className={styles.label}>{label}</span>}
      {children}
      {Boolean(errorMessage) && <span className={styles.errorMessage}>{errorMessage}</span>}
      {Boolean(hint) && <div className={styles.hint}>{hint}</div>}
    </div>
  );
};

export default FormField;
