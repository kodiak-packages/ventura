/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import Button from '../Button/Button';

import styles from './DropdownMenu.module.css';

interface Props {}

const DropdownMenu: React.FC<Props> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { styles: popperStyles, attributes } = usePopper(buttonRef.current, menuRef.current, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrowRef,
        },
      },
    ],
    placement: 'bottom-start',
  });

  return (
    <>
      <Button ref={buttonRef} onClick={() => setIsMenuVisible(!isMenuVisible)}>
        Dropdown
      </Button>

      {isMenuVisible && (
        <div
          ref={menuRef}
          style={popperStyles.popper}
          {...attributes.popper}
          className={styles.menu}
        >
          <div ref={setArrowRef} style={popperStyles.arrow} className="arrow" />
          <p>A ridiculously long sentence for a popper.</p>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
