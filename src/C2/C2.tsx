import React from 'react';
import C4 from '../C4';
import C5 from '../C5';
import styles from './C2.module.css';

/**
 * Simulates "No reconciliation needed".
 *  - SCU: false
 */
export default function C2() {
  return (
    <article className={styles.box}>
      <h2>C2</h2>
      <section>
        <C4 />
        <C5 />
      </section>
    </article>
  );
}
