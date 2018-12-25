import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias: '/homepage',   //别名路由
    name: 'home',   //命名路由
    component: Home,
    props: route => ({
      food: route.query.food  //函数模式
    }),
    //守卫
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about来的')
      // else alert('这不是从about来的')
      // next()
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: 'banana'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  //动态路由参数
  {
    path: '/user/:name',
    name: 'user',
    component: () => import('@/views/user.vue'),
    props: true
  },
  //嵌套路由参数
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  //命名视图的使用
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  //重定向路由
  {
    path: '/main',
    // redirect: to => {
    //   return '/'
    // }
    redirect: to => '/'
  },
  //最后设置
  {
    path: '*', //前面任何路由找不到就跳这里来
    component: () => import('@/views/error_404.vue')
  }
]
