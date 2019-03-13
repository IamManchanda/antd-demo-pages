import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/pages/home.vue';
import Button from '@/views/pages/button.vue';
import Icon from '@/views/pages/icon.vue';
import Affix from '@/views/pages/affix.vue';
import Breadcrumb from '@/views/pages/breadcrumb.vue';
import Dropdown from '@/views/pages/dropdown.vue';
import Menu from '@/views/pages/menu.vue';

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
    {
      path: '/icon',
      name: 'Icon',
      component: Icon,
    },
    {
      path: '/affix',
      name: 'Affix',
      component: Affix,
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb,
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: Dropdown,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
  ],
});
