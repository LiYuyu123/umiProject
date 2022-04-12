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
      name: '设备管理',
      path: '/deviceManagement',
      access: 'routeAccess',
      role: 'deviceManagement',
      routes: [
        {
          name: '设备列表',
          path: '/deviceManagement/equipmentList',
          component: '@/pages//deviceManagement/equipmentList',
          access: 'routeAccess',
          role: 'furnaceTrack_equipmentList',
        },
        {
          name: '编辑',
          path: '/deviceManagement/equipmentList/edit',
          component: '@/pages//deviceManagement/equipmentList/edit'
        }
      ],
    },
  ],
  fastRefresh: {},
});
