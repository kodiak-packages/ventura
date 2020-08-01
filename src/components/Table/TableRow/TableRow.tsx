import React from 'react';
import classNames from 'classnames';

import styles from './TableRow.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableRow: React.FC<Props> = ({ className, children }: Props) => {
  const tableClassNames = classNames(styles.row, className);

  return <tr className={tableClassNames}>{children}</tr>;
};

export default TableRow;
