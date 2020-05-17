import React, { useState } from 'react';

export interface RadioContext {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedValue: string;
  groupRef?: React.Ref<HTMLInputElement>;
  name: string;
}

export interface Props {
  children: React.ReactNode;
  defaultValue: RadioContext['selectedValue'];
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

  return (
    <radioContext.Provider value={{ selectedValue, onChange: onRadioItemChange, name, groupRef }}>
      <div className={className}>{children}</div>
    </radioContext.Provider>
  );
};

export default RadioGroup;
