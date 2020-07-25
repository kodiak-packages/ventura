import React from 'react';
import classNames from 'classnames';

import styles from './TableHeaderCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableHeaderCell: React.FC<Props> = ({ className, children }: Props) => {
  const tableHeaderCellClassNames = classNames(styles.headerCell, className);

  return <th className={tableHeaderCellClassNames}> {children} </th>;
};

export default TableHeaderCell;
