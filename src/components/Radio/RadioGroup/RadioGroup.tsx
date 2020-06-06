import React, { useState } from 'react';
import classNames from 'classnames';

import cssReset from '../../../css-reset.module.css';
import styles from './RadioGroup.module.css';

export interface RadioContext {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue?: string;
  groupRef?: React.Ref<HTMLInputElement>;
  name: string;
}

export interface Props {
  children: React.ReactNode;
  defaultValue?: RadioContext['selectedValue'];
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  groupRef?: React.Ref<HTMLInputElement>;
  className?: string;
}

export const radioContext = React.createContext<RadioContext | null>(null);

const RadioGroup: React.FC<Props> = ({
  children,
  defaultValue,
  onChange,
  name,
  groupRef,
  className,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const onRadioItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const mergedClassNames = classNames(cssReset.ventura, styles.group, className);

  return (
    <radioContext.Provider value={{ selectedValue, onChange: onRadioItemChange, name, groupRef }}>
      <div className={mergedClassNames}>{children}</div>
    </radioContext.Provider>
  );
};

export default RadioGroup;
