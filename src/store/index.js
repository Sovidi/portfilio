import { createStore } from 'vuex'

export default createStore({
  state: {
    tagId : "",
    workSrc : ""
  },
  getters: {
  },
  mutations: {
    idChange(state, str){
      state.tagId = str;
    },
    srcChange(state, src){
      state.workSrc = src;
    }
  },
  actions: {
  },
  modules: {
  }
})
