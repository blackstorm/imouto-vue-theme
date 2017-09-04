import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Post from '../pages/post.vue';
import Page404 from '../pages/404.vue';

Vue.use(VueRouter); // 模块化

// 路由表 还有另一种渲染方式
const routes = [
  {
    path: '/', component: Home, name: 'home'
  },
  {
    path: '/p/:pid', component: Post, name: 'post'
  },
  {
    path: '*', component: Page404
  }
];

// 路由配置
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  history: true,
  saveScrollPosition: false // 不保存滚动位置
});

export default router;
