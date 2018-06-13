
import http from './http'

export default {
    //热门列表
    test(params){
        return http.get("https://yueyue.arseeds.com/home/tongji/index",params);
    },
}