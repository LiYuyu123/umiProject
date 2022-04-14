import styles from './index.less'
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {siteData,qData} from "../../../../constants";
import {history} from "umi";

export default function  editList ( ) {
  return (
    <div
      style={{
        background: '#F5F7FA',
      }}
    >
      <PageContainer
        fixedHeader
        header={{
          title: '设备列表',
          breadcrumb: {
            routes: [
              {
                path: '',
                breadcrumbName: ' 设备管理',
              },
              {
                path: '',
                breadcrumbName: ' 设备列表',
              },
              {
                path: '',
                breadcrumbName: ' 运营设备',
              },
              {
                path: '',
                breadcrumbName: '设备详情',
              }
            ],
          },
        }}
        tabList={[
          {
            tab: '运营设备',
            key: '1',
          },
          {
            tab: '私桩设备',
            key: '2',
          },
          {
            tab: '未分配设备',
            key: '3',
          },
        ]}
      >
           <div className={styles.detailContent}>
             <div
               className={styles.button}
               onClick={()=>{
                 history.go(-1)
               }}
             >
               <div></div> 返回
             </div>
              <div className={styles.mainContent}>
                {
                siteData.map((i,index)=>{
                  return(
                    <section className={styles.site} key={index}>
                      <div className={styles.siteWord}>{ i.name }</div>
                      <div className={styles.wrapperInfo} style={{height: i.height,width:i.width}}>
                      {
                        i.data.map((j,jIndex)=>{
                        return ( <div className={styles.siteMain} key={jIndex}>
                            <span>{ j.name}：</span>
                            <span>{j.value}</span>
                          </div>)
                        })
                      }
                      </div>
                    </section>
                  )
                })
               }
               {
                 qData.map((i,index)=>{
                   return (
                     <section className={styles.site} key={index}>
                       <div className={styles.siteH}>
                         <div className={styles.hWord}>{i.name}</div>
                         <div className={styles.leftH}>
                           <div  className={styles.lWord}>最近同步时间：<span>2021-12-22 17:23:33</span></div>
                           <div className={styles.lButton}> <div></div> 刷新</div>
                         </div>
                       </div>
                       <div className={styles.wrapperInfo} style={{height: i.height,width:i.width}}>
                         {
                           i.data.map((j,jIndex)=>{
                             return (
                               <div className={styles.siteMain} key={jIndex}>
                                 <span>{j.name}：</span>
                                 <span>{j.value}</span>
                               </div>
                             )
                           })
                         }
                       </div>
                     </section>
                   )
                 })
               }
             </div>
          </div>
      </PageContainer>
    </div>

  )
}
