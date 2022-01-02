import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //统一的状态管理
    token: ''
  },

  mutations: {  //通过mutations来操作state

    SET_TOKEN: (state, token) => {  //通过该方法将token传入state中的token
      state.token = token
      localStorage.setItem("token", token)
    }
  },

  actions: {
  },

  modules: {
  }
})
