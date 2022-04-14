export default {
  //table列表
  'GET /api/getTable': {
    code: 200,
    data: {
      curPage: 0,
      pageSize: 0,
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
      total: 20,
    },
    message: '',
    success: true,
  }
}
