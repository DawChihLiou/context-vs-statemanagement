import React from 'react';
import C2 from '../C2';
import C3 from '../C3';
import styles from './C1.module.css';

export default function C1() {
  return (
    <section className={styles.box}>
      <h2 className={styles.header}>C1</h2>
      <section className={styles.container}>
        <C2 />
        <C3 />
      </section>
    </section>
  );
}
