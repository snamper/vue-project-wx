
<template>
    <div class="statistics-course" >
        <div class='mask' v-show='searchBoxStatus'></div>
        <div>
            <div class='head flex' :class='{"filter": searchBoxStatus}'>
                <img src="../../../../images/statistics/课堂.svg" alt="">
                <span>读书统计</span>
            </div>
            <div >
                <div class='statistics-item'>
                    <div class='title'>
                        <span class='name'>累计书籍阅读次数:</span>
                        <span class='number active'>{{bookData.read.counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{bookData.read.people.total}}<span class='danwei'>人</span></div>
                            <div class='name'>书籍阅读用户总数</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.read.people.ios}}<span class='danwei'>人</span></div>
                            <div class='name'>iPhone</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.read.people.ipad}}<span class='danwei'>人</span></div>
                            <div class='name'>iPad</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.read.people.android}}<span class='danwei'>人</span></div>
                            <div class='name'>Android</div>
                        </div>
                    </div>
                </div>
                <div class='statistics-item'>
                    <div class='title'>
                        <span class='name'>累计音频录制数量:</span>
                        <span class='number active'>{{bookData.audio.counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{bookData.audio.people.total}}<span class='danwei'>人</span></div>
                            <div class='name'>音频录制用户总数</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.audio.people.ios}}<span class='danwei'>人</span></div>
                            <div class='name'>iPhone</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.audio.people.ipad}}<span class='danwei'>人</span></div>
                            <div class='name'>iPad</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.audio.people.android}}<span class='danwei'>人</span></div>
                            <div class='name'>Android</div>
                        </div>
                    </div>
                </div>
                <div class='statistics-item'>
                    <div class='title'>
                        <span class='name'>累计视频录制数量:</span>
                        <span class='number active'>{{bookData.video.counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{bookData.video.people.total}}<span class='danwei'>人</span></div>
                            <div class='name'>视频录制用户总数</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.video.people.ios}}<span class='danwei'>人</span></div>
                            <div class='name'>iPhone</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.video.people.ipad}}<span class='danwei'>人</span></div>
                            <div class='name'>iPad</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{bookData.video.people.android}}<span class='danwei'>人</span></div>
                            <div class='name'>Android</div>
                        </div>
                    </div>
                </div>
            </div>

            <!--<div class='all' :class='{"filter": searchBoxStatus}'>-->
                <!--<div class='person'>所有书本累计阅读次数</div>-->
                <!--<div class='number flex' v-if='bookList.other.bookStatisticsInfo'>-->
                    <!--<span class='text'>uv: </span>-->
                    <!--<span class='quantity' v-text='bookList.other.bookStatisticsInfo.uv'>20,000</span>-->
                    <!--<span class='text'>pv: </span>-->
                    <!--<span class='quantity' v-text='bookList.other.bookStatisticsInfo.pv'>20,000</span>-->
                    <!--&lt;!&ndash;<i class='icon anticon icon-arrowup'></i>&ndash;&gt;-->
                <!--</div>-->
                <!--<div class='number flex audio' v-if='bookList.other.bookStatisticsInfo'>-->
                    <!--<span class='text'>音频uv: </span>-->
                    <!--<span class='quantity' v-text='bookList.other.bookStatisticsInfo.audio_uv'>20,000</span>-->
                    <!--<span class='text'>视频uv: </span>-->
                    <!--<span class='quantity' v-text='bookList.other.bookStatisticsInfo.video_uv'>20,000</span>-->
                    <!--&lt;!&ndash;<i class='icon anticon icon-arrowup'></i>&ndash;&gt;-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class='analyse flex'>-->
            <!--<div class='chart flex'>-->
            <!--<p>3~6岁书籍占比</p>-->
            <!--<div class='device' id='device'></div>-->
            <!--</div>-->
            <!--<div class='chart flex'>-->
            <!--<p>xxx出版社占比</p>-->
            <!--<div class='press' id='press'></div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class='terrace flex' :class='{"filter": searchBoxStatus}' v-if='bookList.other.bookStatisticsInfo'>-->
                <!--<div class='terrace-item' >-->
                    <!--<div class='title'>iPhone</div>-->
                    <!--<div class='ios rectangle'>-->
                        <!--<div class='number flex'>-->
                            <!--<span v-text='bookList.other.bookStatisticsInfo.iphone'>1113</span>-->
                            <!--&lt;!&ndash;<i class='icon anticon icon-arrowup'></i>&ndash;&gt;-->
                            <!--<span class='unit'>人</span>-->
                        <!--</div>-->
                        <!--<div class='scale'>{{bookList.other.bookStatisticsInfo.iphone_bili}}%</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class='terrace-item'>-->
                    <!--<div class='title'>Android</div>-->
                    <!--<div class='android rectangle'>-->
                        <!--<div class='number flex'>-->
                            <!--<span v-text='bookList.other.bookStatisticsInfo.anzhuo'>1113</span>-->
                            <!--&lt;!&ndash;<i class='icon anticon icon-arrowup'></i>&ndash;&gt;-->
                            <!--<span class='unit'>人</span>-->
                        <!--</div>-->
                        <!--<div class='scale'>{{bookList.other.bookStatisticsInfo.anzhuo_bili}}%</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class='terrace-item'>-->
                    <!--<div class='title'>iPad</div>-->
                    <!--<div class='ipad rectangle'>-->
                        <!--<div class='number flex'>-->
                            <!--<span v-text='bookList.other.bookStatisticsInfo.ipad'>1113</span>-->
                            <!--&lt;!&ndash;<i class='icon anticon icon-arrowup'></i>&ndash;&gt;-->
                            <!--<span class='unit'>人</span>-->
                        <!--</div>-->
                        <!--<div class='scale'>{{bookList.other.bookStatisticsInfo.ipad_bili}}%</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div class='top-10'>
                <div class='search-bar' :class='{"fixed": searchBoxStatus}'>
                    <div class='bar flex'>
                        <div class='left flex'>
                            <div class='text'>当前显示:</div>
                            <div class='current-params'>
                                <span v-if='bookList.listParams.book_name'>{{bookList.listParams.book_name}}</span>
                                <span v-if='bookList.listParams.cid'>{{bookList.listParams.cid}}</span>
                                <span v-if='!bookList.listParams.book_name && !bookList.listParams.cid'>全部书籍</span>
                            </div>
                        </div>
                        <div class='right flex' @click='search()'>
                            <i class='icon anticon icon-filter'></i>
                            <span>筛选</span>
                        </div>
                    </div>
                    <div class='content' v-if='searchBoxStatus'>
                        <div class='params-item' v-show='type == 1'>
                            <p>书名</p>
                            <div class='type-box flex'>
                                <input class='input' placeholder='请输入书名' type="text" v-model='keyword' max='2018-06-10'>
                                <i class='iconfont icon-cancel font-11' v-show='keyword' @click='keyword=""'></i>
                                <i class='iconfont icon-csousuo font-11' v-show='!keyword' ></i>
                            </div>
                        </div>
                        <div class='params-item'>
                            <p>出版社</p>
                            <div class='type-box flex'>
                                <span :class="{'type-active' : !press}" @click='press = null'>全部</span>
                                <span :class="{'type-active' : press == item}"
                                      v-for='item in bookCopyright'
                                      @click='choosePress(item)'>{{item}}</span>
                            </div>
                        </div>
                        <div class='confirm' @click='confirm()'>确认</div>
                    </div>
                </div>
                <!--<div class='sort-list'>-->
                <!--<div class='sort-item flex' v-for='(item,index) in new Array(10)' @click = "goDetail()">-->
                <!--<div class='type'>-->
                <!--<img v-if='index/2==1'-->
                <!--src="https://tonnyue.oss-cn-beijing.aliyuncs.com/img/5ae4617661105.jpg">-->
                <!--<img v-if='index/2!=1'-->
                <!--src="https://tonnyue.oss-cn-beijing.aliyuncs.com/img/5ae4703c966bb.jpg">-->
                <!--</div>-->
                <!--<div class='betweet'>-->
                <!--<div class='name flex'>-->
                <!--<span>{{index+1}}.小兔子睡不着</span>-->
                <!--<div class='flex'>-->
                <!--<span>uv/pv: </span>-->
                <!--<span class='degree'>220/400</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class='time flex'>-->
                <!--<span>中信出版社</span>-->
                <!--<span>录音/家长寄语:200/333</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash;<div class='go-detail flex'>&ndash;&gt;-->
                <!--&lt;!&ndash;<i class='icon anticon icon-right'></i>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
                <!--</div>-->

                <div class='list' :class='{"filter": searchBoxStatus}'>
                    <div class='book-head flex'>
                        <span class='fd'>书本信息</span>
                        <span class='sd'>uv/pv</span>
                        <span class='td'>录音</span>
                        <span class='fo'>寄语</span>
                        <span class='fi'>阅后视频</span>
                    </div>
                    <div class='item flex' v-for='(item,$index) in bookList.dataList' @click='goDetail(item)'>
                        <div class='book-info flex fd'>
                            <!--<img :src="item.pic" alt="">-->
                            <div class='text'>
                                <p class='name'>{{$index+1}}.{{item.name}}</p>
                                <p class='cb' v-text='item.cid'>中信出版社</p>
                            </div>
                        </div>
                        <div class='uv sd' v-text='item.uv + "/" +item.pv'></div>
                        <div class='uv td' v-text='item.audio'>80</div>
                        <div class='uv fo' v-text='item.video'>17</div>
                        <div class='uv fi' v-text='item.read_end_video_num'>17</div>
                        <i class='icon anticon icon-right'></i>
                    </div>
                </div>

            </div>
            <div v-listmore="bookList" class='load-more'>
                <div v-if='bookList.hasMore'>上拉加载更多</div>
                <div v-if='!bookList.hasMore'>没有更多内容</div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../../../api/statistics-api'
    export default {
        name: 'statistics',
        data() {
            return {
                selectVal:{val:1,label:'中信出版社'},
                searchBoxStatus:false,
                show:false,
                keyword: null,
                type: 1,
                press: '',
                bookData: {
                    read:{}
                },
                bookList: {
                    dataList:[]
                },
                startTime: moment(moment(new Date()).format('YYYY-MM')).format('x')/1,
                endTime: moment(moment(new Date()).format('YYYY-MM-DD')).format('x')/1,
                selectArr: [
                    {val:0,label:'全部'},
                    {val:1,label:'中信出版社'},
                    {val:2,label:'北京大学出版社'},
                    {val:3,label:'高等教育出版社'}],
                params:{
                    type: 1,
                    // 默认展示当月数据
                    stime: moment(moment(new Date()).format('YYYY-MM')).format('x')/1000,
                    etime: moment(moment(new Date()).format('YYYY-MM-DD')).format('x')/1000
                },
                cardData:{},
                activeData: [],
                iconClass:function (index,item) {
                    if(item.detail){
                        return {
                            ['icon-rili'+parseInt(item.parseDay[2] + item.parseDay[3] -1)]:true
                        }
                    }else {
                        return {
                            ['icon-rili'+parseInt(item.parseDay[2] + item.parseDay[3] -1)]:true
                        }
                    }


                },
                arr:[{detail:false},{detail:false},{detail:false}]
            }
        },
        created() {
            this.getBookData()
            this.getbookCopyright()
            this.getBookDataAll()
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            chooseType(type) {
                var self = this;
                self.type = type
            },
            choosePress(press){
                var self = this;
                self.press = press
            },
            search(){
                var self = this;
                self.searchBoxStatus = !self.searchBoxStatus
            },
            lookMore(){
                var self=this;
                self.$router.push({path: '/statistics/statistics-course-list', query: {type: "1"}});
            },
            goDetail(item){
                var self = this
                self.$router.push({path: '/statistics/statistics-book-detail', query:
                        {params: {id:item.id, name:item.name}}});
            },
            getBookDataAll(){
                var self = this;
                let loading=this.$loading
                let toast=this.$toast;
                api.bookStatisticsAll().then(function (data) {
                    if(data.code == 200){
                        self.bookData = data.data
                    }else{
                        toast.show({
                            showTime: 2,
                            message: data.msg,
                            style:'error'
                        });
                    }
                })
            },
            getBookData(){
                var self = this;
                let loading=this.$loading
                let toast=this.$toast;
                self.loadData = true;
                self.bookList=self.$list(null,function () {
                    loading.show('加载中...')
                    console.log(self.list)
                    return new Promise((resolve) => {
                        api.bookStatistics(self.bookList.listParams).then(function (data) {
                            debugger
                            if(data.code == 200){
                                resolve({
                                    list: data.data.body,
                                    total: data.data.count,
                                    other: {
                                        bookStatisticsInfo: data.data.header
                                    }
                                })
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
                    })

                },{hasRecall:false});
                self.bookList.init(
                    {
                        limit: 10,
                        page: 1,
                    }
                );
            },
            getbookCopyright(){
                var self = this;
                let loading=this.$loading
                let toast=this.$toast;
                api.bookCopyright().then(function (data) {
                    if(data.code == 200){
                        self.bookCopyright = data.data
                    }else{
                        toast.show({
                            showTime: 2,
                            message: data.msg,
                            style:'error'
                        });
                        // loading.hide()
                    }
                    // loading.hide()
                })
            },
            deviceChars(){
                var Highcharts = require('highcharts');
                var chart = Highcharts.chart('device', {
                    chart: {
                        spacing: [0,0,0,0],
                    },
                    title: {
                        floating:true,
                        text: '25%',
                        useHTML: true
                    },
                    credits: {
                        enabled: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    plotOptions: {
                        pie: {
                            colors: ['#e08745','#f2f2f2','red'],
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '70%',
                        name: '市场份额',
                        borderWidth:0,
                        data: [
                            {name:'Firefox',   y: 25.0, url : 'http://bbs.hcharts.cn'},
                            ['IE',       80],
                            // ['IE',       180],
                        ]
                    }]
                }, function(c) { // 图表初始化完毕后的会掉函数
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y:centerY + titleHeight/2
                    });
                });
            },
            pressChars(){
                var Highcharts = require('highcharts');
                var chart = Highcharts.chart('press', {
                    chart: {
                        spacing: [0,0,0,0],
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        floating:true,
                        text: '60%',
                        useHTML: true
                    },
                    tooltip: {
                        enabled: false
                    },
                    plotOptions: {
                        pie: {
                            colors: ['#27bee0','#f2f2f2'],
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            },
                        }
                    },
                    series: [{
                        type: 'pie',
                        innerSize: '70%',
                        name: '市场份额',
                        borderWidth:0,
                        data: [
                            {name:'Firefox',   y: 60, url : 'http://bbs.hcharts.cn'},
                            ['IE',       40],
                        ]
                    }]
                }, function(c) { // 图表初始化完毕后的会掉函数
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    // 动态设置标题位置
                    c.setTitle({
                        y:centerY + titleHeight/2
                    });
                });
            },
            confirm(){
                var self = this;
                self.searchBoxStatus = false
                self.bookList.listParams.cid = self.press
                self.bookList.listParams.book_name = self.keyword
                self.bookList.refresh()
            },
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-book.less";
</style>