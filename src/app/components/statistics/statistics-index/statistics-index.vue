
<template>
    <div class="statistics">
        <div class='title'>牧羊少年统计分析</div>
        <div class='banner'>
            <img src="../../../../images/statistics/logo.jpg" alt="">
        </div>
        <div class='subjuct flex'>
            <div class='subject-item' @click='goApp(1)'>
                <div class='icon'>
                    <i class='icon anticon icon-appstore-o font-32'></i>
                </div>
                <div class='title'>App统计</div>
            </div>
            <div class='subject-item' @click='goApp(2)'>
                <div class='icon'>
                    <i class='icon anticon icon-idcard font-32'></i>
                </div>
                <div class='title'>刮刮卡片统计</div>
            </div>
            <div class='subject-item' @click='goApp(3)'>
                <div class='icon'>
                    <i class='icon anticon icon-team font-32 '></i>
                </div>
                <div class='title'>课程统计</div>
            </div>
            <div class='subject-item' @click='goApp(4)'>
                <div class='icon'>
                    <i class='icon anticon icon-rest font-32 '></i>
                </div>

                    <div class='title'>运营活动统计</div>
            </div>
            <div class='subject-item' @click='goApp(5)'>
                <div class='icon'>
                    <i class='icon anticon icon-redenvelopes font-32 '></i>
                </div>

                <div class='title'>财务统计</div>
            </div>
            <div class='subject-item' @click='goApp(6)'>
                <div class='icon'>
                    <i class='icon anticon icon-book font-32 '></i>
                </div>

                <div class='title'>纸质书统计</div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'statistics',
        data() {
            return {
            }
        },
        created() {
            //页面创建完成后
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            goApp(type){
                switch (type){
                    case 1:
                        this.$router.push({path: '/statistics/statistics-app', query: {id: "1"}});
                        break;
                    case 2:
                        this.$router.push({path: '/statistics/statistics-card', query: {id: "1"}});
                        break;
                    case 3:
                        this.$router.push({path: '/statistics/statistics-course', query: {id: "1"}});
                        break;
                    case 4:
                        this.$router.push({path: '/statistics/statistics-plan', query: {id: "1"}});
                        break;
                    default:
                        this.$router.push({path: '/statistics/statistics-ing', query: {type: "1"}});
                }

            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./statistics-index.less";
</style>