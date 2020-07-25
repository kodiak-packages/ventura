import React from 'react';
import classNames from 'classnames';

import styles from './TableCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
  align?: 'center' | 'left' | 'right';
};

const TableCell: React.FC<Props> = ({ className, children, colSpan, align = 'left' }: Props) => {
  const tableCellClassNames = classNames(
    {
      [styles.cellAlignLeft]: align === 'left',
      [styles.cellAlignRight]: align === 'right',
      [styles.cellAlignCenter]: align === 'center',
    },
    styles.cell,
    styles.row,
    className,
  );

  return (
    <td colSpan={colSpan} className={tableCellClassNames}>
      {children}
    </td>
  );
};

export default TableCell;
