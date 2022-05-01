import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title: '记账',
  },
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  antd: {
    mobile: false,
  },
  routes: [
    // { path: '/', component: '@/pages/index' },
    {
      path: '/',
      component: '@/pages/root',
      headerRender: false,
      menuRender: false,
      wrappers: ['@/wrappers/auth'],
    },

    {
      path: '/login',
      name: '登录',
      headerRender: false,
      menuRender: false,
      hideInMenu: true,
      component: '@/pages/login',
    },
    // {
    //   name: '设备管理',
    //   path: '/deviceManagement',
    //   role: 'deviceManagement',
    //   wrappers: ['@/wrappers/auth'],
    //   component: '@/pages/deviceManagement',
    //   routes: [
    //     {
    //       name: '设备列表',
    //       path: '/deviceManagement/equipmentList',
    //       component: '@/pages/deviceManagement/equipmentList',
    //       role: 'equipmentList',
    //     },
    //     {
    //       name: '编辑',
    //       path: '/deviceManagement/equipmentList/edit',
    //       component: '@/pages/deviceManagement/equipmentList/edit',
    //       role: 'edit',
    //       hideInMenu: true,
    //     },
    //     {
    //       name: '详情',
    //       path: '/deviceManagement/equipmentList/detail',
    //       component: '@/pages/deviceManagement/equipmentList/detail',
    //       hideInMenu: true,
    //       role: 'detail',
    //     },
    //   ],
    // },
    {
      name: 'L记账',
      path: '/money',
      wrappers: ['@/wrappers/auth'],
      component: '@/pages/money',
      role: '/money',
      hideInMenu: true,
      headerRender: false,
      menuRender: false,
      routes: [
        {
          name: '记账',
          path: '/money/moneying',
          wrappers: ['@/wrappers/auth'],
          component: '@/pages/money/moneying',
          role: '/money/moneying',
          hideInMenu: true,
          headerRender: false,
          menuRender: false,
        },
        {
          name: '标签',
          path: '/money/lables',
          wrappers: ['@/wrappers/auth'],
          component: '@/pages/money/lables',
          role: '/money/lables',
          hideInMenu: true,
          headerRender: false,
          menuRender: false,
        },
        {
          name: '统计',
          path: '/money/statistics',
          wrappers: ['@/wrappers/auth'],
          component: '@/pages/money/statistics',
          role: '/money/statistics',
          hideInMenu: true,
          headerRender: false,
          menuRender: false,
        },
        {
          name: '个人中心',
          path: '/money/my',
          wrappers: ['@/wrappers/auth'],
          component: '@/pages/money/my',
          role: '/money/my',
          hideInMenu: true,
          headerRender: false,
          menuRender: false,
        },
      ],
    },
  ],
  fastRefresh: {},
});
