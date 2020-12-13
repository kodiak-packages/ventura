import React, { ReactNode } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './FormField.module.css';

type Props = {
  label?: string;
  hint?: ReactNode;
  errorMessage?: string | (string | undefined)[];
  className?: string;
  children: ReactNode;
};

const FormField: React.FC<Props> = ({ label, className, children, hint, errorMessage }: Props) => {
  const mergedClassNames = classNames(cssReset.ventura, className, {
    [styles.isSpaced]: Boolean(label),
  });

  let errorMessages: string[] = [];
  if (Array.isArray(errorMessage)) {
    errorMessages = errorMessage.filter(Boolean) as string[];
  } else if (errorMessage) {
    errorMessages = [errorMessage];
  }

  return (
    <div className={mergedClassNames}>
      {Boolean(label) && <span className={styles.label}>{label}</span>}
      {children}
      {errorMessages.map((err) => (
        <span key={err} className={styles.errorMessage}>
          {err}
        </span>
      ))}
      {Boolean(hint) && <div className={styles.hint}>{hint}</div>}
    </div>
  );
};

export default FormField;
