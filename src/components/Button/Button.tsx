import React from 'react';

import styles from './Button.module.css';

export interface Props {
  children: string;
  type: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name?: string;
}

const Button: React.FC<Props> = ({ children, type = 'primary', onClick, name }: Props) => {
  const getAppearanceClass = (buttonType: typeof type) => {
    if (buttonType === 'secondary') {
      return styles.typeSecondary;
    }
    return styles.typePrimary;
  };

  const classNames: string[] = [styles.base];

  classNames.push(getAppearanceClass(type));

  return (
    <button className={classNames.join(' ')} type="button" onClick={onClick} data-testid={name}>
      {children}
    </button>
  );
};

export default Button;
