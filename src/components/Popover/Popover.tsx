/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

import styles from './Popover.module.css';

interface Props {
  content?: React.ReactNode;
  children?: React.ReactNode;
  isVisible: boolean;
  onClose: Function;
  placement?: Placement;
}

const Popover: React.FC<Props> = ({
  content,
  children,
  isVisible,
  onClose,
  placement = 'bottom-start',
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

  const { styles: popperStyles, attributes } = usePopper(divRef.current, menuRef.current, {
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
    placement,
  });

  return (
    <OutsideClickHandler onOutsideClick={() => onClose()}>
      <div className={styles.triggerContainer} ref={divRef}>
        {children}
      </div>

      {isVisible && (
        <div
          ref={menuRef}
          style={popperStyles.popper}
          {...attributes.popper}
          className={styles.contentContainer}
        >
          <div ref={setArrowRef} style={popperStyles.arrow} className="arrow" />
          {content}
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default Popover;
