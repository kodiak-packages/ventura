import React from 'react';

import { CellContext, cellContext } from '../TableCell/TableCell';

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
      <cellContext.Provider value={cellContextValues}>{children}</cellContext.Provider>
    </tbody>
  );
};

export default TableBody;
