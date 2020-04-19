import React from 'react';

import '../../index.css';
import styles from './Button.module.css';

export interface Props {
  children: string;
  appearance: 'tactile' | 'flat';
  kind: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<Props> = ({
  children,
  appearance = 'tactile',
  kind = 'kind',
  onClick,
}: Props) => {
  const getAppearanceClass = (appearanceProp: typeof appearance) => {
    if (appearanceProp === 'flat') {
      return styles.appearanceFlat;
    }
    return styles.appearanceTactile;
  };

  const className: string[] = [styles.base];

  className.push(getAppearanceClass(appearance));

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};
