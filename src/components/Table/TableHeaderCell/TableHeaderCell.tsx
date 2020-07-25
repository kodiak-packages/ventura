import React from 'react';
import classNames from 'classnames';

import styles from './TableHeaderCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
};

const TableHeaderCell: React.FC<Props> = ({ className, children, colSpan }: Props) => {
  const tableHeaderCellClassNames = classNames(styles.headerCell, className);

  return (
    <th colSpan={colSpan} className={tableHeaderCellClassNames}>
      {children}
    </th>
  );
};

export default TableHeaderCell;
