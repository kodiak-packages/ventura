import React, { useContext } from 'react';
import classNames from 'classnames';

import { radioContext } from '../RadioGroup/RadioGroup';

import styles from './RadioItem.module.css';

export interface Props {
  value: string;
  label: string;
  description: string;
  className?: string;
}

const RadioItem = React.forwardRef<HTMLInputElement, Props>(
  ({ value, label, description, className }: Props, ref) => {
    const groupContext = useContext(radioContext);

    if (groupContext === null) {
      // eslint-disable-next-line no-console
      console.error(`The ${label} RadioItem component needs to wrapped in a RadioGroup component.`);
      return null;
    }

    const labelClassNames = classNames(
      styles.radioButtonContainer,
      {
        [styles.radioButtonContainerChecked]: value === groupContext.selectedValue,
      },
      className,
    );

    return (
      <label className={labelClassNames} htmlFor={value}>
        <input
          id={value}
          type="radio"
          name={groupContext.name}
          value={value}
          ref={ref || groupContext.groupRef}
          onChange={groupContext.onChange}
          checked={value === groupContext.selectedValue}
        />
        <div className={styles.header}>
          <div className={styles.checkBox}>
            <div className={styles.checkBoxFilling} />
          </div>
          <span className={styles.title}>{label}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </label>
    );
  },
);

export default RadioItem;
