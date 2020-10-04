import React from 'react';
import classNames from 'classnames';

import cssReset from '../../../css-reset.module.css';
import styles from './MenuItem.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const MenuItem: React.FC<Props> = ({ className, children }: Props) => {
  const menuClassNames = classNames(cssReset.ventura, styles.table, className);

  return <div className={menuClassNames}>{children}</div>;
};

export default MenuItem;
