import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import Alert from '../../Alert/Alert';

import styles from './Toast.module.css';

interface Props {
  duration: number;
  onRemove: () => void;
  isShown: boolean;
  intent?: 'success' | 'error';
  message: string;
  hasCloseButton?: boolean;
}

const Toast: React.FC<Props> = memo(
  ({
    duration,
    onRemove,
    isShown: isShownProp,
    // Template props
    intent = 'success',
    message,
    hasCloseButton = false,
  }: Props) => {
    const [isShown, setIsShown] = useState(true);
    const [height, setHeight] = useState(0);
    const closeTimer = useRef<number | null>(null);

    const clearCloseTimer = useCallback(() => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    }, [closeTimer]);

    const close = useCallback(() => {
      clearCloseTimer();
      setIsShown(false);
    }, [clearCloseTimer, setIsShown]);

    const startCloseTimer = useCallback(() => {
      if (duration) {
        clearCloseTimer();
        closeTimer.current = window.setTimeout(() => {
          close();
        }, duration * 1000);
      }
    }, [duration, clearCloseTimer, closeTimer, close]);

    useEffect(() => {
      startCloseTimer();

      return () => {
        clearCloseTimer();
      };
    }, []);

    useEffect(() => {
      if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
        setIsShown(isShownProp);
      }
    }, [isShown, isShownProp]);

    const handleMouseEnter = useCallback(() => clearCloseTimer(), [clearCloseTimer]);
    const handleMouseLeave = useCallback(() => startCloseTimer(), [startCloseTimer]);

    const onRef = useCallback(
      (ref) => {
        if (ref === null) return;

        const test = ref.getBoundingClientRect();

        const { height: rectHeight } = ref.getBoundingClientRect();
        setHeight(rectHeight);
      },
      [setHeight],
    );

    const dynamicStyles = useMemo(
      () => ({
        height,
        marginBottom: isShown ? 0 : -height,
      }),
      [isShown, height],
    );

    return (
      <Transition appear unmountOnExit timeout={240} in={isShown} onExited={onRemove}>
        {(state) => (
          <div
            data-state={state}
            className={styles.toastContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={dynamicStyles}
          >
            <div ref={onRef} className={styles.toastPadding}>
              <Alert
                intent="error"
                message={message}
                // isRemoveable={hasCloseButton}
                // onRemove={close}
              />
            </div>
          </div>
        )}
      </Transition>
    );
  },
);

export default Toast;
