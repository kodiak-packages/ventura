import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './TextArea.module.css';

interface Props {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  spellCheck?: boolean;
  autoComplete?: boolean;
  maxLength?: number;
  className?: string;
  isInvalid?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      name,
      value,
      onChange,
      onBlur,
      placeholder,
      isInvalid = false,
      spellCheck = false,
      autoComplete = false,
      maxLength,
      className,
    }: Props,
    ref,
  ) => {
    const textareaClassNames = classNames(
      cssReset.ventura,
      styles.textarea,
      {
        [styles.containsError]: Boolean(isInvalid),
      },
      className,
    );

    return (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        spellCheck={spellCheck}
        autoComplete={autoComplete ? 'on' : 'off'}
        maxLength={maxLength}
        ref={ref}
        className={textareaClassNames}
        data-testid={name && `textarea-${name}`}
        onBlur={onBlur}
      />
    );
  },
);

export default TextArea;
