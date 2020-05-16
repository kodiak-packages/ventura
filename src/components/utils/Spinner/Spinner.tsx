import React from 'react';
import classNames from 'classnames';

import cssReset from '../../../css-reset.module.css';
import styles from './Spinner.module.css';

interface Props {
  className?: string;
}

const Spinner: React.FC<Props> = ({ className }: Props) => {
  const spinnerClassNames = classNames(cssReset.ventura, styles.svg, className);

  return (
    <svg className={spinnerClassNames} x="0px" y="0px" viewBox="0 0 150 150">
      <circle className={styles.circle} cx="75" cy="75" r="60" />
    </svg>
  );
};

export default Spinner;
