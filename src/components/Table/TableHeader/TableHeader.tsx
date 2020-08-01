import React from 'react';

import { CellContext, CellContext } from '../TableCell/TableCell';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableHeader: React.FC<Props> = ({ className, children }: Props) => {
  const cellContextValues: CellContext = { location: 'header' };

  return (
    <thead className={className}>
      <CellContext.Provider value={cellContextValues}>
        <tr>{children}</tr>
      </CellContext.Provider>
    </thead>
  );
};

export default TableHeader;
