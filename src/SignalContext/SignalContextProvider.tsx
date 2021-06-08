import React, { useState, PropsWithChildren } from 'react';
import { SignalContext } from './SignalContext';

type SignalContextProviderProps = PropsWithChildren<{}>;

export function SignalContextProvider({
  children,
}: SignalContextProviderProps) {
  const [state, setState] = useState({ signal: false });
  const value = {
    state,
    updateSignal() {
      setState({ signal: !state.signal });
    },
  };
  return (
    <SignalContext.Provider value={value}>{children}</SignalContext.Provider>
  );
}
