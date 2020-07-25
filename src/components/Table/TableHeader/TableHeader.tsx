import React from 'react';
import classNames from 'classnames';

import styles from './TableHeader.module.css';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableHeader: React.FC<Props> = ({ className, children }: Props) => {
  const tableClassNames = classNames(styles.header, className);

  return (
    <thead className={tableClassNames}>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
