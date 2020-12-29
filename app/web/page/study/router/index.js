import Vue from 'vue';

import VueRouter from 'vue-router';

import Book from '../view/book/index.vue';
import Manage from '../view/manage/index.vue';
import ManageList from '../view/manage/list.vue';
import ManageAdd from '../view/manage/add.vue';
import { Learn, Task, Test } from './modules'

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/main/',
    routes: [
      Learn,
      Task,
      Test,
      
      {
        path: '/manage',
        component: Manage,
        meta: {
          title: "管理"
        },
        children: [{
          path: '/list',
          component: ManageList,
          meta: {
            title: "列表"
          },
        }, {
          path: '/add',
          component: ManageAdd,
          meta: {
            title: "新增"
          },
        }],
      },
      {
        path: '/book',
        component: Book,
        meta: {
          title: "创建书"
        }
      },
      {
        path: '*', component: () => import('../view/notfound.vue')
      }
    ]
  });
}