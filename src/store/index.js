import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  pageIndex:''
}
export default new Vuex.Store({
  state,
  mutations:{
    jump:(state,res) => state.pageIndex = res.data.news.pageIndex
  }
})
