
<template>
    <div class="statistics-course" v-if='!isLoading'>
        <div>
            <div class='plain' id='plain'></div>
            <div >
                <div class='statistics-item' @click='goDetail(6)'>
                    <div class='title'>
                        <span class='name'>书籍转发次数:</span>
                        <span class='number active'>{{shareData.book.share_counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{shareData.book.share_friends_counts}} / {{shareData.book.share_circle_counts}}</div>
                            <div class='name'>好友/朋友圈:</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.book.see_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>浏览数</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.book.download_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>App下载数</div>
                        </div>
                    </div>
                    <i class='icon anticon icon-right'></i>
                </div>
                <div class='statistics-item' @click='goDetail(1)'>
                    <div class='title'>
                        <span class='name'>文章转发次数:</span>
                        <span class='number active'>{{shareData.article.share_counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{shareData.article.share_friends_counts}} / {{shareData.article.share_circle_counts}}</div>
                            <div class='name'>好友/朋友圈:</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.article.see_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>浏览数</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.article.download_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>App下载数</div>
                        </div>
                    </div>
                    <i class='icon anticon icon-right'></i>
                </div>
                <div class='statistics-item' @click='goDetail(2)'>
                    <div class='title'>
                        <span class='name'>每周一书书籍转发次数:</span>
                        <span class='number active'>{{shareData.every_week.share_counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{shareData.every_week.share_friends_counts}} / {{shareData.every_week.share_circle_counts}}</div>
                            <div class='name'>好友/朋友圈:</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.every_week.see_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>浏览数</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.every_week.download_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>App下载数</div>
                        </div>
                    </div>
                    <i class='icon anticon icon-right'></i>
                </div>
                <div class='statistics-item' @click='goDetail(3)'>
                    <div class='title'>
                        <span class='name'>视频转发次数:</span>
                        <span class='number active'>{{shareData.video.share_counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{shareData.video.share_friends_counts}} / {{shareData.video.share_circle_counts}}</div>
                            <div class='name'>好友/朋友圈:</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.video.see_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>浏览数</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.video.download_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>App下载数</div>
                        </div>
                    </div>
                    <i class='icon anticon icon-right'></i>
                </div>
                <div class='statistics-item' @click='goDetail(7)'>
                    <div class='title'>
                        <span class='name'>送绘本转发次数:</span>
                        <span class='number active'>{{shareData.givebook.share_counts}}<span class='danwei'>次</span></span>
                    </div>
                    <div class='detail flex'>
                        <div class='item'>
                            <div class='number active'>{{shareData.givebook.share_friends_counts}} / {{shareData.givebook.share_circle_counts}}</div>
                            <div class='name'>好友/朋友圈:</div>

                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.givebook.see_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>浏览数</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.givebook.register_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>App注册数</div>
                        </div>
                        <div class='item'>
                            <div class='number'>{{shareData.givebook.download_counts}}<span class='danwei'>次</span></div>
                            <div class='name'>App下载数</div>
                        </div>
                    </div>
                    <i class='icon anticon icon-right'></i>
                </div>
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
                isLoading: true
            }
        },
        created() {
            this.getshareDataAll()
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            goDetail(type){
                var self = this
                self.$router.push({path: '/statistics/statistics-share-list', query:
                        {type: type}});
            },
            getshareDataAll(){
                var self = this;
                let loading=this.$loading
                let toast=this.$toast;
                api.shareList().then(function (data) {
                    if(data.code == 200){
                        self.shareData = data.data
                        self.isLoading = false

                        setTimeout(function () {
                            self.plainChars()
                            var scrollTop = sessionStorage.getItem('scrollTop')
                            $('.statistics-course').scroll(function (e) {
                                var scrollTop = $('.statistics-course').scrollTop();
                                console.log(scrollTop)
                                sessionStorage.setItem('scrollTop',scrollTop)
                            })
                            console.log(scrollTop)
                            $('.statistics-course').scrollTop(scrollTop)
                        })
                    }else{
                        toast.show({
                            showTime: 2,
                            message: data.msg,
                            style:'error'
                        });
                    }
                })
            },
            plainChars(){
                var self = this
                var Highcharts = require('highcharts');
                var data1 = [
                    self.shareData.book.share_counts,
                    self.shareData.article.share_counts,
                    self.shareData.every_week.share_counts,
                    self.shareData.video.share_counts,
                    self.shareData.givebook.share_counts,
                ]
                var data2 = [
                    self.shareData.book.download_counts,
                    self.shareData.article.download_counts,
                    self.shareData.every_week.download_counts,
                    self.shareData.video.download_counts,
                    self.shareData.givebook.download_counts,
                ]
                var chart = Highcharts.chart('plain',{
                    // legend: {
                    //     enabled: false
                    // },
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: '书籍转发统计'
                    },
                    xAxis: {
                        categories: [
                            '书籍','文章','每周一书','视频','送绘本'
                        ],
                        crosshair: true
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '(次)',
                            align: 'high'
                        }
                    },
                    tooltip: {
                        // head + 每个 point + footer 拼接成完整的 table
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y} 次</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {

                        column: {
                            borderWidth: 0,
                            // colors: ['#e08745','#f2f2f2'],
                        }
                    },
                    series: [{
                        name: '转发数',
                        // colors: ['#e08745','#f2f2f2','red'],
                        color : '#2b908f ',
                        colorByPoint: false,
                        data: data1,
                    },
                        {
                            name: '下载数',
                            color : '#f45b5b',
                            // colors: ['#e08745','#f2f2f2','red'],
                            colorByPoint: false,
                            data: data2
                        }]
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
    @import "statistics-share.less";
</style>