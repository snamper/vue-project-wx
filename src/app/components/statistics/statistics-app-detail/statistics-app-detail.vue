
<template>
    <div class="statistics-app-detail" >
        <div class='header flex' @click='goDetial()' style='justify-content: center'>
            <div class='title' >App新增用户详情</div>
        </div>
        <div class='card-box'>
            <div class='card-list'>
                <div class='card-item flex' v-for='(item,index) in list.dataList'>
                    <div class='time flex'>6月{{index+1}}日</div>
                    <div class='person-list'>
                        <div class='person-item flex'>
                                <span class='gray'>ios：</span><span>20</span>
                        </div>
                        <div class='person-item flex'>
                            <span class='gray'>android：</span>
                            <span>17</span>
                        </div>
                        <div class='person-item flex'>
                                <span class='gray'>ipad：</span><span>13</span>

                        </div>
                    </div>
                    <div class='total'>
                        <div>总计</div>
                        <div class='total-number'>50</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-listmore="list" class='load-more'>
            <div v-if='list.hasMore'>上拉加载更多</div>
            <div v-if='!list.hasMore'>没有更多内容</div>
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
            this.getCardData()
        },
        components:{
        },
        methods: {
            goDetial(){
                this.$router.push({path:'/detail',query: {id:1}});
            },
            getCardData(){
                let self = this
                let loading=this.$loading
                let toast=this.$toast
                loading.show('加载中...')
                self.list=self.$list('app',function () {
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
            }
        },

    }
</script>

<style lang="less" scoped>
    @import "statistics-app-detail.less";
</style>