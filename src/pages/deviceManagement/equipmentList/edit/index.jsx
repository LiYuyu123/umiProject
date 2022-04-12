import styles from './index.less'
import React from 'react';

export default function  editList ( ) {
  return (
    <div className={styles.editMain}>
      <div className={styles.header}>
        <section className={styles.headerWord1}> 设备管理 / 设备列表</section>
        <section className={styles.headerWord2}>设备列表</section>
      </div>
      <div className={styles.tableContent}>
        <section className={styles.tableH}>
          <div className={styles.hWord1}>设备列表</div>
          <div className={styles.hWord2}>导出</div>
        </section>
        <div className={styles.table}>2</div>
      </div>
    </div>)
}
