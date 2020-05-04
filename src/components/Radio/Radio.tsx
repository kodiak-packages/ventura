import React from 'react';

export interface Props {
  data?: string;
  size?: string | number;
}

const Radio: React.FC<Props> = ({ size = 24, color = 'currentColor' }: Props) => {
  return (
    <>
      {size}
      {color}
    </>
  );
};

export default Radio;
