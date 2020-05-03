import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

export interface Props {
  children: string;
  type: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled: boolean;
  isLoading: boolean;
  name?: string;
}

const Button: React.FC<Props> = ({ children, type = 'primary', onClick, name }: Props) => {
  const buttonClassNames = classNames(styles.base, {
    [styles.typePrimary]: type === 'primary',
    [styles.typeSecondary]: type === 'secondary',
  });

  return (
    <button className={buttonClassNames} type="button" onClick={onClick} data-testid={name}>
      {children}
    </button>
  );
};

export default Button;
