import ajax from './ajax'
import {BASE_URL} from './BASE_URL'

//除自定义计划列表
export const planList = (pageNum,pageSize,type) => ajax(BASE_URL + 'plan/notCustomList',{pageNum,pageSize,type});


