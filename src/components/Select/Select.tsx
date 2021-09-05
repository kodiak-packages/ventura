import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import Select, { OptionTypeBase } from 'react-select';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Input.module.css';

interface Props {
  options: OptionTypeBase[];
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  className?: string;
}

const Input = React.forwardRef<Select, Props>(
  ({ options, value, defaultValue, onChange, onBlur, className }: Props, ref) => {
    const selectClassNames = classNames(cssReset.ventura, styles.input, className);

    const test = (t: any, actions: any) => {
      console.log(t, actions);
    };

    return (
      <Select
        ref={ref}
        option={options}
        inputValue={value}
        defaultInputValue={defaultValue}
        className={selectClassNames}
        onChange={test}
      />
    );
  },
);

export default Input;
