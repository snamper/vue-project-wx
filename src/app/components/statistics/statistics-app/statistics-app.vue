
<template>
    <div class="statistics-app " v-if='!loadData'>
        <div class='head'>
            <i class='icon anticon icon-areachart'></i>
            <span>App-数据统计</span>
        </div>
        <div class='flex flex-s'>
            <div class='all'>
                <div class='person'>注册用户</div>
                <div class='number flex'><span v-text='indexData.total_reg'>20,000</span>
                    <!--<i class='icon anticon icon-arrowup'></i>-->
                </div>
            </div>
            <div class='all'>
                <div class='person'>登录用户</div>
                <div class='number flex'><span v-text='indexData.member_cate.member_total_login'>20,000</span>
                    <!--<i class='icon anticon icon-arrowup'></i>-->
                </div>
            </div>
        </div>

        <div class='terrace flex'>
            <div class='terrace-item'>
                <div class='title'>iPhone</div>
                <div class='ios rectangle'>
                    <div class='number flex'>
                        <span v-text='indexData.member_cate.iphone'>1113</span>
                        <!--<i class='icon anticon icon-arrowup'></i>-->
                        <span class='unit'>人</span>
                    </div>
                    <div class='scale' v-text='indexData.member_cate.iphone_ratio + "%"'>3%</div>
                </div>
            </div>
            <div class='terrace-item'>
                <div class='title'>Android</div>
                <div class='android rectangle'>
                    <div class='number flex'>
                        <span v-text='indexData.member_cate.anzhuo'>1113</span>
                        <!--<i class='icon anticon icon-arrowup'></i>-->
                        <span class='unit'>人</span>
                    </div>
                    <div class='scale' v-text='indexData.member_cate.anzhuo_ratio + "%"'>3%</div>
                </div>
            </div>
            <div class='terrace-item'>
                <div class='title'>iPad</div>
                <div class='ipad rectangle'>
                    <div class='number flex'>
                        <span v-text='indexData.member_cate.ipad'>1113</span>
                        <!--<i class='icon anticon icon-arrowup'></i>-->
                        <span class='unit'>人</span>
                    </div>
                    <div class='scale' v-text='indexData.member_cate.ipad_ratio + "%"'>3%</div>
                </div>
            </div>
        </div>
        <div class='today-data'>
            <div class='data-item' @click='goDetail(1)'>
                <div class='title flex'>
                    <span class='left'>新增用户</span>
                </div>
                <div class='detail flex'>
                    <div class='number'>
                        <span>昨日</span>
                        <span v-text='indexData.yesterday_add_list'>30人</span>
                    </div>
                </div>
                <i class='icon anticon icon-right'></i>
            </div>
            <div class='data-item' @click='goDetail(3)'>
                <div class='title flex'>
                    <span class='left'>活跃度</span>
                </div>
                <div class='detail flex'>
                    <div class='number'>
                        <span>昨日</span>
                        <span>uv:{{indexData.uv}}</span>
                        <span>pv:{{indexData.pv}}</span>
                        <!--<span v-text='indexData.yesterday_login_list'>30人</span>-->
                    </div>
                </div>
                <i class='icon anticon icon-right'></i>
            </div>
            <div class='data-item' @click='goDetail(4)'>
                <div class='title flex'>
                    <span class='left'>留存率</span>
                </div>
                <div class='detail flex'>
                    <div class='number'>
                        <span>昨日</span>
                        <span v-text='indexData.member_retain'>75%</span>
                    </div>
                </div>
                <i class='icon anticon icon-right'></i>
            </div>
            <div class='data-item' @click='goDetail(5)'>
                <div class='title flex'>
                    <span class='left'>转发统计</span>
                </div>
                <!--<div class='detail flex'>-->
                    <!--<div class='number'>-->
                        <!--<span>昨日</span>-->
                        <!--<span v-text='indexData.member_retain'>75%</span>-->
                    <!--</div>-->
                <!--</div>-->
                <i class='icon anticon icon-right'></i>
            </div>
        </div>
        <!--<div class='today-data'>-->
            <!--<div class='data-item' @click='goDetail(1)'>-->
                <!--<div class='title flex'>-->
                    <!--<span class='left'>今日新增用户</span>-->
                    <!--<span>101人</span>-->
                <!--</div>-->
                <!--<div class='detail flex'>-->
                    <!--<div class='number'>-->
                        <!--<span>iPhone</span>-->
                        <!--<span>52</span>-->
                    <!--</div>-->
                    <!--<div class='number'>-->
                        <!--<span>Android</span>-->
                        <!--<span>19</span>-->
                    <!--</div>-->
                    <!--<div class='number'>-->
                        <!--<span>iPad</span>-->
                        <!--<span>30</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<i class='icon anticon icon-right'></i>-->
            <!--</div>-->
            <!--<div class='data-item' @click='goDetail(2)'>-->
                <!--<div class='title flex'>-->
                    <!--<span class='left'>今日登录次数</span>-->
                    <!--<span>101人</span>-->
                <!--</div>-->
                <!--<div class='detail flex'>-->
                    <!--<div class='number'>-->
                        <!--<span>iPhone</span>-->
                        <!--<span>52</span>-->
                    <!--</div>-->
                    <!--<div class='number'>-->
                        <!--<span>Android</span>-->
                        <!--<span>19</span>-->
                    <!--</div>-->
                    <!--<div class='number'>-->
                        <!--<span>iPad</span>-->
                        <!--<span>30</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<i class='icon anticon icon-right'></i>-->
            <!--</div>-->
            <!--<div class='data-item' @click='goDetail(3)'>-->
                <!--<div class='title flex'>-->
                    <!--<span class='left'>今日分时段日活</span>-->
                    <!--<span>101人</span>-->
                <!--</div>-->
                <!--<div class='detail flex'>-->
                    <!--<div class='number'>-->
                        <!--<span>iPhone</span>-->
                        <!--<span>521</span>-->
                    <!--</div>-->
                    <!--<div class='number'>-->
                        <!--<span>Android</span>-->
                        <!--<span>19</span>-->
                    <!--</div>-->
                    <!--<div class='number'>-->
                        <!--<span>iPad</span>-->
                        <!--<span>30</span>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<i class='icon anticon icon-right'></i>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import api from '../../../api/statistics-api'
    export default {
        name: 'statistics222',
        data() {
            return {
                loadData: true
            }
        },
        created() {
            //页面创建完成后
            this.getData()
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
                    case 4:
                        self.$router.push({path: '/statistics/statistics-retention-rote', query: {type: "1"}});
                        break;
                    case 5:
                        self.$router.push({path: '/statistics/statistics-relay-detail', query: {type: "1"}});
                        break;
                }
            },
            getData(){
                let self = this
                let loading=this.$loading
                let toast=this.$toast
                loading.show('加载中...')
                self.loadData = true
                api.index().then(function (data) {
                    if(data.code == 200){
                        self.indexData = data.data
                        console.log(data)
                        loading.hide()
                        self.isLoading = false;
                    }else{
                        toast.show({
                            showTime: 2,
                            message: data.msg,
                            style:'error'
                        });
                        loading.hide()
                    }
                    self.loadData = false

                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-app.less";
</style>