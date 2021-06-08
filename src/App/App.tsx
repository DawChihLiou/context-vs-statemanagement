import React, { useState, useContext } from 'react';
import C1 from '../C1';
import styles from './App.module.css';
import { SignalContextProvider, SignalContext } from '../SignalContext';

function C1WithContext() {
  const context = useContext(SignalContext);
  return (
    <C1
      signal={context.state.signal}
      updateSignal={context.updateSignal}
      title="C1 with Context"
    />
  );
}
function C1WithState() {
  const [signal, setSignal] = useState(false);
  const updateSignal = () => {
    setSignal(!signal);
  };
  return <C1 signal={signal} updateSignal={updateSignal} />;
}

function App() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        {/* component tree without context */}
        <C1WithState />

        <SignalContextProvider>
          {/* component tree with context */}
          <C1WithContext />
        </SignalContextProvider>
      </section>
    </main>
  );
}

export default App;
