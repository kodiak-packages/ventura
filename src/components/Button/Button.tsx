import React, { FocusEventHandler, MouseEventHandler } from 'react';
import classNames from 'classnames';

import Spinner from '../utils/Spinner/Spinner';

import cssReset from '../../css-reset.module.css';
import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  htmlType?: 'button' | 'submit';
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  name?: string;
  size?: 'normal' | 'small' | 'large';
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      type = 'primary',
      onClick,
      onFocus,
      onBlur,
      className,
      isDisabled,
      isLoading,
      htmlType = 'button',
      prefixIcon,
      suffixIcon,
      name,
      size = 'normal',
    }: Props,
    ref,
  ) => {
    const buttonClassNames = classNames(
      cssReset.ventura,
      styles.button,
      {
        [styles.typePrimary]: type === 'primary',
        [styles.typeSecondary]: type === 'secondary',
        [styles.smallButton]: size === 'small',
        [styles.largeButton]: size === 'large',
      },
      className,
    );

    const labelClassNames = classNames(styles.label, {
      [styles.labelWithPrefixIcon]: Boolean(prefixIcon) || isLoading,
      [styles.labelWithSuffixIcon]: Boolean(suffixIcon),
    });

    return (
      <button
        disabled={isDisabled || isLoading}
        className={buttonClassNames}
        // eslint-disable-next-line react/button-has-type
        type={htmlType}
        onClick={isLoading || isDisabled ? undefined : onClick}
        onFocus={isLoading || isDisabled ? undefined : onFocus}
        onBlur={onBlur}
        name={name}
        data-testid={name && `button-${name}`}
        ref={ref}
      >
        {isLoading ? <Spinner className={styles.spinner} /> : prefixIcon}
        <span className={labelClassNames}>{children}</span>
        {isLoading || suffixIcon}
      </button>
    );
  },
);

export default Button;
