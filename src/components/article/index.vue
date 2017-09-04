<template>
  <!-- 这里首先要判断props是否为空，不然在渲染路由的时候会出现空指针。也就是请求还没有完成，组件渲染props为空 -->
  <article class="p" v-if="art !== null">
    <router-link :to="{ name: 'post', params: { pid: art.pid }}">
      <h2 class="p-title" :id="more == false ? 'title' : null">{{art.title}}</h2>
      <ul class="p-meta">
        <li><time>{{art.created | formatYYMMDD}}</time></li>
      </ul>
      <div class="cover" v-if="art.cover">
        <img :src="art.cover">
      </div>
    </router-link>
    <div class="p-text">
      <p>{{art.text}}</p>
      <p class="more" v-if="more">
        <a :href="'/p/' + art.pid">- 查看更多 -</a>
      </p>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    art: {
      type: Object
    },
    more: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 在不是列表情况下
    // if (this.more === false) {
    //   // var mTop = document.getElementsByClassName('mdiv')[0].offsetTop;
    //   // console.log(mTop);
    //   console.log(document.querySelector('#title'));
    // }
    // TODO 注意v-if="art !== null" 所以无法获取document
  }
};
</script>
<style>
.p img{
  -webkit-transition: .3s;
  -webkit-transform: scale(1);
}

.p .cover {
  overflow: hidden;
}

.p:hover .cover img{
  -webkit-transform: scale(.92);
}
</style>