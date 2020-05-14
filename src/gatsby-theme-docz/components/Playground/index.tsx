import React, { ComponentProps } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Playground as OriginalPlayground } from 'gatsby-theme-docz/src/components/Playground/index';

// This path is accessible because of the configuration in gatsby-node.js
import Ventura from '../../../components/Ventura/Ventura';

/* eslint-disable react/jsx-props-no-spreading */
export const Playground = ({
  children,
  ...otherProps
}: ComponentProps<typeof OriginalPlayground>) => (
  <Ventura>
    <OriginalPlayground {...otherProps}>{children}</OriginalPlayground>
  </Ventura>
);
