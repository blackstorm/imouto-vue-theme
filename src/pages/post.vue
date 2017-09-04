<template>
  <div id="post">
    <arti :art="post"></arti>
    <arti-comments v-show="post" :btn-value="'评论'" v-on:submit="submitComments"></arti-comments>
  </div>
</template>
<script>
import Arti from '../components/article/index.vue';
import ArtiComments from '../components/form/index.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'post',
  components: {
    Arti,
    ArtiComments
  },
  computed: {
    ...mapGetters(['post'])
  },
  methods: {
    ...mapActions([
      'getPostAction',
      'showAppSearch',
      'hiddenAppSearch',
      'clearPostAction',
      'savePostCommentAction'
    ]),
    submitComments(datas) {
      this.savePostCommentAction(datas); // 保存用户评论
    }
  },
  created() {
    this.hiddenAppSearch(); // 隐藏搜索框
    this.getPostAction(this.$route.params.pid);
  },
  destroyed() {
    this.showAppSearch(); // 在销毁组件后显示搜索框
    this.clearPostAction();// 在销毁组件后清理post
  }
};
</script>
<style>
#post .p:hover .cover img{
  -webkit-transform: scale(1);
}
</style>