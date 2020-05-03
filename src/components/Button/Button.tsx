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
    [styles.typePrimary]: type === 'primary',
    [styles.typeSecondary]: type === 'secondary',
  });

  return (
    <button
      disabled={isDisabled}
      className={buttonClassNames}
      type="button"
      onClick={onClick}
      data-testid={name}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : prefixIcon}
      {children}
      {isLoading || suffixIcon}
    </button>
  );
};

export default Button;
