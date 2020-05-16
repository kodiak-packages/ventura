import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

import Spinner from '../utils/Spinner/Spinner';

import cssReset from '../../css-reset.module.css';
import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  name?: string;
}

const Button: React.FC<Props> = ({
  children,
  type = 'primary',
  onClick,
  className,
  isDisabled,
  isLoading,
  prefixIcon,
  suffixIcon,
  name,
}: Props) => {
  const buttonClassNames = classNames(
    cssReset.ventura,
    styles.button,
    {
      [styles.typePrimary]: type === 'primary',
      [styles.typeSecondary]: type === 'secondary',
    },
    className,
  );

  const labelClassNames = classNames({
    [styles.labelWithPrefixIcon]: Boolean(prefixIcon) || isLoading,
    [styles.labelWithSuffixIcon]: Boolean(suffixIcon),
  });

  return (
    <button
      disabled={isDisabled || isLoading}
      className={buttonClassNames}
      type="button"
      onClick={isLoading || suffixIcon ? undefined : onClick}
      data-testid={`button-${name}`}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : prefixIcon}
      <span className={labelClassNames}>{children}</span>
      {isLoading || suffixIcon}
    </button>
  );
};

export default Button;
