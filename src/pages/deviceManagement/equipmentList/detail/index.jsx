import styles from './index.less'
import React from 'react';

export default function  editList ( ) {
  return (
    <div className={styles.detailMain}>
      <div className={styles.header}>
        <section className={styles.headerWord1}> 设备管理 / 设备列表 / 运营设备 / 设备详情</section>
        <section className={styles.headerWord2}>设备详情</section>
      </div>
      <div className={styles.detailContent}>
         <div className={styles.button}>
           <div></div> 返回
         </div>
         <div className={styles.mainContent}>
           2
         </div>
      </div>
    </div>)
}
