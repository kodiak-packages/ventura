import React from 'react';
import classNames from 'classnames';

import Body from './TableBody/TableBody';
import Cell from './TableCell/TableCell';
import Header from './TableHeader/TableHeader';
import HeaderCell from './TableHeaderCell/TableHeaderCell';
import Row from './TableRow/TableRow';

import cssReset from '../../css-reset.module.css';
import styles from './Table.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Table: React.FC<Props> & {
  Header: typeof Header;
  HeaderCell: typeof HeaderCell;
  Body: typeof Body;
  Row: typeof Row;
  Cell: typeof HeaderCell;
} = ({ className, children }: Props) => {
  const tableClassNames = classNames(cssReset.ventura, styles.table, className);

  return <table className={tableClassNames}>{children}</table>;
};

Table.Header = Header;
Table.HeaderCell = HeaderCell;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
