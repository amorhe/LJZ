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

Vue.config.productionTip = false;
Vue.prototype.$ajax = api;
Vue.use(Mint)
Vue.use(Vuex);
Vue.use(Mui);
Vue.use(VueAwesomeSwiper)
Vue.use(base)

router.beforeEach((to,from,next)=>{
  // Indicator.open();
//根据字段判断是否路由过滤
  if (to.matched.some(record => record.meta.auth)) {
    if (getToken() !== null) {
      next()
    } else {
      //防止无限循环
      if (to.name === 'loginWays') {
        next();
        return
      }
      next({
        path: '/loginWays',
      });
    }
  } else {
    next()//若点击的是不需要验证的页面,则进行正常的路由跳转
  }
})

router.afterEach(route => {
  // Indicator.close()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
