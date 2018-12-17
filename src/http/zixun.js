import ajax from './ajax'
import {BASE_URL} from "./BASE_URL";


//资讯回复列表
export const choiceList = (bookId,subjectId) => ajax(BASE_URL + 'book/choiceTextbook',{bookId,subjectId});


//资讯列表
export const list = (pageNum,pageSize) => ajax(BASE_URL + 'article/newsList',{pageNum,pageSize});


//资讯详情
export const detail = (id) => ajax(BASE_URL + 'article/newsDetail',{id})
