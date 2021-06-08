import { useEffect } from 'react';

export function useHighlight(
  signal: boolean = false,
  updateSignal?: () => void,
) {
  useEffect(() => {
    const highlight = setTimeout(() => {
      if (signal && updateSignal !== undefined) {
        updateSignal();
      }
    }, 750);
    return () => {
      clearTimeout(highlight);
    };
  }, [signal, updateSignal]);
}
