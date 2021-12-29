import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import store from '@/store'
import Layout from '../layout/Index.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: '',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "pc" */ '../views/Home/Home.vue'),
      },
      {
        path: '/block',
        name: 'block',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Block/Block.vue'
            ),
      },
      {
        path: '/tx',
        name: 'tx',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Tx/Tx.vue'
            ),
      },
      {
        path: '/account',
        name: 'account',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Account/Account.vue'
            ),
      },
      {
        path: '/fptoken',
        name: 'fptoken',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/FPToken/FPToken.vue'
            ),
      },
      {
        path: '/nft',
        name: 'nft',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Nft/Nft.vue'
            ),
      },
      {
        path: '/node',
        name: 'node',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Node/Node.vue'
            ),
      },
      {
        path: '/vote',
        name: 'vote',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Vote/Vote.vue'
            ),
      },
      {
        path: '/proposal',
        name: 'proposal',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Proposal/Proposal.vue'
            ),
      },
      {
        path: '/committee',
        name: 'committee',
        component: () =>
          import(
            /* webpackChunkName: "pc" */ '../views/Committee/Committee.vue'
            ),
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  let endTid = setTimeout(function () {})
  // @ts-ignore
  for (let i = 0; i <= endTid; i++) {
    clearTimeout(i)
    clearInterval(i)
  }
  store.commit('INIT_MSG_CONFIG')
  next()
})
router.beforeEach((to, from, next) => {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    ;(window as any).location.href = process.env.VUE_APP_WEB_URL + '/m'
  } else {
    next()
  }
})
export default router;
