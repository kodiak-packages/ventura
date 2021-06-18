import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Input.module.css';

interface Props {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  spellCheck?: boolean;
  autoComplete?: boolean;
  maxLength?: number;
  className?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  stepSize?: number | 'any';
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      defaultValue,
      onChange,
      onBlur,
      placeholder,
      type = 'text',
      isInvalid = false,
      spellCheck = false,
      autoComplete = false,
      isDisabled = false,
      maxLength,
      className,
      stepSize,
    }: Props,
    ref,
  ) => {
    const inputClassNames = classNames(
      cssReset.ventura,
      styles.input,
      {
        [styles.containsError]: isInvalid,
      },
      className,
    );

    return (
      <input
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        spellCheck={spellCheck}
        autoComplete={autoComplete ? 'on' : 'off'}
        maxLength={maxLength}
        ref={ref}
        className={inputClassNames}
        data-testid={name && `input-${name}`}
        onBlur={onBlur}
        disabled={isDisabled}
        step={stepSize}
      />
    );
  },
);

export default Input;
