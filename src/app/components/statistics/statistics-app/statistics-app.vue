
<template>
    <div class="statistics-app">
        <div class='head'>
            <i class='icon anticon icon-areachart'></i>
            <span>App-数据统计</span>
        </div>
        <div class='all'>
            <div class='person'>累计用户</div>
            <div class='number flex'><span>20,000</span>
                <!--<i class='icon anticon icon-arrowup'></i>-->
            </div>
        </div>
        <div class='terrace flex'>
            <div class='terrace-item'>
                <div class='title'>iPhone</div>
                <div class='ios rectangle'>
                    <div class='number flex'>
                        <span>1113</span>
                        <!--<i class='icon anticon icon-arrowup'></i>-->
                        <span class='unit'>人</span>
                    </div>
                    <div class='scale'>3%</div>
                </div>
            </div>
            <div class='terrace-item'>
                <div class='title'>Android</div>
                <div class='android rectangle'>
                    <div class='number flex'><span>1113</span>
                        <!--<i class='icon anticon icon-arrowup'></i>-->
                        <span class='unit'>人</span>
                    </div>
                    <div class='scale'>3%</div>
                </div>
            </div>
            <div class='terrace-item'>
                <div class='title'>iPad</div>
                <div class='ipad rectangle'>
                    <div class='number flex'><span>1113</span>
                        <!--<i class='icon anticon icon-arrowup'></i>-->
                        <span class='unit'>人</span>
                    </div>
                    <div class='scale'>3%</div>
                </div>
            </div>
        </div>
        <div class='today-data'>
            <div class='data-item' @click='goDetail(1)'>
                <div class='title flex'>
                    <span class='left'>今日新增用户</span>
                    <span>101人</span>
                </div>
                <div class='detail flex'>
                    <div class='number'>
                        <span>iPhone</span>
                        <span>52</span>
                    </div>
                    <div class='number'>
                        <span>Android</span>
                        <span>19</span>
                    </div>
                    <div class='number'>
                        <span>iPad</span>
                        <span>30</span>
                    </div>
                </div>
                <i class='icon anticon icon-right'></i>
            </div>
            <div class='data-item' @click='goDetail(2)'>
                <div class='title flex'>
                    <span class='left'>今日登录次数</span>
                    <span>101人</span>
                </div>
                <div class='detail flex'>
                    <div class='number'>
                        <span>iPhone</span>
                        <span>52</span>
                    </div>
                    <div class='number'>
                        <span>Android</span>
                        <span>19</span>
                    </div>
                    <div class='number'>
                        <span>iPad</span>
                        <span>30</span>
                    </div>
                </div>
                <i class='icon anticon icon-right'></i>
            </div>
            <div class='data-item' @click='goDetail(3)'>
                <div class='title flex'>
                    <span class='left'>今日分时段日活</span>
                    <span>101人</span>
                </div>
                <div class='detail flex'>
                    <div class='number'>
                        <span>iPhone</span>
                        <span>521</span>
                    </div>
                    <div class='number'>
                        <span>Android</span>
                        <span>19</span>
                    </div>
                    <div class='number'>
                        <span>iPad</span>
                        <span>30</span>
                    </div>
                </div>
                <i class='icon anticon icon-right'></i>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'statistics222',
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
            goDetail(type){
                var self = this
                switch (type){
                    case 1:
                        self.$router.push({path: '/statistics/statistics-app-detail', query: {type: "1"}});
                        break;
                    case 2:
                        self.$router.push({path: '/statistics/statistics-login-detail', query: {type: "1"}});
                        break;
                    case 3:
                        self.$router.push({path: '/statistics/statistics-active-detail', query: {type: "1"}});
                        break;

                }
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-app.less";
</style>