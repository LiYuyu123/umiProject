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

  'GET /api/getBottomTable': {
    code: 200,
    data: [
        {
         qDate: '2021-10-1',
          qName: 'lzj',
          qPower: '17kw',
          endDate: '2022-10-1',
          zcNumber: 15,
          switch: false
        },
      ],
    message: '',
    success: true,
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
  //下载文件
  'POST /api/exportList': {
    code: 200,
    message: '导出成功',
    data: []
  },

  //上传充电枪是否启用数据
  'POST /api/enableData': {
    code: 200,
    message: '导出成功',
    data: []
  },

  //上传编辑信息
  'POST /api/editData': {
    code: 200,
    message: '数据上传成功',
    data: []
  },
  //编辑详情
  'GET /api/editInfo': {
    code: 200,
    message: '',
    data: {
      cEdition: "jack",
      cNumber: "sadasd",
      gEdition: "jack",
      manufacturer: "jack",
      model: "jack",
      oneCName: "lzj",
      oneCNumber: "lzj",
      power: "lzj",
      twoCName: "lzj",
      twoCNumber: "lzj",
      type: "lzj",
      agreement:"jack"
    }
  },
  //设备详情数据
  'GET /api/detail': {
    code: 200,
    message: '',
    data: [
      {
        id: '111',
        address:"杭州",
        zName:'李子杰',
        rDate:'2021-10-02'
      },
      {
        zNumber:'23213123',
        brand:'dfd',
        xNumber:'xzcxzc',
        zType: '交流',
        zPower:'14',
        qNumber:'2',
        gEdition:'新国标',
        cEdition:'223',
        tEdition:'oa',
        category:'运营桩',
        create: '2021',
        iccld: '',
        jDate:'2022',
        addNumber:'1428.54',
        endDate:'2021'
      },
      {
        qNumber: '1212121',
        qPower: '7',
        addCNumber:'1993.33',
        cTimes:'3',
        endDate: '2012',
        zStatus: '在线',
        gStatus:'空闲',
        cDate:'',
        cDNumber: '',
        voltage: '',
        current:'',
        temperature:'',
        remainingTime:'',
      },
      {
        qNumber: '1212121',
        qPower: '7',
        addCNumber:'1993.33',
        cTimes:'3',
        endDate: '2012',
        zStatus: '在线',
        gStatus:'空闲',
        cDate:'',
        cDNumber: '',
        voltage: '',
        current:'',
        temperature:'',
        remainingTime:'',
      },
      {
        soc1: 0.685,
        soc2: 0.855,
      }
    ]
  },
}
