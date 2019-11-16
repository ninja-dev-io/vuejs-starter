import 'reflect-metadata';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from './store/store';
import './common/quasar';
import './style.styl';
import 'jquery';
import Header from '@/common/components/Header.vue';
import Footer from '@/common/components/Footer.vue';
import VueRx from 'vue-rx'
import Axios from 'axios-observable';
import buildDependencyContainer from '@/app.container';
import DialogContent from '@/common/components/DialogContent.vue';

Vue.config.productionTip = false;

// Global components
Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-dialog-content', DialogContent);

// DI
buildDependencyContainer();

// RX
Vue.use(VueRx);

// Axios
Axios.defaults.baseURL = `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_HOST}:${process.env.VUE_APP_PORT}`;

// Event Bus
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');



