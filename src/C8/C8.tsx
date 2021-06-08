import React from 'react';
import styles from './C8.module.css';

type C8Props = {
  signal?: boolean;
};

/**
 * Simulates "No reconciliation needed".
 *  - SCU: true
 *  - vDOMq: true
 */
export default function C8({ signal }: C8Props) {
  return (
    <article className={styles.box}>
      {signal ? <h2>C8</h2> : <h2>C8</h2>}
    </article>
  );
}
