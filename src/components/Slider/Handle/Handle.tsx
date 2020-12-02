/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactNode } from 'react';
import { GetHandleProps, SliderItem } from 'react-compound-slider';
import cn from 'classnames';

import styles from './Handle.module.css';

type Props = {
  domain: number[];
  handle: SliderItem;
  isActive: boolean;
  getHandleProps: GetHandleProps;
  isDisabled?: boolean;
  showTooltip: boolean;
  formatValue?: (value: number) => ReactNode;
};

export const Handle: React.FC<Props> = ({
  domain: [min, max],
  handle: { id, value, percent },
  isActive = false,
  isDisabled = false,
  showTooltip = true,
  formatValue = (n) => String(n),
  getHandleProps,
}: Props) => {
  const classNames = cn(styles.container, {
    [styles.dragging]: isActive,
    [styles.disabled]: isDisabled,
  });

  return (
    <>
      <div
        className={classNames}
        style={{
          left: `${percent}%`,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getHandleProps(id)}
      >
        {showTooltip && isActive && <div className={styles.tooltip}>{formatValue(value)}</div>}
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          style={{
            left: `${percent}%`,
          }}
          className={styles.handle}
        />
      </div>
    </>
  );
};
