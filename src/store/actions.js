import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import {
  LOGIN,
  LOGINOUT
} from "./mutation-types";

import {
  doLoginOut,
  doLogin
} from '../http/login'


export default {
  async login({commit, state},payload) {
    const result = await doLogin(payload);
    let userInfo = result.data;
    console.log(result)
    if (result.code === 0){
      commit(LOGIN, {userInfo})
    }else {
      Notify({
        mes:result.message,
        timeout: 3000
      })
    }

  },

  async LoginOut({commit, state},payload) {
    let result = await doLoginOut(payload);
    console.log(result);
    if (result.code === 1){
      let token = '';
      commit(LOGINOUT, {token})
    } else {
      Notify({
        mes:result.message,
        timeout: 3000
      })
    }

  },
}

