import Vue from 'vue';

import VueRouter from 'vue-router';

import ManageList from '../view/manage/list.vue';
import ManageAdd from '../view/manage/add.vue';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/manage/',
    routes: [
      {
        path: '/resource',
        component: {
          template: '<router-view/>'
        },
        meta: {
          title: "管理"
        },
        children: [{
          path: 'list',
          component: ManageList,
          meta: {
            title: "列表"
          },
        }, {
          path: 'add',
          component: ManageAdd,
          meta: {
            title: "新增"
          },
        }],
      },
      {
        path: '*', component: () => import('../view/notfound.vue')
      }
    ]
  });
}