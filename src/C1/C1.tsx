import React from 'react';
import C2 from '../C2';
import C3 from '../C3';
import styles from './C1.module.css';

type C1Props = {
  title?: string;
  signal?: boolean;
  updateSignal?: () => void;
};

/**
 * Simulates "Reconciliation needed".
 *  - SCU: true
 *  - vDOMq: false
 */
export default function C1({ title = 'C1', signal, updateSignal }: C1Props) {
  return (
    <article className={styles.box}>
      <h2 className={styles.header}>{title}</h2>
      <button onClick={updateSignal}>Click to see Reconciliation</button>
      <section className={styles.container}>
        <C2 />
        <C3 signal={signal} />
      </section>
    </article>
  );
}
