import App from 'framework/app';
import createI18n from 'framework/i18n/admin';
import store from './store';
import createRouter from './router';
import index from './index.vue';
import "../../asset/css/index.scss"
import "../../asset/css/display.scss"

new App({ index, createI18n, createRouter, store }).bootstrap();


