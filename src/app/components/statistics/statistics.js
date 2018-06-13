import Vue from 'vue'
import statistics from './statistics.vue';
import statisticsIndex from './statistics-index/statistics-index.vue';
import statisticsLogin from './statistics-login/statistics-login.vue';
import statisticsApp from './statistics-app/statistics-app.vue';
import statisticsCard from './statistics-card/statistics-card.vue';
import statisticsAppDetail from './statistics-app-detail/statistics-app-detail.vue';
import statisticsCardDetail from './statistics-card-detail/statistics-card-detail.vue';
import statisticsActiveDetail from './statistics-active-detail/statistics-active-detail.vue';
import statisticsLoginDetail from './statistics-login-detail/statistics-login-detail.vue';
import statisticsActiveHourDetail from './statistics-active-hour-detail/statistics-active-hour-detail.vue';
// import statisticsLogin from './statistics-login/statistics-login';
// import statisticsApp from './statistics-app/statistics-app';
// import statisticsCard from './statistics-card/statistics-card';
// import statisticsAppDetail from './statistics-app-detail/statistics-app-detail';
// import statisticsCardDetail from './statistics-card-detail/statistics-card-detail';
// import statisticsActiveDetail from './statistics-active-detail/statistics-active-detail';
// import statisticsLoginDetail from './statistics-login-detail/statistics-login-detail';
// import statisticsActiveHourDetail from './statistics-active-hour-detail/statistics-active-hour-detail';
let statisticsModule = [
    { path: '/statistics',component: statistics,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem('statistics')){
                next()
            }else {
                next('/')
            }
        },
        children: [
            {path:'',component:statisticsIndex},
            {path:'statistics-app',component:statisticsApp},
            {path:'statistics-app-detail',component:statisticsAppDetail},
            {path:'statistics-card-detail',component:statisticsCardDetail},
            {path:'statistics-active-detail',component:statisticsActiveDetail},
            {path:'statistics-active-hour-detail',component:statisticsActiveHourDetail},
            {path:'statistics-login-detail',component:statisticsLoginDetail},
            {path:'statistics-card',component:statisticsCard},
        ],
     },
]
// statisticsModule=statisticsModule.concat(
//     statisticsLogin,
//     statisticsApp,
//     statisticsCard,
//     statisticsAppDetail,
//     statisticsCardDetail,
//     statisticsActiveDetail,
//     statisticsLoginDetail,
//     statisticsActiveHourDetail
// );

export default statisticsModule;