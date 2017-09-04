import * as types from '../mutation-types';
import api from '../../api';

const state = {
  self: null
};

const getters = {
  post: state => state.self
};

const actions = {
  getPostAction({commit}, pid) {
    commit(types.SHOW_APP_LOADING);
    api.getPost(pid).then(response => {
      if (response.data.code !== api.OK) {
        api.consoleLogResponseMessage();
        commit(types.HIDDEN_APP_LOADING);
        return;
      }
      commit(types.SET_POST, response.data.data);
      commit(types.HIDDEN_APP_LOADING);
    }, response => {
      api.consoleLogNetErrorMessage();
    });
  },
  clearPostAction({commit}) {
    commit(types.CLEAR_POST);
  }
};

const mutations = {
  [types.SET_POST](state, post) {
    state.self = post;
  },
  [types.CLEAR_POST](state) {
    state.self = null;
  }
};

export default {
  getters,
  actions,
  state,
  mutations
};
