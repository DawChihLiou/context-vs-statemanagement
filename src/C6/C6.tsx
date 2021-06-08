import React from 'react';
import styles from './C6.module.css';

type C6Props = {
  signal?: boolean;
};
/**
 * Simulates "Reconciliation needed".
 *  - SCU: true
 *  - vDOMq: false
 */
export default function C6({ signal = false }: C6Props) {
  return (
    <article className={styles.box}>
      {signal ? (
        <h2>
          C6 <span className={styles.span}>changed</span>
        </h2>
      ) : (
        <h2>C6</h2>
      )}
    </article>
  );
}
