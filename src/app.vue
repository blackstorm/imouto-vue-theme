<template>
  <div>
    <nav-menu></nav-menu>
    <div id="m">
      <loading v-show="appLoading"></loading>
      <search v-if="!appLoading && searchShow"></search>
      <router-view></router-view>
    </div>
    <back2top></back2top>
  </div>
</template>

<script>
import NavMenu from './components/nav';
import Search from './components/search';
import Loading from './components/loading';
import Back2top from './components/button/backtop';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapGetters(['appLoading', 'searchShow'])
  },
  components: {
    NavMenu,
    Search,
    Loading,
    Back2top
  }
};
</script>
<style>
@import 'assets/i.css';
/*@import 'assets/animate.css';*/
@import 'assets/cmts.css';
</style>
