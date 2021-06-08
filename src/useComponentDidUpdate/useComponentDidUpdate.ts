import { useRef, useEffect } from 'react';

export function useComponentDidUpdate(fn?: () => void) {
  const didMountRef = useRef(false);

  useEffect(() => {
    // evaluate `fn` only when the component updates.
    if (didMountRef.current) {
      if (fn !== undefined) {
        fn();
      }
    } else {
      // flag the ref when the component mounts.
      didMountRef.current = true;
    }
  });
}
