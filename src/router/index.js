import { createRouter, createWebHistory } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { isLogged } from '@/utils/auth';

const routes = [
  {
    path: '/',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: ':carName/:id(\\d+)',
        name: 'Details',
        component: () => import('@/views/DetailCarView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Manage',
        component: () => import('@/views/ManageView.vue'),
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'edit',
        component: () => import('@/views/EditView.vue'),
      },
      {
        path: 'cars',
        children: [
          {
            path: '',
            name: 'car',
            component: () => import('@/views/MangerCarView.vue'),
          },
          {
            path: 'create',
            name: 'createCar',
            component: () => import('@/views/CreateCarView.vue'),
          },
          {
            path: 'edit/:id(\\d+)',
            name: 'editCar',
            component: () => import('@/views/EditCarView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/admin/LoginView.vue'),
        beforeEnter: (to, from, next) => {
          if (isLogged()) {
            next('admin');
          }
          next();
        },
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/auth/admin/RegisterView.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
