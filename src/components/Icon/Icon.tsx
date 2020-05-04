import React from 'react';

export interface IconProps {
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ className, color = 'currentColor' }: IconProps) => {
  return (
    <>
      {color}
      {className}
    </>
  );
};

export default Icon;
