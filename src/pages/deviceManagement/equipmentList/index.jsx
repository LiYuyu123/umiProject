import styles from './index.less'
import React, {useEffect} from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect ,history} from 'umi';
import {
  Button,
  Form,
  Table,
  Input,
  Space,
  DatePicker,
} from 'antd';

const  equipmentList = (
  {dispatch,
  tableLoading = false,
  listData
  }
) => {
  const [form] = Form.useForm();

  useEffect(()=>{
    dispatch({
      type:'list/getList',
    })
  },[]);

  const  expandedRowRender = () =>{
    const columns = [
      { title: '充电枪编号', dataIndex: 'qDate', key: 'qDate' },
      { title: '充电枪名称', dataIndex: 'qName', key: 'qName' },
      { title: '充电枪功率', dataIndex: 'qPower', key: 'qPower' },
      { title: '最后充电时间', dataIndex: 'endDate', key: 'endDate' },
      { title: '总充电度数', dataIndex: 'zcNumber', key: 'zcNumber' },
      { title: '启用/停用', dataIndex: 'switch', key: 'switch' },
    ]
    return <Table columns={columns}  pagination={false} />;
  }
  const columns = [
    { title: '序号', dataIndex: 'id', key: 'id' ,
     width: 160,
    },
    { title: '站点ID', dataIndex: 'zId', key: 'zId' ,
      sorter: (a, b) => a.zId - b.zId,
      width: 160,
    },
    { title: '站点名称', dataIndex: 'zName', key: 'zName', width: 160, },
    { title: '充电桩编号', dataIndex: 'cNumber', key: 'cNumber', width: 160, },
    { title: 'OEM厂商', dataIndex: 'oem', key: 'oem' ,
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '充电桩型号', dataIndex: 'cModel', key: 'cModel',
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '充电桩类型', dataIndex: 'cType', key: 'cType',
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '充电桩功率', dataIndex: 'cPower', key: 'cPower' ,
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '充电枪数', dataIndex: 'qNumber', key: 'qNumber',
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '国际版本', dataIndex: 'gEdition', key: 'gEdition' ,
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '程序版本', dataIndex: 'cEdition', key: 'cEdition',
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '通信协议版本', dataIndex: 'tEdition', key: 'tEdition' ,
      filters:[],
      onFilter:() => {} ,
      width: 160,
    },
    { title: '创建时间', dataIndex: 'createDate', key: 'createDate',
      sorter: () => {},
      width: 160,
    },
    { title: '激活时间', dataIndex: 'jDate', key: 'jDate' ,
      sorter: () => {},
      width: 160,
    },
    { title: 'ICCID', dataIndex: 'iccid', key: 'iccid', width: 160, },
    { title: '操作', dataIndex: 'action', key: 'action' , width: 450,
     render:(rec) => (
       <div style={{color:'#00CA88', cursor: 'pointer'}}>
         <span
           onClick={
            (rec) => {
           history.push({
                 pathname:'/deviceManagement/equipmentList/detail',
                 query: {id: rec.id ,zName: rec.zName}
           });
         }
         }>详情</span>
         <span
           style={{ paddingLeft: '34px'}}
           onClick={
             (rec) => {
               history.push({
                 pathname:'/deviceManagement/equipmentList/edit',
                 query: {id: rec.id ,zName: rec.zName}
               });
             }
           }
         >编辑</span>
         <span style={{ paddingLeft: '34px'}}>变更站点</span>
         <span style={{ paddingLeft: '34px'}}>解除绑定</span>
       </div>
     )
    },
  ]
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
            <div className={styles.search}>
                     <Form
                    form={form}
                    size="large"
                    name="form-auth"
                    className={styles.from}
                  >
                    <div style={{marginLeft:'40px'}}>
                      <div className={styles.searchItem1}>
                         <Form.Item label="站点id" name="id">
                           <Input placeholder="请输入" allowClear />
                         </Form.Item>
                        <Form.Item label="站点名称" name="zName">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="充电桩编号" name="cNumber">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="充电桩功率" name="cPower">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                    </div>
                    <div className={styles.searchItem2}>
                        <Form.Item label="创建日期" name="createDate">
                          <DatePicker />
                        </Form.Item>
                        <Form.Item label="激活日期" name="jDate">
                          <DatePicker />
                        </Form.Item>
                        <Form.Item label="ICCID" name="ICCID">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                        <Form.Item label="充电枪编号" name="qNumber">
                          <Input placeholder="请输入" allowClear />
                        </Form.Item>
                      </div>
                    </div>
                    <div className={styles.wrapperB}>
                      <Form.Item>
                        <Space>
                          <Button >重置</Button>
                          <Button type="primary">
                            搜索
                          </Button>
                        </Space>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
                <div className={styles.tableContent}>
                   <section className={styles.tableH}>
                      <div className={styles.hWord1}>设备列表</div>
                      <div className={styles.hWord2}>导出</div>
                   </section>
                  <div className={styles.table}>
                    <div>
                       <Table
                         columns={columns}
                         expandable={{ expandedRowRender }}
                         scroll={{ x: 2284 }}
                         loading={tableLoading}
                         dataSource={ listData}
                       />
                    </div>
                  </div>
                  </div>
          </PageContainer>
        </div>
      )
}
export default connect(({list , loading})=>({
  ...list,
  tableLoading: loading.effects['list/getList']
}))(equipmentList)
