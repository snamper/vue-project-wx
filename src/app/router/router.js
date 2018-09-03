import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from "../plugins/page"
import Default404 from '../components/default/404.vue'
import Default from '../components/statistics/statistics-login/statistics-login.vue'
import Statistics from '../components/statistics/statistics-index/statistics-index.vue'
import ComponentsRouter from '../components/components'

Vue.use(VueRouter);


// 然后定义路由(routes)，components还可以是Vue.extend()创建的
let routes = [
    { path: '/', component: Statistics,meta:{title:'页面404'} },
];
routes=routes.concat(ComponentsRouter);
let router=new VueRouter({
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    beforeEach:function(to,from,next){
        debugger
        // window.scrollTo(0,0);
    },
    afterEach:function () {
    }

});
router.afterEach((to, from) => {
    Vue.page.setTitle("牧羊少年app统计分析");
    // ...
})
// router.beforeEach((to, from, next) => {
//     if(localStorage.getItem('statistics')){
//         next('/statistics')
//     }else {
//         next()
//
//     }
//
// })
// router.afterEach(function (to, from) {
//    Vue.page.setTitle(to.meta.title);
// })

export default router;