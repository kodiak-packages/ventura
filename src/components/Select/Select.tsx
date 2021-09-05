import React from 'react';
import { X } from 'react-feather';
import Select, { components, OptionsType } from 'react-select';
import classNames from 'classnames';

import cssReset from '../../css-reset.module.css';
import styles from './Select.module.css';

interface Option {
  label: React.ReactNode;
  value: string;
}

interface Props {
  options: Option[];
  value?: Option | Option[];
  defaultValue?: Option | Option[];
  onChange?: (value: Option | Option[]) => void;
  className?: string;
  isMulti?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
}

const Input = React.forwardRef<Select<Option>, Props>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      className,
      isMulti = false,
      isDisabled = false,
      placeholder,
    }: Props,
    ref,
  ) => {
    const selectClassNames = classNames(cssReset.ventura, styles.select, className);

    const handleChange = (newValue: Option | OptionsType<Option> | null) => {
      if (onChange) {
        onChange(newValue as Option | Option[]);
      }
    };

    return (
      <Select
        ref={ref}
        options={options}
        value={value}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        className={selectClassNames}
        onChange={handleChange}
        isMulti={isMulti}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          ClearIndicator: () => null,
          MultiValueRemove: (props) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <components.MultiValueRemove {...props}>
              <X />
            </components.MultiValueRemove>
          ),
        }}
        classNamePrefix="ventura-select"
        placeholder={placeholder}
      />
    );
  },
);

export default Input;
