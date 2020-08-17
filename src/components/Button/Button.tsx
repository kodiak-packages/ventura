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
  htmlType?: 'button' | 'submit';
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  name?: string;
  size?: 'normal' | 'small';
}

const Button: React.FC<Props> = ({
  children,
  type = 'primary',
  onClick,
  className,
  isDisabled,
  isLoading,
  htmlType = 'button',
  prefixIcon,
  suffixIcon,
  name,
  size = 'normal',
}: Props) => {
  const buttonClassNames = classNames(
    cssReset.ventura,
    styles.button,
    {
      [styles.typePrimary]: type === 'primary',
      [styles.typeSecondary]: type === 'secondary',
      [styles.smallButton]: size === 'small',
    },
    className,
  );

  const labelClassNames = classNames({
    [styles.labelWithPrefixIcon]: Boolean(prefixIcon) || isLoading,
    [styles.labelWithSuffixIcon]: Boolean(suffixIcon),
    [styles.smallLabel]: size === 'small',
  });

  return (
    <button
      disabled={isDisabled || isLoading}
      className={buttonClassNames}
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      onClick={isLoading || suffixIcon ? undefined : onClick}
      name={name}
      data-testid={`button-${name}`}
    >
      {isLoading ? <Spinner className={styles.spinner} /> : prefixIcon}
      <span className={labelClassNames}>{children}</span>
      {isLoading || suffixIcon}
    </button>
  );
};

export default Button;
