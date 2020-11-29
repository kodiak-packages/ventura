import React from 'react';
import { GetRailProps } from 'react-compound-slider';

import styles from './SliderRail.module.css';

type Props = {
  getRailProps: GetRailProps;
};

export const SliderRail: React.FC<Props> = ({ getRailProps }: Props) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <div className={styles.container} {...getRailProps()} />
    <div className={styles.rail} />
  </>
);
