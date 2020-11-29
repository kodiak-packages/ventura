import React, { ReactNode } from 'react';
import { SliderItem } from 'react-compound-slider';
import classnames from 'classnames';

import styles from './Tick.module.css';

type Props = {
  tick: SliderItem;
  formatValue?: (value: number) => ReactNode;
  textValue?: string;
};

export const Tick: React.FC<Props> = ({
  tick,
  formatValue = (n) => String(n),
  textValue,
}: Props) => {
  const classNames = classnames(styles.tick, { [styles.alignRight]: tick.percent > 50 });

  return (
    <div
      style={{
        left: `${tick.percent}%`,
      }}
      className={classNames}
    >
      {Boolean(textValue) && <span className={styles.text}>{textValue}</span>}
      <span className={styles.value}>{formatValue(tick.value)}</span>
    </div>
  );
};
