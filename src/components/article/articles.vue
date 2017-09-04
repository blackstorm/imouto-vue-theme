<template>
  <div>
    <post v-for="item in datas" :art="item" :more="true"></post>
  </div>
</template>
<script>
import Post from './index.vue';

export default {
  name: 'articles',
  props: ['datas'],
  components: {
    Post
  }
};
</script>
<style>
</style>