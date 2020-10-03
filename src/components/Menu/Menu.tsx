import React from 'react';
import classNames from 'classnames';

import MenuItem from './MenuItem/MenuItem';

import cssReset from '../../css-reset.module.css';
import styles from './Table.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Menu: React.FC<Props> & {
  Item: typeof MenuItem;
} = ({ className, children }: Props) => {
  const menuClassNames = classNames(cssReset.ventura, styles.table, className);

  return <div className={menuClassNames}>{children}</div>;
};

Menu.Item = MenuItem;

export default Menu;
