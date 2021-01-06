import Vue from 'vue';
import { sync } from 'vuex-router-sync';
// import createI18n from './i18n/admin/index';
import helpInit from '../utils/helper'
helpInit(Vue);
export default class App {
  constructor() {
    // this.config = config;
    // Vue.use(createI18n('cn'));
  }

  bootstrap() {
    const options = this.create(window.__INITIAL_STATE__);
    const app = new Vue(options);
    app.$mount('#app');
  }

  fetch(store, router) {
    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents) {
      return Promise.reject('No Match Component');
    }
    return Promise.all(
      matchedComponents.map(component => {
        if (component.methods && component.methods.fetchApi) {
          return component.methods.fetchApi.call(component, { $store: store, $router: router });
        }
        return null;
      })
    );
  }

  create(initState) {
    const { index, options, createI18n, store, createRouter } = this.config;
    const router = createRouter();
    router.afterEach(() => {
      this.fetch(store, router);
    });
    const i18n = createI18n(store.state.locale);
    sync(store, router);
    return {
      ...index,
      ...options,
      i18n,
      router,
      store
    };
  }
}