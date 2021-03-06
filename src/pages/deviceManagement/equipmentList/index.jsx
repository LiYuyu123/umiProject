import styles from './index.less';
import React, { useEffect } from 'react';
import { connect, history } from 'umi';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Space,
  Switch,
  Table,
} from 'antd';

const equipmentList = ({
  dispatch,
  tableLoading = false,
  listData,
  bListData,
  curPage,
  location,
  pageSize,
  total,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    location.query && form.setFieldsValue({ ...location.query });
  }, []);

  //获取扩展table数据
  const getBListData = (expanded, record) => {
    dispatch({
      type: 'list/getBottomList',
      payload: {
        id: record.id,
      },
    });
  };

  //查询搜索
  const fromData = (values) => {
    history.replace({
      pathname: '/deviceManagement/equipmentList',
      query: {
        ...values,
      },
    });
    dispatch({
      type: 'list/searchList',
      payload: {
        ...values,
      },
    });
  };

  //重置
  const listReset = () => {
    history.replace({
      pathname: '/deviceManagement/equipmentList',
    });
    form.resetFields();
    dispatch({
      type: 'list/searchLis',
    });
  };

  //分页
  const PageChange = (curPage, pageSize) => {
    dispatch({
      type: 'list/searchList',
      payload: {
        curPage,
        pageSize,
        ...location.query,
      },
    });
  };

  //导出
  const onExport = () => {
    dispatch({
      type: 'list/listExport',
    });
  };

  const expandedRowRender = () => {
    const columns = [
      { title: '充电枪编号', dataIndex: 'qDate', key: 'qDate', width: 100 },
      { title: '充电枪名称', dataIndex: 'qName', key: 'qName', width: 100 },
      { title: '充电枪功率', dataIndex: 'qPower', key: 'qPower', width: 100 },
      {
        title: '最后充电时间',
        dataIndex: 'endDate',
        key: 'endDate',
        width: 100,
      },
      {
        title: '总充电度数',
        dataIndex: 'zcNumber',
        key: 'zcNumber',
        width: 100,
      },
      {
        title: '启用/停用',
        dataIndex: 'switch',
        key: 'switch',
        width: 800,
        render: (text, record) => {
          return (
            <Switch
              checkedChildren="开启"
              unCheckedChildren="关闭"
              defaultChecked={Boolean(record.switch)}
              onClick={(checked) => {
                dispatch({
                  type: 'list/postEnableData',
                  payload: {
                    enable: checked ? '开启' : '关闭',
                  },
                });
              }}
            />
          );
        },
      },
    ];
    return (
      <Table columns={columns} pagination={false} dataSource={bListData} />
    );
  };
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      width: 160,
    },
    {
      title: '站点ID',
      dataIndex: 'zId',
      key: 'zId',
      sorter: (a, b) => a.zId - b.zId,
      width: 160,
    },
    { title: '站点名称', dataIndex: 'zName', key: 'zName', width: 160 },
    { title: '充电桩编号', dataIndex: 'cNumber', key: 'cNumber', width: 160 },
    {
      title: 'OEM厂商',
      dataIndex: 'oem',
      key: 'oem',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '充电桩型号',
      dataIndex: 'cModel',
      key: 'cModel',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '充电桩类型',
      dataIndex: 'cType',
      key: 'cType',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '充电桩功率',
      dataIndex: 'cPower',
      key: 'cPower',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '充电枪数',
      dataIndex: 'qNumber',
      key: 'qNumber',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '国际版本',
      dataIndex: 'gEdition',
      key: 'gEdition',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '程序版本',
      dataIndex: 'cEdition',
      key: 'cEdition',
      filters: [],
      onFilter: () => {},
      width: 160,
    },
    {
      title: '通信协议版本',
      dataIndex: 'tEdition',
      key: 'tEdition',
      filters: [],
      onFilter: () => {},
      width: 180,
    },
    {
      title: '创建时间',
      dataIndex: 'createDate',
      key: 'createDate',
      sorter: () => {},
      width: 160,
    },
    {
      title: '激活时间',
      dataIndex: 'jDate',
      key: 'jDate',
      sorter: () => {},
      width: 160,
    },
    { title: 'ICCID', dataIndex: 'iccid', key: 'iccid', width: 160 },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: 450,
      render: (text, record) => (
        <div style={{ color: '#00CA88', cursor: 'pointer' }}>
          <span
            onClick={() => {
              history.push({
                pathname: '/deviceManagement/equipmentList/detail',
                query: { id: record?.id, zName: record?.zName },
              });
            }}
          >
            详情
          </span>
          <span
            style={{ marginLeft: '34px' }}
            onClick={() => {
              history.push({
                pathname: '/deviceManagement/equipmentList/edit',
                query: { id: record?.id, zName: record?.zName },
              });
            }}
          >
            编辑
          </span>
          <span style={{ marginLeft: '34px' }}>变更站点</span>
          <span style={{ marginLeft: '34px' }}>解除绑定</span>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className={styles.search}>
        <Form
          form={form}
          size="large"
          name="form-auth"
          onFinish={fromData}
          className={styles.from}
        >
          <Row gutter={30}>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="站点id" name="id">
                <Input placeholder="请输入" allowClear />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="站点名称" name="zName">
                <Input placeholder="请输入" allowClear />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="充电桩编号" name="cNumber">
                <Input placeholder="请输入" allowClear />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="充电桩功率" name="cPower">
                <Input placeholder="请输入" allowClear />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="创建日期" name="createDate">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="激活日期" name="jDate">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="ICCID" name="ICCID">
                <Input placeholder="请输入" allowClear />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={5}>
              <Form.Item label="充电枪编号" name="qNumber">
                <Input placeholder="请输入" allowClear />
              </Form.Item>
            </Col>
            <Col lg={12} xl={8} xxl={3}>
              <Form.Item>
                <Space>
                  <Button onClick={listReset}>重置</Button>
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                </Space>
              </Form.Item>
            </Col>
          </Row>
          {/*<Col span={4.8} >*/}
          {/*  <Form.Item label="站点id" name="id">*/}
          {/*    <Input placeholder="请输入" allowClear/>*/}
          {/*  </Form.Item>*/}
          {/*  <Form.Item label="创建日期" name="createDate">*/}
          {/*    <DatePicker/>*/}
          {/*  </Form.Item>*/}

          {/*</Col>*/}
          {/*<Col span={4.8}>*/}
          {/*  <Form.Item label="站点名称" name="zName">*/}
          {/*    <Input placeholder="请输入" allowClear/>*/}
          {/*  </Form.Item>*/}
          {/*  <Form.Item label="激活日期" name="jDate">*/}
          {/*    <DatePicker/>*/}
          {/*  </Form.Item>*/}
          {/*</Col>*/}
          {/*<Col span={4.8}>*/}
          {/*  <Form.Item label="充电桩编号" name="cNumber">*/}
          {/*    <Input placeholder="请输入" allowClear/>*/}
          {/*  </Form.Item>*/}
          {/*  <Form.Item label="ICCID" name="ICCID">*/}
          {/*    <Input placeholder="请输入" allowClear/>*/}
          {/*  </Form.Item>*/}
          {/*</Col>*/}
          {/*<Col span={4.8}>*/}
          {/*  <Form.Item label="充电桩功率" name="cPower">*/}
          {/*    <Input placeholder="请输入" allowClear/>*/}
          {/*  </Form.Item>*/}
          {/*  <Form.Item label="充电枪编号" name="qNumber">*/}
          {/*    <Input placeholder="请输入" allowClear/>*/}
          {/*  </Form.Item>*/}
          {/*</Col>*/}
          {/*<Col span={4.8} style={{paddingTop: '65px'}}>*/}
          {/*  <Form.Item>*/}
          {/*    <Space>*/}
          {/*      <Button onClick={listReset}>重置</Button>*/}
          {/*      <Button type="primary" htmlType="submit">*/}
          {/*        搜索*/}
          {/*      </Button>*/}
          {/*    </Space>*/}
          {/*  </Form.Item>*/}
          {/*</Col>*/}
        </Form>
      </div>
      <div className={styles.tableContent}>
        <section className={styles.tableH}>
          <div className={styles.hWord1}>设备列表</div>
          <Space>
            <div className={styles.hWord2} onClick={onExport}>
              导出
            </div>
            <div
              className={styles.hWord2}
              onClick={() => {
                history.push({
                  pathname: '/deviceManagement/equipmentList/edit',
                });
              }}
            >
              新建
            </div>
          </Space>
        </section>
        <div className={styles.table}>
          <div>
            <Table
              columns={columns}
              expandable={{ expandedRowRender }}
              onExpand={getBListData}
              scroll={{ x: 2284 }}
              loading={tableLoading}
              dataSource={listData}
              pagination={{
                current: curPage,
                pageSize: pageSize,
                total: total,
                onChange: PageChange,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(({ list, loading }) => ({
  ...list,
  tableLoading: loading.effects['list/getList'],
}))(equipmentList);
