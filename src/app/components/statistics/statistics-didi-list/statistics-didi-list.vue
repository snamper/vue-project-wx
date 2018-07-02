
<template>
    <div class="statistics-didi-list" >
        <div class='title flex'>
            <div class=''>活动简介</div>
            <div>注册用户</div>
            <div>登录用户</div>
            <!--<div>转化率</div>-->
            <div>拉新成本</div>
        </div>
        <div class='content'>
            <div class='active-list'>
                <div class='active-item' v-for='item in typeList'>
                    <div class='preview flex' @click='deploy(item)'>
                        <div class='fd flex'>
                            <div class='name'>滴滴打车</div>
                            <div class='time'>2018.6.10-2018.6.20</div>
                        </div>
                        <div class='sd flex'>100</div>
                        <div class='td flex'>80</div>
                        <!--<div class='fo flex'>80%</div>-->
                        <div class='fi flex'>50.00/人</div>
                        <i class='iconfont icon-arrowB' :class='{"translate-180":item.detail}'></i>
                    </div>
                    <div class='detail' v-bind:class='{"detail-show":item.detail}'>
                        <div class='detail-item flex'>
                            <div class='type'>
                                <span class='text'>转化率</span>
                            </div>
                            <div class='type'>
                                <span class='text'>80%</span>
                            </div>
                        </div>
                        <div class='detail-item flex'>
                            <div class='type'>
                                <span class='text'>易拉宝</span>
                                <span class='number'>50</span>
                            </div>
                            <div class='type'>
                                <span class='text'>刮刮卡</span>
                                <span class='number'>6</span>
                            </div>
                            <div class='type'>
                                <span class='text'>分享链接</span>
                                <span class='number'>10</span>
                            </div>
                        </div>
                        <div class='detail-item flex'>
                            <div class='type'>
                                <span class='text'>次日留存</span>
                            </div>
                            <div class='type'>
                                <span class='text'>80%</span>
                            </div>
                        </div>
                        <div class='detail-item flex'>
                            <div class='type'>
                                <span class='text'>次日留存</span>
                            </div>
                            <div class='type'>
                                <span class='text'>80%</span>
                            </div>
                        </div>
                        <div class='detail-item flex'>
                            <div class='type'>
                                <span class='text'>7日留存</span>
                            </div>
                            <div class='type'>
                                <span class='text'>80%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class='active-list'>-->
            <!--<div class='active-item flex' v-for='item in new Array(18)'>-->
                <!--<div class='left'>-->
                    <!--<div class='name'>滴滴学生</div>-->
                    <!--<div class='detail flex'>-->
                        <!--<div class='type'>-->
                            <!--<span class='text'>易拉宝</span>-->
                            <!--<span class='number'>50</span>-->
                        <!--</div>-->
                        <!--<div class='type'>-->
                            <!--<span class='text'>刮刮卡</span>-->
                            <!--<span class='number'>6</span>-->
                        <!--</div>-->
                        <!--<div class='type'>-->
                            <!--<span class='text'>分享链接</span>-->
                            <!--<span class='number'>10</span>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class='time'>2018-6-10 至 2018-6-13</div>-->
                <!--</div>-->
                <!--<div class='right flex'>-->
                    <!--<span>总计</span>-->
                    <!--<span>66</span>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div v-listmore="list" class='load-more'>-->
            <!--<div v-if='list.hasMore'>上拉加载更多</div>-->
            <!--<div v-if='!list.hasMore'>没有更多内容</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import api from "../../../api/statistics-api";
    export default {
        name: 'statistics222',
        data: function () {
            return {
                selectVal:{val:1,label:'开年'},
                selectArr: [{val:1,label:'开年'},{val:2,label:'开年2'},{val:3,label:'开3'}],
                show:false,
                params:{
                    limit:10,
                    page:1,
                },
                cardData:{},
                list:{
                    dataList:[]
                },
                loadData:true,
                typeList:[
                    {
                        title:'课程转发',
                        detail:false,
                    },
                    {
                        title:'书籍转发',
                        detail:false,
                    },
                    {
                        title:'配音转发',
                        detail:false,
                    },
                    {
                        title:'课程转发',
                        detail:false,
                    },
                    {
                        title:'书籍转发',
                        detail:false,
                    },
                    {
                        title:'配音转发',
                        detail:false,
                    },
                    {
                        title:'课程转发',
                        detail:false,
                    },
                    {
                        title:'书籍转发',
                        detail:false,
                    },
                    {
                        title:'配音转发',
                        detail:false,
                    }
                ]
            }
        },
        created() {
            this.getCardData()
        },
        components:{
        },
        methods: {
            goDetial(){

                this.$router.push({path:'/statistics/statistics-active-hour-detail',query: {id:1}});
            },
            getCardData(){
                let self = this
                let loading=this.$loading
                let toast=this.$toast
                self.list=self.$list('active',function () {
                    //异步加载数据
                    loading.show('加载中...')
                    console.log(self.list)
                    return new Promise((resolve) => {
                        setTimeout(function () {
                            resolve({
                                total: '22',
                                list: [{x:'111111'},{x:'22222'}]
                            })
                            loading.hide()
                            self.isLoading = false;
                        },1000)

                    })

                });
                this.list.init(
                    {
                        limit: 10,
                        page: 1
                    }
                );
            },
            deploy(item){
                var self = this
                if(item.detail){
                    self.typeList.forEach(e => {
                        e.detail = false
                    })
                    item.detail = false
                }else {
                    self.typeList.forEach(e => {
                        e.detail = false
                    })
                    item.detail = true
                }
            },
        },

    }
</script>

<style lang="less" scoped>
    @import "statistics-didi-list.less";
</style>