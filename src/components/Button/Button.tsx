import React, { SFC } from 'react';

export interface Props {
  children: React.ReactChild;
}

export const Button: SFC<Props> = ({ children }: Props) => (
  <button type="button">{children}</button>
);
