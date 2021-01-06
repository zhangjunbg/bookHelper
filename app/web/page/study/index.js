
import Vue from 'vue';
import store from './store';
import createRouter from './router';
import helpInit from '../../utils/helper'
import App from './index.vue';
import "./css/index.scss"
import "./css/display.scss"

helpInit(Vue);
const router = createRouter();
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})