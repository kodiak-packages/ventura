import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Input.module.css';

interface Props {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  errorMessage?: string;
  spellCheck?: boolean;
  autoComplete?: boolean;
  maxLength?: number;
  className?: string;
  isInvalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      onChange,
      onBlur,
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
    const mergedContainerClassName = classNames(cssReset.ventura, styles.container, className);
    const mergedInputClassName = classNames(styles.input, {
      [styles.containsError]: Boolean(isInvalid),
    });
    return (
      <div className={mergedContainerClassName} data-testid="container">
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          spellCheck={spellCheck}
          autoComplete={autoComplete ? 'on' : 'off'}
          maxLength={maxLength}
          ref={ref}
          className={mergedInputClassName}
          data-testid={`input-${name}`}
          onBlur={onBlur}
        />
      </div>
    );
  },
);

export default Input;
