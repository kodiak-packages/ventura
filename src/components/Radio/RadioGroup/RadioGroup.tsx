import React from 'react';
import classNames from 'classnames';

import cssReset from '../../../css-reset.module.css';
import styles from './RadioGroup.module.css';

export interface RadioContextValue {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue?: string;
  groupRef?: React.Ref<HTMLInputElement>;
  name: string;
}

export interface Props {
  children: React.ReactNode;
  value?: RadioContextValue['selectedValue'];
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  groupRef?: React.Ref<HTMLInputElement>;
  className?: string;
}

export const RadioContext = React.createContext<RadioContextValue | null>(null);

const RadioGroup: React.FC<Props> = ({
  children,
  value,
  onChange,
  name,
  groupRef,
  className,
}: Props) => {
  const onRadioItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const mergedClassNames = classNames(cssReset.ventura, styles.group, className);

  const radioContextValues = { selectedValue: value, onChange: onRadioItemChange, name, groupRef };

  return (
    <RadioContext.Provider value={radioContextValues}>
      <div className={mergedClassNames}>{children}</div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
