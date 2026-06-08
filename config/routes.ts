export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    name: 'dashboard',
    icon: 'DashboardOutlined',
    path: '/dashboard',
    component: './Dashboard',
  },
  {
    name: 'area-cliente',
    icon: 'UserOutlined',
    path: '/client-dashboard',
    component: './ClientDashboard',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
] as import('@umijs/max').RouteConfig[];
