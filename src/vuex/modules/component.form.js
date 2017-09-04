import * as types from '../mutation-types';

// form 组件状态
const state = {
  btn: {
    disable: false,
    value: null
  }
};

// getters
const getters = {
  formBtn: state => state.btn
};

// actions
const actions = {
  setBtnValueAction({commit}, value) {
    commit(types.SET_FORM_BTNVALUE, value);
  },
  initBtnAction({commit}) {
    commit(types.INIT_FORM_BTN);
  },
  // 禁用 BTN 并设置BTN value
  setBtnDisableValueAction({commit}, value) {
    commit(types.SET_FORM_BTNVALUE, value);
    commit(types.SET_FORM_BTNDISABLE, true);
  },
  // 显示提交成功并在 X 秒后初始化按钮
  setSuccessTimeOutInitBtn({commit}, data) {
    if (data.second === null || data.second === 0) {
      console.log('不能设置为0秒');
      return;
    }
    // 读秒 设置定时器
    var timers = setInterval(function() {
      data.second = data.second - 1;
      commit(types.SET_FORM_BTNVALUE, 'OK! 等待初始化 ' + data.second);
    }, 1000);
    // 初始化按钮
    setTimeout(function() {
      window.clearInterval(timers);
      commit(types.INIT_FORM_BTN);
      commit(types.SET_FORM_BTNVALUE, data.btnValue);
    }, data.second * 1000);
  }
};

// mutations
const mutations = {
  [types.SET_FORM_BTNVALUE](state, value) {
    state.btn.value = value;
  },
  [types.INIT_FORM_BTN](state) {
    state.btn.disable = false;
    state.btn.value = null;
  },
  [types.SET_FORM_BTNDISABLE](state, bool) {
    state.btn.disable = bool;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
