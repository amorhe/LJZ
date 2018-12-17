import {
  LOGIN,
  LOGINOUT
} from "./mutation-types";

export default {
  [LOGIN](state, {userInfo}) {
    console.log(userInfo)
    localStorage.token = userInfo.token;
    state.userInfo = userInfo
  },
  [LOGINOUT](state, {token}) {
    // state.registered = registered
  }
}
