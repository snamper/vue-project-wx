<template>
    <div class="statistics-course">
        <div class='top-10'>
            <div class='title flex'>
                <div class='flex name'>
                    <img src="../../../../images/statistics/排行榜1.svg" alt="">
                    <span>课程销售排行统计</span>
                </div>
                <!--<div class='more'>查看更多</div>-->
            </div>
            <div class='sort-list'>
                <div class='sort-item flex' v-for='(item,index) in new Array(20)' @click='goDetail()'>
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
        <div v-listmore="list" class='load-more'>
            <div v-if='list.hasMore'>上拉加载更多</div>
            <div v-if='!list.hasMore'>没有更多内容</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'statistics',
        data() {
            return {
                list:{
                    dataList:[]
                },
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
                self.$router.push({path: '/statistics/statistics-course-detail', query: {type: "1"}});
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-course-list.less";
</style>