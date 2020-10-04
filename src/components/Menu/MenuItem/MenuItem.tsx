import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

import cssReset from '../../../css-reset.module.css';
import styles from './MenuItem.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  prefixIcon?: React.ReactElement;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const MenuItem: React.FC<Props> = ({ className, children, isDisabled = false, onClick }: Props) => {
  const menuItemClassNames = classNames(cssReset.ventura, styles.table, className);

  return (
    <button
      disabled={isDisabled}
      className={menuItemClassNames}
      type="button"
      onClick={isLoading || suffixIcon ? undefined : onClick}
      name={name}
      data-testid={name && `button-${name}`}
      ref={ref}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : prefixIcon}
      <span className={labelClassNames}>{children}</span>
      {isLoading || suffixIcon}
    </button>
  );
};

export default MenuItem;
