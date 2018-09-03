
<template>
    <div class="statistics-share-list">
        <div class='search-bar' v-if='type==7 || type ==3'>
            <div class='bar flex'>
                <div class='left flex'>
                    <div class='text'>当前显示:</div>
                    <div class='current-params'>
                        <span>{{params.stime*1000 | parseDate('YYYY.M.D') }}~{{ params.etime *1000 |
                            parseDate('YYYY.M.D')}}</span>
                        <span v-show='params.searchtype == 1'>天</span>
                        <span v-show='params.searchtype == 2'>周</span>
                        <span v-show='params.searchtype == 3'>月</span>
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
                        <span :class="{'type-active' : searchtype == 1}" @click='chooseType(1)'>天</span>
                        <span :class="{'type-active' : searchtype == 2}" @click='chooseType(2)'>周</span>
                        <span :class="{'type-active' : searchtype == 3}" @click='chooseType(3)'>月</span>
                    </div>
                </div>
                <div class='params-item' v-show='searchtype == 1'>
                    <p>开始时间</p>
                    <div class='type-box flex'>
                        <input type="date" v-model='startTime'>
                        <span class='type-active'>{{startTime | parseDate('YYYY.M.D')}}</span>
                    </div>
                </div>
                <div class='params-item' v-show='searchtype == 1'>
                    <p>结束时间</p>
                    <div class='type-box flex'>
                        <input type="date" v-model='endTime'>
                        <span class='type-active'>{{endTime | parseDate('YYYY.M.D')}}</span>
                    </div>
                </div>
                <div class='confirm' @click='confirm()'>确认</div>
            </div>

        </div>
        <div class='mask' v-show='searchBoxStatus'></div>
        <div class='top-10'>
            <div class='list' :class='{"padding-2":type==7 || type ==3,"padding-1":type!=7 && type !=3}'>
                <div class='book-head flex' :class='{"top1":type==7 || type ==3}'>
                    <div class='fd'>{{title}}

                    </div>
                    <span class='sd'>转发次数</span>
                    <span class='td' v-if='type!=7 && type !=3'>好友/朋友圈</span>
                    <span class='fo'>浏览</span>
                    <span class='fi' v-if='type ==7'>注册</span>
                    <span class='fi'>下载</span>
                </div>
                <div class='item flex' v-for='(item,$index) in shareList.dataList'>
                    <div class='book-info flex fd'>
                        <!--<img :src="item.pic" alt="">-->
                        <div class='text'>
                            <p class='name'>{{item.title || item.date}}</p>
                            <div class='time' v-show='params.searchtype == 1' v-text='item.parseDay'>2018.5.10</div>
                            <div class='time' v-show='params.searchtype == 2'>第 {{Math.abs($index - shareData.length)}} 周</div>
                            <div class='time' v-show='params.searchtype == 3'>{{item.day*1000 | parseDate('YYYY年M月')}}</div>
                            <!--<p class='cb' v-text='item.title'>中信出版社</p>-->
                        </div>
                    </div>
                    <div class='uv sd' v-text='item.share_counts'>80</div>

                    <div class='uv td' v-if='type!=7 && type !=3'
                         v-text='item.share_friends_counts + "/" +item.share_circle_counts'></div>
                    <div class='uv fo' v-text='item.see_counts'>17</div>
                    <div class='uv fi' v-if='type ==7' v-text='item.register_counts'>17</div>
                    <div class='uv fi' v-text='item.download_counts'>17</div>
                </div>
            
            </div>

        </div>
        <div v-listmore="shareList" class='load-more'>
                <div v-if='shareList.hasMore'>上拉加载更多</div>
                <div v-if='!shareList.hasMore'>没有更多内容</div>
            </div>
    </div>
</template>

<script>
    import api from "../../../api/statistics-api";
    export default {
        name: 'statistics222',
        data: function () {
            return {
                isLoading : true,
                shareData : [],
                shareList : {},
                title:'',
                searchBoxStatus:false,
                show:false,
                searchtype: 1,
                startTime: moment(moment(new Date()).format('YYYY-MM')).format('x')/1,
                endTime: moment(moment(new Date()).format('YYYY-MM-DD')).format('x')/1,
                params:{
                    searchtype: 1,
                    // 默认展示当月数据
                    stime: moment(moment(new Date()).format('YYYY-MM')).format('x')/1000,
                    etime: moment(moment(new Date()).format('YYYY-MM-DD')).format('x')/1000
                },

            }
        },
        created() {
            // 1:文章 2:每周一书 3:家长视频 4：课程 5：新书 6：书 7：送绘本s
            this.type = this.$router.currentRoute.query.type
            if(this.type == 1){
                this.title = '文章标题'
            }
            if(this.type == 2){
                this.title = '每周一书'
            }
            if(this.type == 3){
                this.title = '家长视频'
            }
            if(this.type == 4){
                this.title = '课程名称'
            }
            if(this.type == 6){
                this.title = '书籍名称'
            }
            if(this.type == 7){
                this.title = '送绘本'
            }
            this.getShareData()
        },
        components:{
        },
        methods: {
            chooseType(type) {
                console.log(type)
                var self = this;
                self.searchtype = type
            },
            getShareData(){
                var self = this;
                let loading=this.$loading
                let toast=this.$toast;
                var params = {
                    stype: self.searchtype,
                    stime: self.params.stime,
                    etime: self.params.etime,
                    type: self.type,
                }
                self.shareList=self.$list("sharelist",function () {
                    loading.show('加载中...')
                    return new Promise((resolve) => {
                        console.log(11111)
                        api.shareTypeList(self.shareList.listParams).then(function (data) {
                            if(data.code == 200){
                                resolve({
                                    list: data.data.list,
                                    total: data.data.total,
                                    other: {
                                        
                                    }
                                })
                                self.isLoading = false
                            }else{
                                toast.show({
                                    showTime: 2,
                                    message: data.msg,
                                    style:'error'
                                });
                            }
                            loading.hide()
                        })
                    })
                },{hasRecall:false});
                var params = {
                    stype: self.searchtype,
                    stime: self.params.stime,
                    etime: self.params.etime,
                    type: self.type,
                }
                self.shareList.init(
                    {
                        limit: 10,
                        page: 1,
                        type :self.type,
                        stype :params.stype,
                        stime : params.stime,
                        etime : params.etime
                    }
                );
                self.shareList.clearInit()
            },
            search(){
                var self = this;
                self.searchBoxStatus = !self.searchBoxStatus
            },
            confirm(){
                var self = this;
                self.searchBoxStatus = false
                let toast=this.$toast;
                if(moment(self.startTime).format('x')/1000 > moment(self.endTime).format('x')/1000){
                    toast.show({
                        showTime: 2,
                        message: '结束时间不能早于开始时间',
                        style:'error'
                    });
                    return false
                }
                self.getShareData()
            },
        },

    }
</script>

<style lang="less" scoped>
    @import "statistics-share-list.less";
</style>