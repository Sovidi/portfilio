import { createStore } from "vuex";

export default createStore({
  state: {
    tagId : "",
    workSrc : "",
    page3 : false,
    workMouseOn: "",
    mode: "list",
    commentId: ""
  },
  getters: {
  },
  mutations: {
    idChange(state, str){
      state.tagId = str;
    },
    srcChange(state, src){
      state.workSrc = src;
    },
    page3income(state, boolean){
      state.page3 = boolean;
    },
    workMouseChange(state, str){
      state.workMouseOn = str;
    },
    modeEdit(state, str) {
      state.mode = str;
    },
    idSave(state, str) {
      state.commentId = str;
    }
  },
  actions: {
  },
  modules: {
  }
})
