
<template>
    <div class="statistics-active-hour-detail" >
        <div class='head'>
            <i class='icon anticon icon-areachart'></i>
            <span v-if='type == 1'>{{parseInt(day * 1000) | parseDate('M月D日')}}分时段日活</span>
            <span v-if='type != 1'>{{parseInt(day * 1000) | parseDate('YYYY年M月')}}日活</span>
        </div>
        <div>
            <div class='legend flex'>
                <div class='legend-item flex'>
                    <span class='circle ios'></span>
                    <span class='text'>iPhone</span>
                </div>
                <div class='legend-item flex'>
                    <span class='circle android'></span>
                    <span class='text'>Andrior</span>
                </div>
                <div class='legend-item flex'>
                    <span class='circle ipad'></span>
                    <span class='text'>iPad</span>
                </div>
            </div>
            <div class='chart flex'>
                <span>uv</span>
                <div id='container'></div>
            </div>
            <div class='chart flex'>
                <span>pv</span>
                <div id='container2'></div>
            </div>
        </div>

    </div>
</template>

<script>
    import api from '../../../api/statistics-api'
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
                loadData:true
            }
        },
        created() {
            var self = this;
            this.day = this.$router.currentRoute.query.day
            this.type = this.$router.currentRoute.query.type
            this.startTime = this.$router.currentRoute.query.startTime
            this.endTime = this.$router.currentRoute.query.endTime
            this.suiji()
            this.getData()
        },
        mounted() {

        },
        components:{
        },
        methods: {
            suiji(){
                const getNumArray = len => [...new Array(len).keys()];
                let arr = [...new Array(19).keys()].map(
                    function (item) {
                        return parseInt(Math.random()*1000)
                    }
                )
                let arr1 = [...new Array(19).keys()].map(
                    function (item) {
                        return parseInt(Math.random()*1000)
                    }
                )
                let arr2 = [...new Array(19).keys()].map(
                    function (item) {
                        return parseInt(Math.random()*1000)
                    }
                )

                console.log(String(arr),String(arr1),
                    String(arr2))

            },
            getData(){
                var self = this;
                let loading=this.$loading
                let toast=this.$toast;
                self.loadData = true;
                api.activeDetail({
                    day: self.day,
                    type: self.type,
                    stime: self.startTime,
                    etime: self.endTime
                }).then(function (data) {
                    if(data.code == 200){
                        self.categories = []
                        self.data = {
                            uv:{
                                iphone: [],
                                ipad: [],
                                andriord: []
                            },
                            pv:{
                                iphone: [],
                                ipad: [],
                                andriord: []
                            }
                        }
                        if(self.type==1){
                            data.data.pv.forEach(e => {
                                self.categories.push(e.hours+':00')
                                self.data.pv.iphone.push(e.iphone)
                                self.data.pv.ipad.push(e.ipad)
                                self.data.pv.andriord.push(e.anzhuo)
                            })
                            data.data.uv.forEach(e => {
                                self.categories.push(e.hours+':00')
                                self.data.uv.iphone.push(e.iphone)
                                self.data.uv.ipad.push(e.ipad)
                                self.data.uv.andriord.push(e.anzhuo)
                            })
                        }else {
                            data.data.pv.forEach(e => {
                                self.categories.push(moment(e.hours * 1000).format('M.D'))
                                self.data.pv.iphone.push(e.iphone)
                                self.data.pv.ipad.push(e.ipad)
                                self.data.pv.andriord.push(e.anzhuo)
                            })
                            data.data.uv.forEach(e => {
                                self.categories.push(moment(e.hours * 1000).format('M.D'))
                                self.data.uv.iphone.push(e.iphone)
                                self.data.uv.ipad.push(e.ipad)
                                self.data.uv.andriord.push(e.anzhuo)
                            })
                        }

                        self.chat()
                        self.chat2()
                        console.log(self.data,self.categories)
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
            },
            goDetial(){
                this.$router.push({path:'/detail',query: {id:1}});
            },
            chat(){
                var self = this
                var Highcharts = require('highcharts/highstock');
                Highcharts.setOptions({
                    colors: ['#DD1D21', '#FFD301', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
                });
                // 创建图表
                var chart =  chart = new Highcharts.Chart('container', {
                    chart: {
                        // type: 'areaspline',
                        panning: true,
                        pinchType: 'x',
                        resetZoomButton: {
                            position: {
                                y: -1000
                            }
                        }
                    },
                    title: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        tickLength: 0,
                        minPadding:0 ,
                        labels: {
                            rotation:0
                        },
                        categories: self.categories,
                    },
                    yAxis: {
                        tickAmount: 5,
                        title:null,
                        allowDecimals:false,
                    },
                    tooltip: {
                        followTouchMove: false
                    },
                    plotOptions: {
                        series: {
                            connectNulls: true,
                            stickyTracking: false,
                            allowPointSelect: true,
                            marker: {
                                states: {
                                    select: {
                                        lineColor: 'rgba(255, 170, 28, 0.5)',
                                        fillColor: 'rgb(255, 170, 28)',
                                        lineWidth: 6,
                                        radius: 5
                                    }
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'ios',
                        data: self.data.uv.iphone
                    }, {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'andriord',
                        data: self.data.uv.andriord
                    }, {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'ipad',
                        data: self.data.uv.ipad
                    }],
                }, function(c) {
                    // 动态改变 x 轴范围即可实现拖动
                    c.xAxis[0].setExtremes(1, 5);
                });
            },
            chat2(){
                var self = this
                var Highcharts = require('highcharts/highstock');
                Highcharts.setOptions({
                    colors: ['#DD1D21', '#FFD301', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
                });
                // 创建图表
                var chart =  chart = new Highcharts.Chart('container2', {
                    chart: {
                        // type: 'areaspline',
                        panning: true,
                        pinchType: 'x',
                        resetZoomButton: {
                            position: {
                                y: -1000
                            }
                        }
                    },
                    title: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        tickLength: 0,
                        minPadding:0 ,
                        labels: {
                            rotation:0
                        },
                        categories: self.categories,
                    },
                    yAxis: {
                        tickAmount: 5,
                        title:null,
                        allowDecimals:false,
                    },
                    tooltip: {
                        followTouchMove: false
                    },
                    plotOptions: {
                        series: {
                            connectNulls: true,
                            stickyTracking: false,
                            allowPointSelect: true,
                            marker: {
                                states: {
                                    select: {
                                        lineColor: 'rgba(255, 170, 28, 0.5)',
                                        fillColor: 'rgb(255, 170, 28)',
                                        lineWidth: 6,
                                        radius: 5
                                    }
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'ios',
                        data: self.data.pv.iphone
                    }, {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'andriord',
                        data: self.data.pv.andriord
                    }, {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'ipad',
                        data: self.data.pv.ipad
                    }],
                }, function(c) {
                    // 动态改变 x 轴范围即可实现拖动
                    c.xAxis[0].setExtremes(1, 5);
                });
            }

        },

    }
</script>

<style lang="less">
    @import "statistics-active-hour-detail.less";
</style>