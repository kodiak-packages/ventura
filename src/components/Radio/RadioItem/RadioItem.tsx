import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { radioContext } from '../RadioGroup/RadioGroup';

import cssReset from '../../../css-reset.module.css';
import styles from './RadioItem.module.css';

export interface Props {
  value: string;
  label: ReactNode;
  description?: string;
  className?: string;
  isDisabled?: boolean;
}

const RadioItem = React.forwardRef<HTMLInputElement, Props>(
  ({ value, label, description, className, isDisabled = false }: Props, ref) => {
    const groupContext = useContext(radioContext);

    if (groupContext === null) {
      // eslint-disable-next-line no-console
      console.warn(
        `The ${value} Radio.Item component needs to wrapped in a Radio.Group component.`,
      );
      return null;
    }

    const isChecked = value === groupContext.selectedValue;

    const labelClassNames = classNames(
      cssReset.ventura,
      styles.radioButtonContainer,
      {
        [styles.radioButtonContainerChecked]: isChecked,
        [styles.radioButtonContainerDisabled]: isDisabled,
      },
      className,
    );

    return (
      <>
        <input
          id={`${groupContext.name}-${value}`}
          type="radio"
          name={groupContext.name}
          value={value}
          ref={ref || groupContext.groupRef}
          onChange={isDisabled ? undefined : groupContext.onChange}
          checked={isChecked}
          disabled={isDisabled}
          data-testid={`radio-${groupContext.name}-${value}`}
          className={styles.radioInput}
        />
        <label
          className={labelClassNames}
          htmlFor={`${groupContext.name}-${value}`}
          data-testid={`${groupContext.name}-${value}-container`}
        >
          <div className={styles.header}>
            <div className={styles.checkBox}>
              <div className={styles.checkBoxFilling} />
            </div>
            <span className={styles.title}>{label}</span>
          </div>
          {description && <p className={styles.description}>{description}</p>}
        </label>
      </>
    );
  },
);

export default RadioItem;
