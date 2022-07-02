import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/home/Home.vue') },
      {
        path: '/getting-started',
        component: () => import('pages/getting-started/GettingStarted.vue'),
      },
      {
        path: '/playground',
        component: () => import('pages/playground/Playground.vue'),
      },
      // {
      //   path: '/presentation',
      //   component: () => import('pages/presentation/Presentation.vue'),
      // },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
