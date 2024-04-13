export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Index' },
  {
    path: '/interface_info/:id',
    name: 'interface_info',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin',
        redirect: '/admin/interface_info',
      },
      // {
      //   path: '/admin/sub-page',
      //   name: 'sub-page',
      //   component: './Admin',
      // },
      {
        name: '接口管理',
        icon: 'table',
        path: '/admin/interface_info',
        component: './Admin',
      },
    ],
  },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
