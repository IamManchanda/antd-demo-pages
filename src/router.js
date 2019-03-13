import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/pages/home.vue';
import Button from '@/views/pages/button.vue';

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
    {
      path: '/button',
      name: 'Button',
      component: Button,
    },
  ],
});
