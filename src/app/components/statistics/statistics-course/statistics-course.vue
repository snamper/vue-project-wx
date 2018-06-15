
<template>
    <div class="statistics-course">
        <div class='head flex'>
            <img src="../../../../images/statistics/课堂.svg" alt="">
            <span>App-课程售出统计</span>
        </div>
        <div class='all'>
            <div class='person'>累计购买次数</div>
            <div class='number flex'><span>20,000</span>
                <!--<i class='icon anticon icon-arrowup'></i>-->
            </div>
        </div>
        <div class='terrace flex'>
            <div class='terrace-item'>
                <div class='title'>
                    <img src="../../../../images/statistics/video.svg" alt="">
                </div>
                <div class='disc'>
                    <span>视频</span>
                    <span>300次</span>
                </div>
            </div>
            <div class='terrace-item'>
                <div class='title'>
                    <img src="../../../../images/statistics/audio.svg" alt="">
                </div>
                <div class='disc'>
                    <span>音频</span>
                    <span>300次</span>
                </div>
            </div>
            <div class='terrace-item'>
                <div class='title'>
                    <img src="../../../../images/statistics/Facetime.svg" alt="">
                </div>
                <div class='disc'>
                    <span>直播</span>
                    <span>300次</span>
                </div>
            </div>
        </div>
        <div class='top-10'>
            <div class='title flex'>
                <div class='flex name'>
                    <img src="../../../../images/statistics/排行榜1.svg" alt="">
                    <span>课程销售TOP10</span>
                </div>
                <div class='more' @click='lookMore()'>查看更多</div>
            </div>
            <div class='sort-list'>
                <div class='sort-item flex' v-for='(item,index) in new Array(10)' @click='goDetail()'>
                    <div class='type'>
                        <img v-if='index/2==1'
                             src="https://tonnyue.oss-cn-beijing.aliyuncs.com/img/5ae4617661105.jpg">
                        <img v-if='index/2!=1'
                        src="https://tonnyue.oss-cn-beijing.aliyuncs.com/img/5ae4703c966bb.jpg">
                    </div>
                    <div class='betweet'>
                        <div class='name flex'>
                            <span>{{index+1}}.小兔子睡不着</span>
                            <img src="../../../../images/statistics/热度.svg" alt="">
                            <span class='degree'>220次</span>
                        </div>
                        <div class='bottom flex'>
                            <div class='disc flex'>
                                <img src="../../../../images/statistics/老师.svg" alt="">
                                <span>阮一峰</span>
                            </div>
                            <div class='disc flex'>
                                <img src="../../../../images/statistics/存货价格2.svg" alt="">
                                <span>9.90</span>
                            </div>
                        </div>
                        <div class='time flex'>
                            <i class='icon anticon icon-clockcircleo'></i>
                            <span>2018-5-10 8:00</span>
                        </div>
                    </div>
                    <div class='go-detail flex'>
                        <i class='icon anticon icon-right'></i>
                    </div>
                </div>
            </div>

        </div>
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
            lookMore(){
                var self=this;
                self.$router.push({path: '/statistics/statistics-course-list', query: {type: "1"}});
            },
            goDetail(type){
                var self = this
                self.$router.push({path: '/statistics/statistics-course-detail', query: {type: "1"}});
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-course.less";
</style>