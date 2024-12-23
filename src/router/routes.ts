import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '',name: 'RootPage', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/first-page',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '',name: 'FirstPage', component: () => import('pages/FirstPage.vue') }],
  },
  {
    path: '/pos',
    component: () => import('layouts/FullScreen.vue'),
    children: [{ path: '',name: 'PosPage', component: () => import('pages/POSPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/FullScreen.vue'),
    children: [{ path: '',name: 'LoginPage', component: () => import('pages/LoginPage.vue') }],
  },
  {
    path: '/user-page',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '',name: 'UserPage', component: () => import('pages/UserPage.vue') }],
  },
  {
    path: '/route-page/:id/:name',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name:'RoutePage', component: () => import('pages/RoutePage.vue') }],
    meta: { requiresAuth: false},
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
