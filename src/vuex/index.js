import Vue from 'vue';
import Vuex from 'vuex';
import {DEV} from '../config';
import * as actions from './actions';
import * as getters from './getters';
import article from './modules/article';
import post from './modules/post';
import app from './modules/app';
import form from './modules/component.form';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    app,
    article,
    post,
    form
  },
  strict: DEV
});
