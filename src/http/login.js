import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

/*
用户退出*/
export const doLoginOut = ({token}) => ajax(BASE_URL + 'user/loginout',{token});

/*
* 手机号登录
* */
export const doLogin = ({phone,code}) => ajax(BASE_URL + 'user/getLogin',{phone,code});


//qq登录
export const qqLogin = (qqAccount,qqName,qqHeadIcon) => ajax(BASE_URL + 'user/qqLogin',{qqAccount,qqName,qqHeadIcon});


//微信登录
export const wxLogin = (wxAccount,wxName,wxHeadIcon) => ajax(BASE_URL + 'user/wxLogin',{wxAccount,wxName,wxHeadIcon});
