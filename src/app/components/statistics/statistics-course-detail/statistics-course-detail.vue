
<template>
    <div class="statistics-active-hour-detail" >
        <div class='head'>
            <i class='icon anticon icon-areachart'></i>
            <span>图书日销售情况统计</span>
        </div>
        <div>
            <div class='legend flex'>
                <div class=''>小兔子睡不着</div>
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
                let arr = [...new Array(30).keys()].map(
                    function (item) {
                        return parseInt(Math.random()*1000)
                    }
                )
                let arr1 = [...new Array(30).keys()].map(
                    function (item) {
                        return '5.'+(item+1)
                    }
                )
                let arr2=[5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,5.10,5.11,5.12,5.13,5.14,5.15,5.16,5.17,5.18,5.19,5.20,5.21,5.22,5.23,5.24,5.25,5.26,5.27,5.28,5.29,5.30,6.1,6.2,6.3,6.4,6.5,6.6,6.7,6.8,6.9,6.10,6.11,6.12,6.13,6.14].reverse()

                console.log(String(arr),String(arr2))

            },
            goDetial(){
                this.$router.push({path:'/detail',query: {id:1}});
            },
            chat(){
                var Highcharts = require('highcharts/highstock');
                Highcharts.setOptions({
                    colors: ['#FFD301', '#DD1D21', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
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
                        // endOnTick: true,
                        tickAmount:7,
                        tickLength: 1,
                        minPadding:0 ,
                        reversed:true,
                        labels: {
                            rotation:0,
                            useHTML:true,
                            style: {
                            }
                        },
                        categories:
                            [6.14,6.13,6.12,6.11,6.1,6.9,6.8,6.7,6.6,6.5,6.4,6.3,6.2,6.1,5.3,5.29,5.28,5.27,5.26,5.25,5.24,5.23,5.22,5.21,5.2,5.19,5.18,5.17,5.16,5.15,5.14,5.13,5.12,5.11,5.1,5.9,5.8,5.7,5.6,5.5,5.4,5.3,5.2,5.1],
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
                    series: [ {
                        marker: {
                            fillColor: '#FFFFFF',
                            lineWidth: 2,
                            radius: 3,
                            symbol: 'circle', //曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                            lineColor: null // inherit from series
                        },
                        name: '数量',
                        data: [{
                            y:643,
                            color:'red',
                            selected:true,
                        },458,532,399,109,157,774,332,743,135,338,546,318,416,135,973,842,434,253,4,139,218,667,517,757,653,270,540,232,538,]
                    }],
                }, function(c) {
                    // 动态改变 x 轴范围即可实现拖动
                    c.xAxis[0].setExtremes(0, 7);
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
    @import "statistics-course-detail.less";
</style>