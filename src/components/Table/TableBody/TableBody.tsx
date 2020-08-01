import React from 'react';

import { CellContext, CellContext } from '../TableCell/TableCell';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableBody: React.FC<Props> = ({ className, children }: Props) => {
  const cellContextValues: CellContext = {
    location: 'body',
  };

  return (
    <tbody className={className}>
      <CellContext.Provider value={cellContextValues}>{children}</CellContext.Provider>
    </tbody>
  );
};

export default TableBody;
