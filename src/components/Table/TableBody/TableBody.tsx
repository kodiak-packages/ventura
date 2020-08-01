import React from 'react';

import { CellContext, CellContextValue } from '../TableCell/TableCell';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableBody: React.FC<Props> = ({ className, children }: Props) => {
  const cellContextValues: CellContextValue = {
    location: 'body',
  };

  return (
    <tbody className={className}>
      <CellContext.Provider value={cellContextValues}>{children}</CellContext.Provider>
    </tbody>
  );
};

export default TableBody;
