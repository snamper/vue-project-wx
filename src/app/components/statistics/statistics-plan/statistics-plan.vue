
<template>
    <div class="statistics-plan">
        <div class='head'>
            <div class='title flex'>
                <i class='icon anticon icon-linechart'></i>
                <span>运营活动拉新统计</span>
            </div>
            <div class='number'>288</div>
            <div class=''>总拉新</div>
        </div>
        <div class='detail'>
            <div class='title flex'>
                <i class='icon anticon icon-filetext1'></i>
                <span>运营活动拉新详细</span>
            </div>
            <div class='statistics-list'>
                <div class='statistics-item flex' @click='goDetail()'>
                    <div class='logo'>
                        <img src="http://www.didiglobal.com/dist/media/dd.0a3fc1e7.svg" alt="">
                    </div>
                    <div class='right'>
                        <div class='top flex'>
                            <span class='name flex'>
                                <span>滴滴打车</span>
                                <span class='order'>10次</span></span>
                            <span class='total'>+58</span>
                        </div>
                        <div class='bottom flex'>
                            <div class='ditch ylb'>
                                <span>易拉宝</span>
                                <span>10</span>
                            </div>
                            <div class='ditch ylb'>
                                <span>刮刮卡</span>
                                <span>18</span>
                            </div>
                            <div class='ditch ylb'>
                                <span>分享链接</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                    <div class='go-detail'>
                        <i class='icon anticon icon-right'></i>
                    </div>
                </div>
                <div class='statistics-item flex'>
                    <div class='logo'>
                        <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=12c6fdabed1190ef05fb95ddfe1a9df7/314e251f95cad1c83075d161753e6709c83d51ad.jpg" alt="">
                    </div>
                    <div class='right'>
                        <div class='top flex'>
                            <span class='name flex'>
                                <span>电视台</span>
                                <span class='order'>2次</span></span>
                            <span class='total'>+58</span>
                        </div>
                        <div class='bottom flex'>
                            <div class='ditch ylb'>
                                <span>易拉宝</span>
                                <span>10</span>
                            </div>
                            <div class='ditch ylb'>
                                <span>刮刮卡</span>
                                <span>18</span>
                            </div>
                            <div class='ditch ylb'>
                                <span>分享链接</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                    <div class='go-detail'>
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
            goDetail(type){
                var self = this
                self.$router.push({path: '/statistics/statistics-didi-list', query: {type: "1"}});
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-plan.less";
</style>