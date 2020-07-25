import React from 'react';
import classNames from 'classnames';

import styles from './TableHeaderCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
  align?: 'center' | 'left' | 'right';
};

const TableHeaderCell: React.FC<Props> = ({
  className,
  children,
  colSpan,
  align = 'left',
}: Props) => {
  const tableHeaderCellClassNames = classNames(
    {
      [styles.cellAlignLeft]: align === 'left',
      [styles.cellAlignRight]: align === 'right',
      [styles.cellAlignCenter]: align === 'center',
    },
    styles.headerCell,
    className,
  );

  return (
    <th colSpan={colSpan} className={tableHeaderCellClassNames}>
      {children}
    </th>
  );
};

export default TableHeaderCell;
