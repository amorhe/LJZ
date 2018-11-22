import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    // count:0,
    pageIndex:''
  },
  mutations:{
    // increment:state => state.count ++,
    // decrement:state => state.count --,
    jump:(state,res) => state.pageIndex = res.data.news.pageIndex
  }
})
