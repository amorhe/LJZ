import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import api from '@/http/api.js'
import Mint from 'mint-ui'
import {Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mui from 'vue-awesome-mui';
import base from '@/http/base.js'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.px.css'

Vue.config.productionTip = false;
Vue.prototype.$ajax = api;
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(Mui);
Vue.use(VueAwesomeSwiper)
Vue.use(YDUI)
Vue.use(base)

// 设置路由拦截
// 在vue-router的全局钩子中设置拦截
// 每个路由皆会的钩子函数
// to 进入 from 离开 next 传递
router.beforeEach((to, from, next) => {
  if (!localStorage.token) {
    if (to.path == '/phoneLogin' || to.path == '/loginWays') {
      next()
    } else {
      next('/phoneLogin')
    }
  } else {
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
