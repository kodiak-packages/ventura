import React from 'react';

import '../index.css';
// import styles from './Button.module.css';

export interface Props {
  children: string;
  appearance: 'tactile' | 'flat';
  kind: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<Props> = ({
  children,
  appearance = 'tactile',
  kind = 'primary',
  onClick,
}: Props) => {
  const styles: any = kind;

  const getAppearanceClass = (appearanceProp: typeof appearance) => {
    if (appearanceProp === 'flat') {
      return styles.appearanceFlat;
    }
    return styles.appearanceTactile;
  };

  const classNames: string[] = [styles.base];

  classNames.push(getAppearanceClass(appearance));

  return (
    <button className={classNames.join(' ')} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
