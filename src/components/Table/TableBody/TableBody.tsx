import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableBody: React.FC<Props> = ({ className, children }: Props) => {
  return <tbody className={className}>{children}</tbody>;
};

export default TableBody;
