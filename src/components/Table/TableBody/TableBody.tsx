import React from 'react';
import classNames from 'classnames';

import styles from './TableBody.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableBody: React.FC<Props> = ({ className, children }: Props) => {
  const tableBodyClassNames = classNames(styles.body, className);

  return <tbody className={tableBodyClassNames}>{children}</tbody>;
};

export default TableBody;
