import Vue from 'vue';
import App from './app.vue';
import CIcon from '../index';

import './assets/app.css';

Vue.use(CIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
