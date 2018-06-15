
<template>
    <section class='list'>
        <div class='header flex' @click='goDetial()'>
            <div class='title'>畅读卡</div>
            <div class='right'>
                <div class='scale flex'>
                    <span>流出数 / 激活数：</span>
                    <span class='number'>{{cardData.card_num}} / {{cardData.card_active_num}}</span>
                </div>
                <div class='scale'>
                    <span>激活率：</span>
                    <span class='number'>{{cardData.rate}}%</span>
                </div>
            </div>
        </div>
        <div class='card-box'>
            <div class='card-list'>
                <div class='card-item flex' v-for='item in list'>
                    <div class='time flex' v-if='item.type == "D"'>7天卡</div>
                    <div class='time flex' v-if='item.type == "M"'>1月卡</div>
                    <div class='time flex' v-if='item.type == "K"'>3月卡</div>
                    <div class='right'>
                        <div class='top flex'>
                            <div class='person-select'>
                                <span class='gray'>归属人：</span>
                                <span class='m-r-15' v-text='item.name'>开年</span>
                                <div class='hover-select'>
                                    <select v-model='selectVal' name="" id="">
                                        <option :value="item" v-for='item in selectArr'>{{item.label}}</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <span class='gray'>序号：</span>
                                <span>{{item.start}}~{{item.end}}</span>
                            </div>
                        </div>
                        <div class='bottom flex'>
                            <div>
                                <span class='gray'>激活：</span>
                                <span class='m-r-15' v-text='item.active'>200</span>
                            </div>
                            <div>
                                <span class='gray'>激活率：</span>
                                <span >{{item.rate}}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='load-more'>
            <div  v-if='list.hasMore'>上拉加载更多</div>
            <div v-if='!list.hasMore'>没有更多内容</div>
        </div>
    </section>
</template>

<script>
    import api from '../../../api/statistics-api'
    export default {
        name: 'statistics',
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
                list:{},
            }
        },
        created() {
            this.getCardData()
        },
        watch: {
            //监听动态路由
        },
        methods: {
            goDetial(){
                this.$router.push({path:'/statistics-card/detail',query: {id:1}});
            },
            getCardData(){
                let self = this
                let loading=this.$loading
                let toast=this.$toast
                loading.show('加载中...')
                api.test('http://yueyue.arseeds.com/home/tongji/index').then(function (data) {
                    if(data.code == 200){
                        self.cardData = data.data
                        console.log(data)
                        self.list = data.data.lists
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
    @import "statistics-card.less";
</style>