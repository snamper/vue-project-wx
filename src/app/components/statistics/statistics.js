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
import statisticsCourse from './statistics-course/statistics-course.vue';
import statisticsPlan from './statistics-plan/statistics-plan.vue';
import statisticsDIdiList from './statistics-didi-list/statistics-didi-list.vue';
import statisticsCourseList from './statistics-course-list/statistics-course-list.vue';
import statisticsCourseDetail from './statistics-course-detail/statistics-course-detail.vue';
import structureIng from '../../plugins/structure-ing/structure-ing.vue';
import statisticsRetentionRote from './statistics-retention-rote/statistics-retention-rote.vue';
import statisticsRelayDetail from './statistics-relay-detail/statistics-relay-detail.vue';
import statisticsBook from './statistics-book/statistics-book.vue';
import statisticsBookDetail from './statistics-book-detail/statistics-book-detail.vue';
import statisticsShare from './statistics-share/statistics-share.vue';
import statisticsShareList from './statistics-share-list/statistics-share-list.vue';
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
        // beforeEnter: (to, from, next) => {
        //     debugger
        //     next()
        //     // if(localStorage.getItem('statistics')){
        //     //     next()
        //     // }else {
        //     //     next('/')
        //     // }
        // },
        children: [
            {path:'',component:statisticsIndex},
            {path:'statistics-app',component:statisticsApp},
            {path:'statistics-app-detail',component:statisticsAppDetail},
            {path:'statistics-card-detail',component:statisticsCardDetail},
            {path:'statistics-active-detail',component:statisticsActiveDetail,meta:{title:12131}},
            {path:'statistics-active-hour-detail',component:statisticsActiveHourDetail},
            {path:'statistics-login-detail',component:statisticsLoginDetail},
            {path:'statistics-card',component:statisticsCard},
            {path:'statistics-course',component:statisticsCourse},
            {path:'statistics-plan',component:statisticsPlan},
            {path:'statistics-didi-list',component:statisticsDIdiList},
            {path:'statistics-course-list',component:statisticsCourseList},
            {path:'statistics-course-detail',component:statisticsCourseDetail},
            {path:'statistics-ing',component:structureIng},
            {path:'statistics-retention-rote',component:statisticsRetentionRote},
            {path:'statistics-relay-detail',component:statisticsRelayDetail},
            {path:'statistics-book',component:statisticsBook},
            {path:'statistics-book-detail',component:statisticsBookDetail},
            {path:'statistics-share',component:statisticsShare, meta: { scrollToTop: true }},
            {path:'statistics-share-list',component:statisticsShareList,},
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