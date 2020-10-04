import React, { useEffect } from 'react';

export const useOutsideClick = (callback: Function, elementRef: React.RefObject<any>) => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [elementRef, callback]);
};
