import Vue from 'vue';
import Router from 'vue-router';
import componentRoutes from './data/componentRoutes';
import Home from '@/views/pages/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ...componentRoutes,
  ],
});
