import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

import styles from './TableRow.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
  name?: string;
};

const TableRow: React.FC<Props> = ({ className, children, onClick, name }: Props) => {
  const tableClassNames = classNames(
    styles.row,
    { [styles.hoverable]: Boolean(onClick) },
    className,
  );

  return (
    <tr onClick={onClick} className={tableClassNames} data-testid={name && `row-${name}`}>
      {children}
    </tr>
  );
};

export default TableRow;
