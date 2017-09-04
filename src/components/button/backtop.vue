<template>
  <div id="back2top">T</div>
</template>
<script>
export default {
  mounted() {
    var backTop = function(obj) {
      var screenH = document.documentElement.clientHeight;
      var oBackTop = document.querySelector(obj);
      var scrTop = 0;
      var iSpeed = 0;
      var scrollTopTemp = 0;
      var backTopTimer = null;
      window.onscroll = function() {
        scrollTopTemp = document.body.scrollTop || document.documentElement.scrollTop;
        if (screenH * 2 < scrollTopTemp) {
          oBackTop.style.display = 'block';
        } else {
          oBackTop.style.display = 'none';
        }
      };
      oBackTop.onclick = function() {
        backTopTimer = setInterval(function() {
          scrTop = document.body.scrollTop || document.documentElement.scrollTop;
          iSpeed = scrTop / 5;
          // console.log(iSpeed);
          if (scrTop === 0) {
            clearInterval(backTopTimer);
          }
          document.body.scrollTop = scrTop - iSpeed;
          document.documentElement.scrollTop = scrTop - iSpeed;
        },
        12);
      };
    };
    backTop('#back2top');
  }
};
</script>
<style>
#back2top {
  position: fixed;
  z-index: 99998;
  right: 2rem;
  bottom: 4.3rem;
  width: 3.8rem;
  height: 3.8rem;
  background-color: #EEE;
  border-radius: 50%;
  line-height: 3.8rem;
  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  color:#b5b5b5;
  box-shadow: 2px 2px 8px #ccc;
  display: none;
}
#back2top:hover {
  transition: .4s linear;
  background-color: #003aad;
  color: #fff;
}
</style>