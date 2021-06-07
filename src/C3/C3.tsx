import React from 'react';
import styles from './C3.module.css';
import C6 from '../C6';
import C7 from '../C7';
import C8 from '../C8';

export default function C3() {
  return (
    <section className={styles.box}>
      <h2>C3</h2>
      <section>
        <C6 />
        <C7 />
        <C8 />
      </section>
    </section>
  );
}
