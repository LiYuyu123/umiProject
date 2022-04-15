export default {
  //table列表
  'GET /api/getTable': {
    code: 200,
    data: {
      curPage: 1,
      pageSize: 10,
      records: [
        {
          id: 1,
          zId:'1111',
          zName:'lzj',
          cNumber:'111',
          oem:'111',
          cModel:'111',
          cType:'111',
          cPower:'22',
          qNumber:'222',
          gEdition:'3333',
          cEdition:'33',
          tEdition:'33',
          createDate:'33',
          jDate:'33333',
          iccid:'DDD'
        },
      ],
      total: 50,
    },
    message: '',
    success: true,
  },
  'POST /api/addFrom': {
    code: 200,
    message: '数据上传成功',
    data: []
  },
  'GET /api/searchTable': {
    code: 200,
    data: {
      curPage: 1,
      pageSize: 10,
      records: [
        {
          id: '',
          zId:'',
          zName:'',
          cNumber:'',
          oem:'',
          cModel:'',
          cType:'',
          cPower:'',
          qNumber:'',
          gEdition:'',
          cEdition:'',
          tEdition:'',
          createDate:'',
          jDate:'',
          iccid:''
        },
      ],
      total: 50,
    },
    message: '',
    success: true,
  },
  'POST /api/exportList': {
    code: 200,
    message: '导出成功',
    data: []
  },
}
