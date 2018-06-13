
<template>
    <section class='detail' >
        <div class='header flex' @click='goDetial()' style='justify-content: center'>
            <div class='title' >畅读卡详情</div>
        </div>
        <div class='card-box' v-show=' list.dataList.length !=0'>
            <div class='card-list'>
                <div class='card-item flex' v-for='(item,index) in list.dataList'>
                    <div class='time flex'>6月{{index+1}}日</div>
                    <div class='person-list'>
                        <div class='person-item flex' v-for='item in [1,2,3]'>
                            <div>
                                <span class='gray'>归属人：</span><span>开年</span>
                            </div>
                            <div>
                                <span class='gray'>激活：</span><span>300</span>
                            </div>
                        </div>
                    </div>
                    <div class='total'>
                        <div>总计</div>
                        <div class='total-number'>900</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-listmore="list" class='load-more'>
            <div v-if='list.hasMore'>上拉加载更多</div>
            <div v-if='!list.hasMore'>没有更多内容</div>
        </div>
    </section>
</template>

<script>
    import api from "../../../api/statistics-api";
    export default {
        name: 'statistics222',
        data() {
            return {
                params:{
                    limit:10,
                    page:1,
                },
                data:{
                    list:[],
                    total:''
                },
                list:{},
            }
        },
        created() {
            let self = this
            let loading=self.$loading
            //定义一个list，第一个参数定义list的id用来判断是否已经存在这个list，第二个参数用来给list传每次加载的数据
            this.list=self.$list('detail',function () {
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
                    },2000)

                })

            });
            // 初始化list，参数会赋值给list.listParams，
            // @page：加载第几页
            this.list.init(
                {
                    limit: 10,
                    page: 1
                }
            );
        },
        components:{
        },
        methods: {

        },

    }
</script>

<style lang="less" scoped>
    @import "statistics-card-detail.less";
</style>