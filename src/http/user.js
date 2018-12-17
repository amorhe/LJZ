import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//查询用户基本信息
export const useInfo = () => ajax(BASE_URL + 'user/getUserInfo',{});

//修改用户基本信息
export const updateUser = (data) => ajax(BASE_URL + ' user/updateUserInfo',{data})

//用户绑定 手机号 | QQ | 微信
export const binding = (account,type,code) => ajax(BASE_URL + 'user/bindingAccount',{account,type,code})


//获取验证码
// export const getCode = (phone,type) => ajax(BASE_URL + 'common/getMsgCode',{phone,type})
