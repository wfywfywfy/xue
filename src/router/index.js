import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'



Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    redirect: '/home/cc',
    component: () => import('../views/home'),
    meta: {
      roles: 'wfy'
    },
    children: [{
        path: '/about',
        name: 'about',
        component: () => import('../views/about'),
        meta: {
          roles: 'wfy'
        }
      },
      {
        path: '/cc',
        name: 'CC',
        component: () => import('../views/cc'),
        meta: {
          roles: 'wfy'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/yy',
    name: 'yy',
    redirect: '/yy/ww',

    component: () => import('@/views/yy'),
    children: [{
        path: 'ww',
        name: 'ww',
        component: () => import('@/views/ww'),

      },
      {
        path: 'ff',
        name: 'ff',
        component: () => import('@/views/ff'),

      }
    ]
  }

]



const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(to, 111);
  next()
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.roles) {
//     if (store.state.users) {
//       if (to.path === '/login') {
//         next({
//           path: '/'
//         })
//       } else {
//         next()
//       }
//     } else {
//       console.log(777);
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router