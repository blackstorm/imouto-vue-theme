<template>
<div id="home" v-if="!appLoading">
  <articles :datas="arts"></articles>
  <More v-if="arts"><!-- v-if 防止提前渲染-->
    <a slot="button" href="JavaScript:0;" class="more" @click.prevent="nextOnClick">
      加载 {{arts[arts.length - 1].created | formatYYMMDD}} 之前的文章...
    </a>
    <a slot="button" class="more f5" @click.prevent="getArtsAction">Now</a>
  </More>
</div>
</template>
<script>
import Articles from '../components/article/articles';
import More from '../components/button/more';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  components: {
    Articles,
    More
  },
  computed: {
    ...mapGetters(['arts', 'appLoading'])
  },
  methods: {
    ...mapActions(['getArtsAction']),
    nextOnClick() {
      this.getArtsAction(); // 作为测试使用
    }
  },
  watch: {
    arts: function(newValue, oldValue) {
      // 如果是第一次请求，不做任何事情
      if (oldValue === null) {
        return;
      }
      // 如果是第一次以后的请求，准备将页面拉伸至第一篇文章
      console.log(newValue);
    }
  },
  mounted() {
    if (this.arts === null) {
      this.getArtsAction();
    }
  }
};
</script>
<style>
#home #more .more:active {
  background-color: #003aad;
  color: #FFF;
}

#home #more {
  cursor: pointer;
}

#home #more:hover .more.f5 {
  display: block;
}

#home #more .more.f5 {
  display: none;
  width: 70%;
  margin:0 auto;
  margin-top: .3rem;
}

/*#home #more .more:hover:before {
  content: "加载之前的文章"
}*/
</style>