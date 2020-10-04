/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

import styles from './Popover.module.css';

interface Props {
  content?: React.ReactNode;
  children?: React.ReactNode;
  isVisible?: boolean;
  placement?: Placement;
}

const Popover: React.FC<Props> = ({
  content,
  children,
  isVisible = false,
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
    <>
      <div ref={divRef}>{children}</div>

      {isVisible && (
        <div
          ref={menuRef}
          style={popperStyles.popper}
          {...attributes.popper}
          className={styles.menu}
        >
          <div ref={setArrowRef} style={popperStyles.arrow} className="arrow" />
          {content}
        </div>
      )}
    </>
  );
};

export default Popover;
