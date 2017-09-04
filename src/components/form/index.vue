<template>
  <div class="DS cmt">
    <form class="DS-input">
      <p>
        <input type="text" v-model="inputs.name" name="author" title="昵称" class="text" placeholder="小明" required=""/>
      </p>
      <p>
        <input type="email" v-model="inputs.mail" name="mail" title="邮箱" class="text" placeholder="@gmail.com" required="">
      </p>
      <p>
        <input type="url" v-model="inputs.url" name="url" title="网站" class="text" placeholder="https://">
      </p>
      <p>
        <textarea name="text" v-model="inputs.text" rows="5" title="评论正文" placeholder="在这里评论哟～（Support markdown）" required=""></textarea>
      </p>
      <p class="c">
        <button class="l" type="submit" @click.prevent="submit" :disabled="formBtn.disable">
          {{formBtn.value}}
        </button>
        <span v-if="message">{{message}}</span>
      </p>
    </form>
  </div>
</template>
<script>
import {sniff} from '../../tool.js';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'commit-form',
  props: ['btnValue'],
  data() {
    return {
      inputs: {
        name: null,
        mail: null,
        url: null,
        text: null
      },
      message: null
    };
  },
  computed: {
    ...mapGetters(['formBtn'])
  },
  methods: {
    ...mapActions(['setBtnValueAction', 'initBtnAction']),
    // 初始化 message
    initMessage() {
      this.message = null;
    },
    submit() {
      if (!sniff.strLength(this.inputs.name, 1, 24)) {
        this.message = '昵称太长或者太短';
        return;
      }
      if (!sniff.isMail(this.inputs.mail)) {
        this.message = '请填写一个有效的邮箱';
        return;
      }
      if (this.inputs.url != null && this.inputs.url.length > 0 && !sniff.isURL(this.inputs.url)) {
        this.message = '请填写一个有效的URL';
        return;
      }
      if (!sniff.strLength(this.inputs.text, 4, 10000)) {
        this.message = '评论太长或太短';
        return;
      }
      // console.log('点击按钮', sniff);
      this.$emit('submit', this.inputs);
    }
  },
  watch: {
    // 观察 message 3秒后隐藏
    message: function(newMessage) {
      if (newMessage === null || newMessage === '') {
        return;
      }
      setTimeout(this.initMessage, 3000);
    }
  },
  created() {
    this.setBtnValueAction(this.btnValue); // 设置按钮文字
  },
  destroyed() {
    this.initBtnAction(); // 初始化按钮
  }
};
</script>
<style>
.DS .c span{
  padding-left: 10px;
  line-height: 40px;
  font-size: 14px;
  -webkit-animation-name: fadeIn; /*动画名称*/
  -webkit-animation-duration: 1s; /*动画持续时间*/
  -webkit-animation-iteration-count: 1; /*动画次数*/
  -webkit-animation-delay: 0s; /*延迟时间*/
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}

.DS-input button {
  outline: none;
}

.DS-input button[disabled=disabled], .DS-input button:disabled {
  transition: .2s linear;
  background-color: #333;
}

.DS-input button:focus{
  background-color: #3366ca;
}

#m .text {
  margin:3px;
}

#m .text:focus, #m .DS textarea:focus {
  transition: .2s linear;
  background-color: #003aad;
  color:#FFF;
}

</style>