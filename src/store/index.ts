import { createStore } from "vuex";

export default createStore({
  state: {
    msgConfig: {
      isShow: false,
      msg: '',
      type: 'common',
    },
  },
  mutations: {
    INIT_MSG_CONFIG(state) {
      state.msgConfig = {
        isShow: false,
        msg: '',
        type: 'common',
      }
    },
  },
  getters: {
    uInfo: (state) => {
      let uInfo = localStorage.getItem('uInfo')
      return uInfo ? JSON.parse(uInfo) : undefined
    },
  },
  actions: {
    Message({ commit, state }, obj) {
      state.msgConfig = obj
      const timer = setTimeout(() => {
        commit('INIT_MSG_CONFIG')
        clearTimeout(timer)
      }, 5 * 1000)
    },
  },
  modules: {},
});
