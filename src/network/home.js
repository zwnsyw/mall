import {request} from "./request"
// home页面的所有网络请求全部面向我，home不需要关心  url ，会提供home所需要的函数，将数据传递给他
// 便于项目的维护，

export function getHomeMultidata(){
   return request({
       url:"/home/multidata"
    })
};

export function getHomeGoods(type,page){
    return request({
        url: '/home/data',
        params:{
            type,
            page
        }
    })
}