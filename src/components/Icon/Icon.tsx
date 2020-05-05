import React, { CSSProperties } from 'react';

export interface IconProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

const Icon: React.FC<IconProps> = ({ className, style, color = 'currentColor' }: IconProps) => {
  return (
    <>
      {color}
      {style}
      {className}
    </>
  );
};

export default Icon;
