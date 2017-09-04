<template>
  <form method="get" id="S" action="#">
    <div class="I">
      <!-- 下面分别是获得失去焦点事件 -->
      <input type="search" name="s" autocomplete="off" placeholder="搜索 (っ °Д °;)っ" @blur="sl = false" @focus="sl = true">
    </div>
    <ul id="Sl" :class="{'h': !sl}">
      <li>
        <a>
          <h3>键入内容索引文章</h3>
          <span>Type the content indexing articles.</span>
        </a>
      </li>
    </ul>
  </form>
</template>
<script>
export default {
  data() {
    return {
      sl: false
    };
  }
};
</script>
<style>
#Sl:hover {
  cursor: pointer;
}
</style>