
<template>
    <div class="statistics-active-hour-detail" >
        <div class='head'>
            <i class='icon anticon icon-areachart'></i>
            <span>6月10日分时段日活</span>
        </div>
        <div>
            <div class='legend flex'>
                <div class='legend-item flex'>
                    <span class='circle ios'></span>
                    <span class='text'>ios</span>
                </div>
                <div class='legend-item flex'>
                    <span class='circle android'></span>
                    <span class='text'>andrior</span>
                </div>
                <div class='legend-item flex'>
                    <span class='circle ipad'></span>
                    <span class='text'>ipad</span>
                </div>
            </div>
            <div id='container'></div>
        </div>

    </div>
</template>

<script>
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
            this.suiji()
        },
        mounted() {
            this.chat()
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
            goDetial(){
                this.$router.push({path:'/detail',query: {id:1}});
            },
            chat(){
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
                        categories: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
                            '15:00', '16:00',
                            '17:00','18:00', '19:00', '20:00',
                            '21:00', '22:00', '23:00', '24:00'],
                    },
                    yAxis: {
                        tickAmount: 5,
                        title:null,
                        max:1000
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
                        data: [672,789,182,942,563,914,242,944,207,899,961,306,95,974,209,699,119,56,119]
                    }, {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'andriord',
                        data: [254,226,299,189,954,383,599,752,437,773,488,166,659,162,396,713,794,228,201]
                    }, {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: 'ipad',
                        data: [643,793,557,556,357,529,464,730,903,680,830,678,910,714,681,952,589,66,591]
                    }],
                }, function(c) {
                    // 动态改变 x 轴范围即可实现拖动
                    c.xAxis[0].setExtremes(1, 5);
                });
                // var chart = Highcharts.chart('container', {
                //     panning: true,
                //     pinchType: 'x',
                //     credits: {
                //         enabled: false
                //     },
                //     title: {
                //         text: null
                //     },
                //     // scrollbar : {
                //     //     enabled:true
                //     // },
                //     xAxis: {
                //         tickmarkPlacement: 'on',
                //          categories: ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
                //              '15:00', '16:00',
                //              '17:00','18:00', '19:00', '20:00',
                //              '21:00', '22:00', '23:00', '24:00'],
                //         max:11
                //     },
                //     tooltip: {
                //         valueSuffix: '°C',
                //         followTouchMove: false
                //     },
                //
                //     yAxis: {
                //         tickAmount: 5,
                //         title:null,
                //         max:1000
                //     },
                //     legend: {
                //         enabled: false
                //     },
                //     tooltip: {
                //         followTouchMove: false
                //     },
                //     plotOptions: {
                //         series: {
                //             connectNulls: true,
                //             stickyTracking: false,
                //             allowPointSelect: true,
                //             marker: {
                //                 states: {
                //                     select: {
                //                         lineColor: 'rgba(255, 170, 28, 0.5)',
                //                         fillColor: 'rgb(255, 170, 28)',
                //                         lineWidth: 6,
                //                         radius: 5
                //                     }
                //                 }
                //             }
                //         }
                //     },
                //     series: [{
                //         marker: {
                //             fillColor: '#FFFFFF',
                //             lineWidth: 2,
                //             radius: 3,
                //             symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                //             lineColor: null // inherit from series
                //         },
                //         name: 'ios',
                //         data: [672,789,182,942,563,914,242,944,207,899,961,306,95,974,209,699,119,56,119]
                //     }, {
                //         marker: {
                //             fillColor: '#FFFFFF',
                //             lineWidth: 2,
                //             radius: 3,
                //             symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                //             lineColor: null // inherit from series
                //         },
                //         name: 'andriord',
                //         data: [254,226,299,189,954,383,599,752,437,773,488,166,659,162,396,713,794,228,201]
                //     }, {
                //         marker: {
                //             fillColor: '#FFFFFF',
                //             lineWidth: 2,
                //             radius: 3,
                //             symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                //             lineColor: null // inherit from series
                //         },
                //         name: 'ipad',
                //         data: [643,793,557,556,357,529,464,730,903,680,830,678,910,714,681,952,589,66,591]
                //     }],
                // },function(c) {
                //     // 动态改变 x 轴范围即可实现拖动
                //     c.xAxis[0].setExtremes(1, 5);
                // });
            }

        },

    }
</script>

<style lang="less">
    @import "statistics-active-hour-detail.less";
</style>