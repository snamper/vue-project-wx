
<template>
    <div class="statistics-app-detail" v-if='activeData.length>0'>
        <div class='search-bar'>
            <div class='bar flex'>
                <div class='left flex'>
                    <div class='text'>当前显示:</div>
                    <div class='current-params'>
                        <span>2018.1.10~2018.6.10</span>
                        <span>天</span>
                    </div>
                </div>
                <div class='right flex' @click='search()'>
                    <i class='icon anticon icon-filter'></i>
                    <span>筛选</span>
                </div>
            </div>
            <div class='content' v-if='searchBoxStatus'>
                <div class='params-item'>
                    <p>开始时间</p>
                    <div class='type-box flex'>
                        <span class='type-active'>2018.1.10</span>
                    </div>
                </div>
                <div class='params-item'>
                    <p>结束时间</p>
                    <div class='type-box flex'>
                        <span class='type-active'>2018.1.10</span>
                    </div>
                </div>
                <div class='params-item'>
                    <p>筛选单位</p>
                    <div class='type-box flex'>
                        <span :class="{'type-active' : params.type == 1}" @click='chooseType(1)'>天</span>
                        <span :class="{'type-active' : params.type == 2}" @click='chooseType(2)'>月</span>
                        <span :class="{'type-active' : params.type == 3}" @click='chooseType(3)'>周</span>
                    </div>
                </div>
                <div class='confirm' @click='confirm()'>确认</div>
            </div>

        </div>
        <div class='mask' v-show='searchBoxStatus'></div>
        <div class='data-list'>
            <div class='data-item'
                 @click='deploy(item)'
                 v-for='(item,$index) in typeList'>
                <div class='preview flex'>
                    <div class='left'>
                        <img src="../../../../images/statistics/课程.png" alt="" v-if='item.type == 1'>
                        <img src="../../../../images/statistics/书籍-f.png" alt="" v-if='item.type == 2'>
                        <img src="../../../../images/statistics/配音3.png" alt="" v-if='item.type == 3'>
                        <img src="../../../../images/statistics/shuffling-banner.png" alt="" v-if='item.type == 4'>
                    </div>
                    <div class='right'>
                        <div class='time' v-text='item.title'>2018.5.10</div>
                        <div class='user-total flex'>
                            <span>总数: 100</span>
                        </div>
                    </div>
                    <div class='more flex'>
                        <i class='iconfont icon-arrowB' :class='{"translate-180":item.detail}'></i>
                    </div>
                </div>
                <div class='detail' v-bind:class='{"detail-show":item.detail}'>
                    <div class='detail-item flex'>
                        <span>转发后下载APP并注册次数</span>
                        <span >108</span>
                    </div>
                    <div class='detail-item flex'>
                        <span>转发后点击次数</span>
                        <span>200</span>
                    </div>
                    <div class='detail-item flex'>
                        <span>转发后购买课程次数</span>
                        <span>100</span>
                    </div>

                </div>
            </div>
        </div>
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
                searchBoxStatus:false,
                show:false,
                params:{
                    limit:10,
                    page:1,
                    type: 1,
                },
                cardData:{},
                activeData: [],
                loadData:true,
                iconClass:function (index,item) {



                },
                typeList:[
                    // {
                    //     title:'课程转发',
                    //     detail:false,
                    // },
                    {
                        title:'书籍转发',
                        detail:false,
                        type:2
                    },
                    // {
                    //     title:'配音转发',
                    //     detail:false,
                    // },
                    {
                        title:'Banner转发',
                        detail:false,
                        type: 4
                    }
                ]
            }
        },
        created() {
            this.page.setTitle("app转发情况统计");
            this.getLoginData()
            this.params.month = moment(moment(new Date()).format('YYYY-MM')).format('x')/1000

        },
        components:{
        },
        methods: {
            chooseType(type) {
                console.log(type)
                var self = this;
                this.params.type = type
            },
            search(){
                var self = this;
                self.searchBoxStatus = !self.searchBoxStatus
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
            confirm(){
                var self = this;
                self.searchBoxStatus = false
            },
            goDetial(e){
                this.$router.push({path:'/statistics/statistics-active-hour-detail',query: { day : e.day}});
            },
            getLoginData(){
                console.log(moment(moment(new Date()).format('YYYY-MM')).format('x'))
                let self = this
                let loading=this.$loading
                let toast=this.$toast;
                self.loadData = true;
                loading.show('加载中...')
                api.app_actvie(self.params).then(function (data) {
                    if(data.code == 200){
                        data.data.forEach(e => {
                            e.parseDay = moment(e.day*1000).format('M月DD日')
                            e.detail = false
                        })
                        self.activeData = data.data
                        self.params.month = self.params.month-(28*24*60*60)
                        console.log(self.params)
                    }else{
                        toast.show({
                            showTime: 2,
                            message: data.msg,
                            style:'error'
                        });
                        loading.hide()
                    }
                    self.loadData = false;
                    loading.hide()
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },

    }
</script>

<style lang="less" scoped>
    @import "statistics-relay-detail.less";
</style>