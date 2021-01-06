
import Vue from 'vue';
import store from './store';
import createRouter from './router';
// import createI18n from '../../framework/i18n/admin/index';
import helpInit from '../../utils/helper'
import App from './index.vue';
import "./css/index.scss"
import "./css/display.scss"

helpInit(Vue);
// Vue.use(createI18n('cn'));
const router = createRouter();
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})