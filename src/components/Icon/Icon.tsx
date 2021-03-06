import React, { CSSProperties } from 'react';

interface Props {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

const Icon: React.FC<Props> = ({ className, style, color = 'currentColor' }: Props) => {
  return (
    <>
      {color}
      {style}
      {className}
    </>
  );
};

export default Icon;
