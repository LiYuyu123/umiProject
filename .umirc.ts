import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title: '车侍运营平台',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/pages/root',
      headerRender: false,
      menuRender: false,
    },

    {
      path: '/login',
      name: '登录',
      headerRender: false,
      menuRender: false,
      hideInMenu: true,
      component: '@/pages/login',
    },
    {
      name: '设备管理',
      path: '/deviceManagement',
      role: 'deviceManagement',
      component: '@/pages/deviceManagement',
      routes: [
        {
          name: '设备列表',
          path: '/deviceManagement/equipmentList',
          component: '@/pages/deviceManagement/equipmentList',
          role: 'equipmentList',
        },
        {
          name: '编辑',
          path: '/deviceManagement/equipmentList/edit',
          component: '@/pages/deviceManagement/equipmentList/edit',
          role: 'edit',
          hideInMenu: true,
        },
        {
          name: '详情',
          path: '/deviceManagement/equipmentList/detail',
          component: '@/pages/deviceManagement/equipmentList/detail',
          hideInMenu: true,
          role: 'detail',
        },
      ],
    },
  ],
  fastRefresh: {},
});
