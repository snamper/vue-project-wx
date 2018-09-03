
<template>
    <div class="statistics-retention-rote">
        <div class='mask' v-show='searchBoxStatus'></div>
        <div class='search-bar'>
            <div class='bar flex'>
                <div class='left flex'>
                    <div class='text'>当前显示:</div>
                    <div class='current-params'>
                        <span>{{params.month*1000 | parseDate('YYYY.M') }}</span>
                        <span v-show='params.type == 1'>天</span>
                        <span v-show='params.type == 2'>周</span>
                        <span v-show='params.type == 3'>月</span>
                    </div>
                </div>
                <div class='right flex' @click='search()'>
                    <i class='icon anticon icon-filter'></i>
                    <span>筛选</span>
                </div>
            </div>
            <div class='content' v-if='searchBoxStatus'>
                <div class='params-item'>
                    <p>筛选单位</p>
                    <div class='type-box flex'>
                        <span :class="{'type-active' : type == 1}" @click='chooseType(1)'>天</span>
                        <span :class="{'type-active' : type == 2}" @click='chooseType(2)'>周</span>
                        <!--<span :class="{'type-active' : type == 3}" @click='chooseType(3)'>月</span>-->
                    </div>
                </div>
                <div class='params-item' v-show='type == 1'>
                    <p>选择月份</p>
                    <div class='type-box flex'>
                        <input type="month" v-model='month  ' max='2018-06-10'>
                        <span class='type-active'>{{month | parseDate('YYYY.M')}}</span>
                    </div>
                </div>
                <div class='confirm' @click='confirm()'>确认</div>
            </div>
        </div>

        <table border="0" v-if='data.length>0' :class='{"filter": searchBoxStatus}'>
            <tr class='t-hader flex'>
                <th class='date'>日期</th>
                <th>新增</th>
                <th>次日留存</th>
                <th>3天后</th>
                <th>7天后</th>
                <th>15天后</th>
                <th>30天后</th>
            </tr>
            <tr class='flex' v-for='(item,$index) in data'>
                <td v-if='params.type == 1'>{{item.day * 1000 | parseDate('M月D日')}}</td>
                <td v-if='params.type == 2'>第{{Math.abs($index - data.length)}}周</td>
                <td v-if='params.type == 3'>{{item.day * 1000 | parseDate('YYYY年M月')}}</td>
                <td v-if='item.add_num != -1'>{{item.add_num}}人</td>
                <td >{{item.cr != -1 ? item.cr + "%" : "--"}}</td>
                <td >{{item.sd != -1 ? item.sd + "%" : "--"}}</td>
                <td >{{item.qd != -1 ? item.qd + "%" : "--"}}</td>
                <td >{{item.shw != -1 ? item.shw + "%" : "--"}}</td>
                <td >{{item.sh != -1 ? item.sh + "%" : "--"}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import api from "../../../api/statistics-api";
    export default {
        name: 'statistics',
        data() {
            return {
                date:false,
                data:[],
                currentDay:'',
                monthList:[],
                searchBoxStatus:false,
                show:false,
                type: 1,
                month: moment(moment(new Date()).format('YYYY-MM')).format('x')/1,
                params:{
                    type: 1,
                    // 默认展示当月数据
                    stime: moment(moment(new Date()).format('YYYY-MM')).format('x')/1000,
                    etime: moment(moment(new Date()).format('YYYY-MM-DD')).format('x')/1000
                },
                cardData:{},
                activeData: [],
                loadData:true,
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
            //页面创建完成后
            // this.getMonth()
            this.page.setTitle("app留存率统计");
            this.monthList = this.getMonth()
            this.currentDay = this.monthList[this.monthList.length - 1].day
            this.getLoginData()
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            chooseType(type) {
                console.log(type)
                var self = this;
                self.type = type
            },
            search(){
                var self = this;
                self.searchBoxStatus = !self.searchBoxStatus
            },
            confirm(){
                var self = this;
                self.searchBoxStatus = false
                // if(moment(self.startTime).format('x')/1000 > moment(self.endTime).format('x')/1000){
                //     toast.show({
                //         showTime: 2,
                //         message: '结束时间不能早于开始时间',
                //         style:'error'
                //     });
                //     return false
                // }
                self.getLoginData()
            },
            getMonth(){
                var self = this;
                var currentMonth = moment(new Date()).format('M')
                console.log(currentMonth)
                var arr = [
                    {day: '2018-01', stamp: ''},
                    {day: '2018-02', stamp: ''},
                    {day: '2018-03', stamp: ''},
                    {day: '2018-04', stamp: ''},
                    {day: '2018-05', stamp: ''},
                    {day: '2018-06', stamp: ''},
                    {day: '2018-07', stamp: ''},
                    {day: '2018-08', stamp: ''},
                    {day: '2018-09', stamp: ''},
                    {day: '2018-10', stamp: ''},
                    {day: '2018-11', stamp: ''},
                    {day: '2018-12', stamp: ''},
                ]
                var arr2 = []
                for (let i=0; i<currentMonth; i++){
                    arr[i].stamp = (moment(moment(new Date(arr[i].day))).format('x'))/1000
                    arr2.push(arr[i])
                }

                // arr.forEach(e => {
                //     e.stamp = (moment(moment(new Date(e.day))).format('x'))/1000
                // })
                console.log(arr2)
                return arr2
            },
            chooseDate(){
                var self = this;
                self.date = !self.date
            },
            getLoginData(){
                let self = this
                let loading=this.$loading
                let toast=this.$toast;
                self.params.type = self.type
                self.params.month = moment(self.month).format('x')/1000
                self.loadData = true;
                loading.show('加载中...')
                api.membeRetain(self.params).then(function (data) {
                    if(data.code == 200){
                        self.data = data.data
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
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./statistics-retention-rote.less";
</style>