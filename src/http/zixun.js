import ajax from './ajax'
import {BASE_URL} from "./BASE_URL";


//资讯回复列表
export const choiceList = (bookId,subjectId) => ajax(BASE_URL + 'book/choiceTextbook',{bookId,subjectId});


//资讯列表
export const list = (pageNum,pageSize) => ajax(BASE_URL + 'article/newsList',{pageNum,pageSize});


//资讯详情
export const detail = (id) => ajax(BASE_URL + 'article/newsDetail',{id});


//资讯评论列表
export const dynamicList = (aId) => ajax(BASE_URL + 'article/newsCommentList',{aId});

//资讯点赞|取消点赞
export const newsLike = (aId) => ajax(BASE_URL + 'article/newsLike',{aId});


//资讯评论点赞|取消点赞
export const newsCommentLike = (acId) => ajax(BASE_URL + 'article/newsCommentLike',{acId});

