import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Checkbox.module.css';

interface Props {
  name: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  className?: string;
  isDisabled?: boolean;
  description?: boolean;
  children: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      defaultValue,
      onChange,
      onBlur,
      isDisabled = false,
      className,
      description,
      children,
    }: Props,
    ref,
  ) => {
    const labelClassNames = classNames(
      cssReset.ventura,
      styles.checkbox,
      {
        [styles.isDisabled]: isDisabled,
      },
      className,
    );

    return (
      <label htmlFor={name} className={labelClassNames}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={value}
          defaultChecked={defaultValue}
          onChange={onChange}
          ref={ref}
          data-testid={name && `checkbox-${name}`}
          onBlur={onBlur}
          disabled={isDisabled}
          className={styles.input}
        />
        <div className={styles.text}>
          <span className={styles.title}>{children}</span>
          {description && <span className={styles.description}>{description}</span>}
        </div>
      </label>
    );
  },
);

export default Input;
