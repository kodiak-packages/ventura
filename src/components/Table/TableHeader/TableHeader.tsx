import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const TableHeader: React.FC<Props> = ({ className, children }: Props) => {
  return (
    <thead className={className}>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
