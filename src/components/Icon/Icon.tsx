import React from 'react';

export interface IconProps {
  color?: string;
  size?: string | number;
}

const Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }: IconProps) => {
  return (
    <>
      {size}
      {color}
    </>
  );
};

export default Icon;