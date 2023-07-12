import React, {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';

import checkIcon from './check.svg';

import cssReset from '../../css-reset.module.css';
import styles from './Checkbox.module.css';

interface Props {
  name: string;
  value?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isDisabled?: boolean;
  description?: string;
  label: ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  (
    { name, value, onChange, onClick, isDisabled = false, className, description, label }: Props,
    ref,
  ) => {
    const [isChecked, setIsChecked] = useState<boolean>(value ?? false);

    useEffect(() => {
      // fix
      setIsChecked(value ?? false);
    }, [value]);

    const labelClassNames = classNames(
      cssReset.ventura,
      styles.container,
      {
        [styles.isDisabled]: isDisabled,
        [styles.isChecked]: isChecked,
      },
      className,
    );

    const click = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Info at https://fb.me/react-event-pooling
      event.persist();

      setIsChecked(event.target.checked);

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <label htmlFor={name} className={labelClassNames} data-testid={`checkbox-label-${name}`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={isChecked}
          onChange={click}
          onClick={
            isDisabled ? undefined : (onClick as MouseEventHandler<HTMLInputElement> | undefined)
          }
          ref={ref}
          data-testid={name && `checkbox-${name}`}
          disabled={isDisabled}
          className={styles.input}
        />
        <div
          className={styles.box}
          style={{ backgroundImage: isChecked ? `url(${checkIcon})` : '' }}
        />
        <span className={styles.title}>{label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </label>
    );
  },
);

export default Checkbox;
