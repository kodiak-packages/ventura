import React, { useContext } from 'react';
import classNames from 'classnames';

import styles from './TableCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  colSpan?: number;
  align?: 'center' | 'left' | 'right';
};

export interface CellContext {
  location: 'body' | 'header';
}

export const CellContext = React.createContext<CellContext>({ location: 'body' });

const TableCell: React.FC<Props> = ({ className, children, colSpan, align = 'left' }: Props) => {
  const cellContextValue = useContext(CellContext);

  const tableCellClassNames = classNames(
    {
      [styles.cellAlignLeft]: align === 'left',
      [styles.cellAlignRight]: align === 'right',
      [styles.cellAlignCenter]: align === 'center',
    },
    styles.cell,
    className,
  );

  const tableHeaderCellClassNames = classNames(
    {
      [styles.cellAlignLeft]: align === 'left',
      [styles.cellAlignRight]: align === 'right',
      [styles.cellAlignCenter]: align === 'center',
    },
    styles.headerCell,
    className,
  );

  if (cellContextValue.location === 'header') {
    return (
      <th colSpan={colSpan} className={tableHeaderCellClassNames}>
        {children}
      </th>
    );
  }
  return (
    <td colSpan={colSpan} className={tableCellClassNames}>
      {children}
    </td>
  );
};

export default TableCell;
