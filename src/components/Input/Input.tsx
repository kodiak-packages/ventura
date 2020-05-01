import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';

import styles from './Input.module.css';

type Props = {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  isInvalid?: boolean;
  spellCheck?: boolean;
  autoComplete?: boolean;
  maxLength?: number;
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      type = 'text',
      isInvalid = false,
      spellCheck = false,
      autoComplete = false,
      maxLength,
      className,
    }: Props,
    ref,
  ) => {
    const mergedClassName = classNames(styles.input, { [styles.isInvalid]: isInvalid }, className);
    return (
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        spellCheck={spellCheck}
        autoComplete={autoComplete ? 'on' : 'off'}
        maxLength={maxLength}
        className={mergedClassName}
        ref={ref}
        data-testid={`input-${name}`}
      />
    );
  },
);

export default Input;
