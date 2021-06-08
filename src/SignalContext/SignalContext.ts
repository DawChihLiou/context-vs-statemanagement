import { createContext } from 'react';

export const SignalContext = createContext({
  state: { signal: false },
  updateSignal: () => {},
});
