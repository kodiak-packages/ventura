import React from 'react';

import { CellContext, cellContext } from '../TableCell/TableCell';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableHeader: React.FC<Props> = ({ className, children }: Props) => {
  const cellContextValues: CellContext = { location: 'header' };

  return (
    <thead className={className}>
      <cellContext.Provider value={cellContextValues}>
        <tr>{children}</tr>
      </cellContext.Provider>
    </thead>
  );
};

export default TableHeader;
