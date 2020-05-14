import React from 'react';
import classNames from 'classnames';

import './css-reset.css';
import './Ventura.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Ventura: React.FC<Props> = ({ children, className }: Props) => {
  const venturaClassNames = classNames('ventura', className);

  return (
    <div className={venturaClassNames} data-testid="ventura">
      {children}
    </div>
  );
};

export default Ventura;
