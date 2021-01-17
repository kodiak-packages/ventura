import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { Placement } from '@popperjs/core';
import classnames from 'classnames';

import styles from './Tooltip.module.css';

interface Props {
  content?: React.ReactNode;
  children?: React.ReactNode;
  placement?: Placement;
  className?: string;
}

const Popover: React.FC<Props> = ({ content, children, placement = 'top', className }: Props) => {
  const [isShown, setIsShown] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);
  const contentClassNames = classnames(styles.content, className);

  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  const { styles: popperStyles, attributes } = usePopper(divRef.current, contentRef.current, {
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
      <div className={styles.triggerContainer} ref={divRef} onMouseEnter={show} onMouseLeave={hide}>
        {children}
      </div>

      <CSSTransition
        unmountOnExit
        mountOnEnter
        timeout={240}
        in={isShown}
        classNames={{ enter: styles.enter, exit: styles.exit }}
      >
        <div
          ref={contentRef}
          style={popperStyles.popper}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...attributes.popper}
          className={contentClassNames}
        >
          <div ref={setArrowRef} style={popperStyles.arrow} className="arrow" />
          {content}
        </div>
      </CSSTransition>
    </>
  );
};

export default Popover;
