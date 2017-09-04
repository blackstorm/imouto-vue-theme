import Vue from 'vue';
import App from './app.vue';

import router from './router';
import store from './vuex';
import {DEV} from './config';
// import { sync } from 'vuex-router-sync'; 主要是把 vue-router 的狀態放進 vuex 的 state 中
// sync(store, router);
import './mock';
import Fecha from 'fecha';

Vue.config.debug = DEV;
Vue.config.devtools = true; // 浏览器调试

let data = {
  router: router,
  store: store,
  render: h => h(App)
};

// 设置过滤器
Vue.filter('formatYYMMDD', function(value, formatString) {
  formatString = formatString || 'YYYY年MM月DD日';
  var date = Fecha.parse(value, 'YY-MM-DD HH:mm:ss');
  return Fecha.format(date, formatString);
});

new Vue(data).$mount('#app');
