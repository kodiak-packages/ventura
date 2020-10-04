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
  name?: string;
};

const MenuItem = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, children, isDisabled = false, onClick, name, prefixIcon }: Props, ref) => {
    const menuItemClassNames = classNames(cssReset.ventura, styles.menuItem, className);

    const labelClassNames = classNames(styles.label, {
      [styles.labelWithPrefixIcon]: Boolean(prefixIcon),
    });

    return (
      <button
        disabled={isDisabled}
        className={menuItemClassNames}
        type="button"
        onClick={isDisabled ? undefined : onClick}
        name={name}
        data-testid={name && `menu-item-${name}`}
        ref={ref}
      >
        {prefixIcon}
        <span className={labelClassNames}>{children}</span>
      </button>
    );
  },
);

export default MenuItem;
