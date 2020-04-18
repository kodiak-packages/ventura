import React from 'react';

interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }: Props) => <button type="button">{label}</button>;

export default Button;
