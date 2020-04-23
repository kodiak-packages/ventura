import React from 'react';

export interface Props {
  children: string;
  href: string | undefined;
}

const Anchor: React.FC<Props> = ({ children, href }: Props) => {
  return <a href={href}>{children}</a>;
};

export default Anchor;