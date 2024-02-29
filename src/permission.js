import router from '@/router';
import { isLogged } from './utils/auth';
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogged()) {
      next();
    } else {
      next('auth/login');
    }
  } else {
    next();
  }
});
