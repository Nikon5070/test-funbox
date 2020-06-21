import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mockList = [
  {
    name: 'Московский',
  },
  {
    name: 'Победы',
  },
];

export default new Vuex.Store({
  state: {
    list: mockList,
  },
  mutations: {
    REMOVE_ITEM(state, index) {
      state.list = state.list.filter((item, i) => i !== index);
    },
  },
  actions: {
  },
  modules: {
  },
});
