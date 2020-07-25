import React from 'react';
import classNames from 'classnames';

import styles from './TableCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
};

const TableCell: React.FC<Props> = ({ className, children, colSpan }: Props) => {
  const tableClassNames = classNames(styles.cell, styles.row, className);

  return (
    <td colSpan={colSpan} className={tableClassNames}>
      {children}
    </td>
  );
};

export default TableCell;
