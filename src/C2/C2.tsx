import React from 'react';
import styles from './C2.module.css';
import C4 from '../C4';
import C5 from '../C5';

export default function C2() {
  return (
    <section className={styles.box}>
      <h2>C2</h2>
      <section>
        <C4 />
        <C5 />
      </section>
    </section>
  );
}
