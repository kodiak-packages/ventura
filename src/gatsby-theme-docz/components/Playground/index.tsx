import React, { ComponentProps } from 'react';
import { Playground as OriginalPlayground } from 'gatsby-theme-docz/src/components/Playground/index';

import Ventura from '../Ventura/Ventura';

/* eslint-disable react/jsx-props-no-spreading */
export const Playground = ({
  children,
  ...otherProps
}: ComponentProps<typeof OriginalPlayground>) => (
  <Ventura>
    <OriginalPlayground {...otherProps}>{children}</OriginalPlayground>
  </Ventura>
);
