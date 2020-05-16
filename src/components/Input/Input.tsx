import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Input.module.css';

interface Props {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  errorMessage?: string;
  spellCheck?: boolean;
  autoComplete?: boolean;
  maxLength?: number;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      onChange,
      placeholder,
      type = 'text',
      errorMessage,
      spellCheck = false,
      autoComplete = false,
      maxLength,
      className,
    }: Props,
    ref,
  ) => {
    const mergedContainerClassName = classNames(cssReset.ventura, styles.container, className);
    const mergedInputClassName = classNames(styles.input, {
      [styles.containsError]: Boolean(errorMessage),
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
        />
        {Boolean(errorMessage) && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  },
);

export default Input;
