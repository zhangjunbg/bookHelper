import Vue from 'vue';

import VueRouter from 'vue-router';

import { Learn, Task, Test } from './modules'
Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/study/',
    routes: [
      Learn,
      Task,
      Test,
      {
        path: 'test',
        component: {
          template: '<router-view/>'
        },
        redirect: "/learn/word",
      },
      {
        path: '*', component: () => import('../view/notfound.vue')
      }
    ]
  });
}