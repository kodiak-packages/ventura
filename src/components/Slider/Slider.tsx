import React from 'react';
import { Handles, Rail, Slider as CompoundSlider, Ticks } from 'react-compound-slider';
import classnames from 'classnames';

import { Handle } from './Handle/Handle';
import { SliderRail } from './SliderRail/SliderRail';
import { Tick } from './Tick/Tick';

import cssReset from '../../css-reset.module.css';
import styles from './Slider.module.css';

type Props = {
  value: number;
  onChange: (value: number) => void;
  valueBoundaries: [number, number];
  textBoundaries?: [string, string];
  stepSize?: number;
  numberOfDecimals?: number;
  isDisabled?: boolean;
  showTooltip?: boolean;
  className?: string;
};

const Slider: React.FC<Props> = ({
  value,
  onChange,
  valueBoundaries,
  textBoundaries,
  stepSize,
  numberOfDecimals = 0,
  isDisabled = false,
  showTooltip = true,
  className,
}: Props) => {
  const formatValue = (val: number) =>
    (Math.round(val * (10 ** numberOfDecimals || 1)) / (10 ** numberOfDecimals || 1)).toFixed(
      numberOfDecimals,
    );
  const minValue = valueBoundaries[0];
  const maxValue = valueBoundaries[1];
  const classNames = classnames(
    cssReset.ventura,
    styles.sliderWrapper,
    {
      [styles.disabled]: isDisabled,
    },
    className,
  );

  return (
    <div className={classNames}>
      <CompoundSlider
        step={stepSize ?? (maxValue - minValue) / 100}
        domain={valueBoundaries}
        className={styles.slider}
        onChange={(values) => onChange(values[0])}
        values={[value]}
        disabled={isDisabled}
      >
        <Rail>{({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}</Rail>
        <Handles>
          {({ handles, activeHandleID, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={valueBoundaries}
                  isActive={handle.id === activeHandleID}
                  formatValue={formatValue}
                  getHandleProps={getHandleProps}
                  isDisabled={isDisabled}
                  showTooltip={showTooltip}
                />
              ))}
            </div>
          )}
        </Handles>
        <Ticks count={2} values={valueBoundaries}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick, index) => (
                <Tick
                  key={tick.id}
                  tick={tick}
                  formatValue={formatValue}
                  textValue={textBoundaries?.[index]}
                />
              ))}
            </div>
          )}
        </Ticks>
      </CompoundSlider>
    </div>
  );
};

export default Slider;
