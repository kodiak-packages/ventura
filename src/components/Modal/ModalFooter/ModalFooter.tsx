import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './ModalFooter.module.css';

type Props = {
  className?: string;
  children?: ReactNode;
};

const ModalFooter: React.FC<Props> = ({ className, children }: Props) => {
  const mergedClassNames = classNames(styles.container, className);
  return <div className={mergedClassNames}>{children}</div>;
};

export default ModalFooter;
