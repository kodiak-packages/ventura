import React from 'react';
import classNames from 'classnames';

import Spinner from '../utils/Spinner/Spinner';

import styles from './Button.module.css';

export interface Props {
  children: string;
  type: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled: boolean;
  isLoading: boolean;
  prefixIcon: React.Component;
  suffixIcon: React.Component;
  name?: string;
}

const Button: React.FC<Props> = ({
  children,
  type = 'primary',
  onClick,
  isDisabled,
  isLoading,
  prefixIcon,
  suffixIcon,
  name,
}: Props) => {
  const buttonClassNames = classNames(styles.base, {
    [styles.typePrimary]: (!isDisabled || !isLoading) && type === 'primary',
    [styles.typeSecondary]: (!isDisabled || !isLoading) && type === 'secondary',
  });

  const labelClassNames = classNames(styles.label, {
    [styles.labelWithPrefixIcon]: Boolean(prefixIcon) || isLoading,
    [styles.labelWithSuffixIcon]: Boolean(suffixIcon),
  });

  return (
    <button
      disabled={isDisabled || isLoading}
      className={buttonClassNames}
      type="button"
      onClick={onClick}
      data-testid={name}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : prefixIcon}
      <span className={labelClassNames}>{children}</span>
      {isLoading || suffixIcon}
    </button>
  );
};

export default Button;
