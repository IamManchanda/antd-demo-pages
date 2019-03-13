import uuid from 'uuid';

import Button from '@/views/pages/button.vue';
import Icon from '@/views/pages/icon.vue';
import Affix from '@/views/pages/affix.vue';
import Breadcrumb from '@/views/pages/breadcrumb.vue';
import Dropdown from '@/views/pages/dropdown.vue';
import Menu from '@/views/pages/menu.vue';

const componentRoutes = [
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
];

/* eslint-disable-next-line */
componentRoutes.forEach(item => item.id = uuid.v4());

export default componentRoutes;
