
import http from './http'

export default {
    //热门列表
    test(params){
        return http.get("index/index/card",params);
    },
    // 首页
    index(params){
        return http.get("index/index/page1",params);
    },
    app_login(params){
        return http.get("index/index/app_login",params);
    },
    app_actvie(params){
        return http.get("index/index/new_app_active",params);
    },
    activeDetail(params){
        return http.get("index/index/activeDetail",params);
    },
    membeRetain(params){
        return http.get("index/index/membeRetain",params);
    },
    // 读书统计
    bookStatistics(params){
        return http.get("index/book/index",params);
    },
    bookStatisticsAll(params){
        return http.get("index/index/read_v2",params);
    },
    // 读书统计
    bookCopyright(params){
        return http.get("index/book/get_copyright",params);
    },
    // 详情统计
    bookDetail(params){
        return http.get("index/book/read",params);
    },
    // 运营统计
    planList(params){
        return http.get("index/Operate/active_index",params);
    },
    // 转发统计
    shareList(params){
        return http.get("index/Sharecount/index",params);
    },
    shareTypeList(params){
        return http.get("index/Sharecount/listinfo",params);
    },
}