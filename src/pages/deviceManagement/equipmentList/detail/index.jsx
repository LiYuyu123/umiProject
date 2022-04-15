import styles from './index.less'
import React, {useEffect} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {siteData,qData} from "../../../../constants";
import { Spin } from 'antd';
import {history ,connect} from "umi";
import dayjs from "dayjs";

const  detail = (
  {
    dispatch,
    location,
    detailLoading = false,
    detailData,
  }
) => {

  useEffect(()=>{
     const { query } = location;
     dispatch({
       type:'detail/getDetail',
       payload: {
         ...query
       }
     });
  } ,[])

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
        <Spin spinning={ detailLoading}>
           <div className={styles.detailContent} >
             <div
               className={styles.button}
               onClick={()=>{
                 history.go(-1);
               }}
             >
               <div></div> 返回
             </div>
              <div className={styles.mainContent}>
                {
                siteData.map((i,index)=>{
                  if(detailData[0] !== undefined && i.name === '站点信息' ) {
                    const  zInfo =detailData[0];
                    Object.keys(zInfo).forEach((item,index) => {
                      i.data[index].value = zInfo[item];
                    });
                  }
                  if(detailData[1] !== undefined && i.name === '充电桩信息'){
                    const cInfo = detailData[1];
                    Object.keys(cInfo).forEach((item,index) => {
                      i.data[index].value = cInfo[item];
                    });
                  }
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
                   if(detailData[2] !== undefined && i.name === '充电枪1信息' ) {
                     const  qInfo =detailData[2];
                     Object.keys(qInfo).forEach((item,index) => {
                       if(qInfo[item] !== '') {
                         i.data[index].value = qInfo[item];
                       }
                     });
                   }
                   if(detailData[3] !== undefined && i.name === '充电枪2信息'){
                     const qInfo = detailData[3];
                     Object.keys(qInfo).forEach((item,index) => {
                       if(qInfo[item] !== '') {
                         i.data[index].value = qInfo[item];
                       }
                     });
                   }
                   return (
                     <section className={styles.site} key={index}>
                       <div className={styles.siteH}>
                         <div className={styles.hWord}>{i.name}</div>
                         <div className={styles.leftH}>
                           <div  className={styles.lWord}>最近同步时间：<span>{dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')}</span></div>
                           <div
                             className={styles.lButton}
                             onClick={
                               () => {
                                 dispatch({
                                   type:'detail/getDetail',
                                   payload: {
                                     date:dayjs(new Date()).format('YYYY-MM-DD hh:mm:ss')
                                   }
                                 });
                               }
                             }
                           > <div></div> 刷新</div>
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
        </Spin>
      </PageContainer>
    </div>
  )
}

export default connect(({detail,loading})=>({
   ...detail,
  detailLoading: loading.effects['detail/getDetail']
}))(detail)
