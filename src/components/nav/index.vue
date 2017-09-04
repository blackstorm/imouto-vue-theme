<template>
  <nav>
    <router-link to="/" :class="{'a': $route.path == '/'}">
      <img src="http://tva4.sinaimg.cn/crop.0.0.512.512.180/742dd65cjw8f86vokkau9j20e80e8750.jpg">浩子
    </router-link>
    <router-link to="/day" :class="{'a': $route.path == '/day'}">
      <img src="http://mouto.org/design/nichijou.svg">日常
    </router-link>
    <router-link to="/photo" :class="{'a': $route.path == '/photo'}">
      <img src="http://mouto.org/design/photo.svg">照片
    </router-link>
    <router-link to="/code" :class="{'a': $route.path == '/code'}">
      <img src="http://mouto.org/design/code.svg">代码
    </router-link>
    <router-link to="/script" :class="{'a': $route.path == '/script'}">
      <img src="http://mouto.org/design/feel.svg">文字
    </router-link>
    <router-link to="/link" :class="{'a': $route.path == '/link'}">
      <img src="http://mouto.org/design/link.svg">链接
    </router-link>
    <router-link to="/about-me" :class="{'a': $route.path == '/about-me'}">
      <img src="//mouto.org/design/vsco.svg">关于我
    </router-link>
  </nav>
</template>
<script>
export default {
  mounted() {}
};
</script>
<style>
nav a[href="/"] img, nav a[href="/"] img {
  border-radius: 9em;
  width: 60px;
  height: 60px;
  top: 15px;
  left: 20px;
}
</style>