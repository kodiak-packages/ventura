import React, { ComponentProps, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import Alert, { AlertIntent } from '../../Alert/Alert';

import styles from './Toast.module.css';

interface Props extends Pick<ComponentProps<typeof Alert>, 'intent' | 'onClose' | 'message'> {
  durationInSeconds: number;
  isShown: boolean;
  intent: AlertIntent;
  isClosable: boolean;
}

const Toast: React.FC<Props> = ({
  durationInSeconds,
  onClose,
  isShown: isShownProp,
  intent,
  message,
  isClosable,
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
  }, [clearCloseTimer]);

  const startCloseTimer = useCallback(() => {
    if (durationInSeconds) {
      clearCloseTimer();
      closeTimer.current = window.setTimeout(() => {
        close();
      }, durationInSeconds * 1000);
    }
  }, [durationInSeconds, clearCloseTimer, closeTimer, close]);

  useEffect(() => {
    startCloseTimer();

    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer, startCloseTimer]);

  useEffect(() => {
    if (isShownProp !== isShown && typeof isShownProp === 'boolean') {
      setIsShown(isShownProp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShownProp]);

  const handleMouseEnter = useCallback(() => clearCloseTimer(), [clearCloseTimer]);
  const handleMouseLeave = useCallback(() => startCloseTimer(), [startCloseTimer]);

  const onRef = useCallback(
    (ref) => {
      if (ref === null) return;

      const { height: toastHeight } = ref.getBoundingClientRect();
      setHeight(toastHeight);
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
    <Transition appear unmountOnExit timeout={240} in={isShown} onExited={onClose}>
      {(state) => (
          <div
            data-state={state}
            className={styles.toastContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={dynamicStyles}
          >
            <div ref={onRef} className={styles.toastPadding}>
              <Alert intent={intent} message={message} onClose={isClosable ? close : undefined} />
            </div>
          </div>
        )}
    </Transition>
  );
};

export default Toast;
