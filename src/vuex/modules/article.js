import * as types from '../mutation-types';
import api from '../../api';

// Article 状态
const state = {
  datas: null
};

// gettes
const getters = {
  arts: state => state.datas
};

// actions
const actions = {
  getArtsAction({commit}, option) {
    commit(types.SHOW_APP_LOADING); // 显示loading
    api.getTest().then(response => {
      if (response.data.code !== api.OK) {
        api.consoleLogResponseMessage();
        commit(types.HIDDEN_APP_LOADING);
        return;
      }
      commit(types.SET_ART, response.data.data);
      commit(types.HIDDEN_APP_LOADING);
    }, response => {
      api.consoleLogNetErrorMessage();
    });
  }
};

// mutations
const mutations = {
  [types.SET_ART](state, datas) {
    state.datas = datas;
  }
};

export default {
  actions,
  getters,
  state,
  mutations
};
