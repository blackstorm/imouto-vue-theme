import * as types from '../mutation-types';

// app 状态
const state = {
  loading: false,
  search: {
    show: true
  }
};

const getters = {
  appLoading: state => state.loading,
  searchShow: state => state.search.show
};

const actions = {
  showAppSearch({commit}) {
    commit(types.SHOW_SEARCH);
  },
  hiddenAppSearch({commit}) {
    commit(types.HIDDEN_SEARCH);
  }
};

const mutations = {
  // 显示 oading
  [types.SHOW_APP_LOADING](state) {
    state.loading = true;
  },
  // 隐藏 loading
  [types.HIDDEN_APP_LOADING](state) {
    state.loading = false;
  },
  // 显示搜索
  [types.SHOW_SEARCH](state) {
    state.search.show = true;
  },
  // 隐藏搜索
  [types.HIDDEN_SEARCH](state) {
    state.search.show = false;
  }
};

export default {
  actions,
  state,
  getters,
  mutations
};
