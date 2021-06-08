import React from 'react';
import styles from './C3.module.css';
import C6 from '../C6';
import C7 from '../C7';
import C8 from '../C8';

type C3Props = {
  signal?: boolean;
};

/**
 * Simulates "Reconciliation needed".
 *  - SCU: true
 *  - vDOMq: false
 */
export default function C3({ signal = false }: C3Props) {
  return (
    <article className={styles.box}>
      {signal ? (
        <h2>
          C3 <span className={styles.span}>changed</span>
        </h2>
      ) : (
        <h2>C3</h2>
      )}
      <section>
        <C6 signal={signal} />
        <C7 />
        <C8 signal={signal} />
      </section>
    </article>
  );
}
