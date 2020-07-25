import React from 'react';
import classNames from 'classnames';

import styles from './TableCell.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableCell: React.FC<Props> = ({ className, children }: Props) => {
  const tableClassNames = classNames(styles.cell, className);

  return <td className={tableClassNames}> {children} </td>;
};

export default TableCell;
