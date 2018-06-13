
<template>
    <div class="maintenance-other-recommend">
        <section v-if='loadData&& datalist.length!=0'>
            <div class='main'>
                <section class='recommend' v-if='datalist.type=="engineOil"'>
                    <div class=''>
                        <header class='flex'>
                            <div class='title font-14'>机油推荐</div>
                            <div class='type font-12 color-gray9' v-if='datalist.data[0].data.filling'>机油加注量:
                                <span v-text='datalist.data[0].data.filling || "--"+"L"'>3L</span>
                            </div>
                        </header>
                        <div class='content flex' v-if='datalist.data[0].data.lower!=""'>
                            <div class='item'>
                                <img
                                    :src="datalist.data[0].data.lowerImage" alt="">
                                <p class='font-12 color-gray2' v-text='datalist.data[0].data.lower'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <div class='item'>
                                <img
                                    :src="datalist.data[0].data.highImage" alt="">
                                <p class='font-12 color-gray2'><span class='chiji font-10 flex'>最佳</span>{{
                                    datalist.data[0].data.high}}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class='other-commehernd' v-if='datalist.type!="engineOil"'>
                    <header class='flex'>
                        <div class='title font-14 '>其他保养项目推荐</div>
                    </header>
                    <div class='content'>
                        <div class='item' v-for="(item,index) in datalist.data" :class="{'noborder':item.isShowDetail}">
                            <div class='preview flex last-no-bd' @click='showDetail(index)'>
                                <div class='left flex'>
                                    <img
                                        v-if='item.name=="主雨刮"||item.name=="副雨刮"' src="../../../../images/maintenance/yugua.png"
                                        alt="">
                                    <img v-if='item.name=="火花塞"' src="../../../../images/maintenance/hhs.png"
                                         alt="">
                                    <img v-if='item.name=="前刹车盘"||item.name=="后刹车盘"'
                                         src="../../../../images/maintenance/shachepan.png"
                                         alt="">
                                    <img v-if='item.name=="前刹车片"||item.name=="后刹车片"'
                                         src="../../../../images/maintenance/shachepian.png"
                                         alt="">
                                    <img v-if='item.name=="空气过滤器"' src="../../../../images/maintenance/kqglq.png"
                                         alt="">
                                    <img v-if='item.name=="空调过滤器"' src="../../../../images/maintenance/ktglq.png"
                                         alt="">
                                    <img v-if='item.name=="燃油过滤器"' src="../../../../images/maintenance/ryglq.png"
                                         alt="">
                                    <img v-if='item.name=="机油过滤器"' src="../../../../images/maintenance/jyglq.png"
                                         alt="">
                                    <img v-if='item.name=="蓄电池"' src="../../../../images/maintenance/xudianchi.png"
                                         alt="">
                                    <img v-if='item.name=="皮带"' src="../../../../images/maintenance/pidai.png"
                                         alt="">
                                    <img v-if='item.name=="车灯"' src="../../../../images/maintenance/chedeng.png"
                                         alt="">
                                    <img v-if='item.name=="轮毂"' src="../../../../images/maintenance/longdong.png"
                                         alt="">
                                    <img v-if='item.name=="轮胎"' src="../../../../images/maintenance/longtai.png"
                                         alt="">
                                    <div>
                                        <p class='font-12 color-gray2' v-text='item.name'>火花塞</p>
                                        <p class='describe font-10 color-gray9' v-text='item.text'
                                           v-if='item.text'>超凡喜力5W-40
                                            全合成汽车润滑油</p>
                                    </div>

                                </div>
                                <i class='iconfont icon-arrowB font-12' v-bind:class="{'show-detail':item.isShowDetail}"
                                ></i>
                            </div>
                            <div class='detail'
                                 :class="{'height0':!item.isShowDetail}" >
                                <div class='detail-item flex' v-for='detail in item.data'
                                     v-show='item.isShowDetail' v-zzz>
                                    <div class='brand-item flex'>
                                        <div class='logo flex'>
                                            <img :src="detail.brandLogo" alt="">
                                            <div class='brand font-12 color-gray2 flex' v-text='detail.brandName'>
                                                电装
                                            </div>
                                        </div>
                                        <div class='flex type font-10 color-gray9'
                                             v-text='(detail.first?detail.first:"")+" "+(detail.second?detail.second:"")+" "+(detail.third?detail.third:"")'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class='font-11 flex'>
                    <p>此数据仅供参考，请以原厂保养手册为准。</p>
                    <div class='feedback' @click='feedback()'>
                        <i class='iconfont icon-woshenpideline_ font-13'></i>
                        <span class='font-11'>我要反馈</span>
                    </div>
                </footer>
            </div>
        </section>
        <!--<default-page v-show='loadData && data.length==0'></default-page>-->
    </div>
</template>

<script>
    import api from "../../../api/maintenance-api";
    import Vue from 'vue';
//    Vue.directive("zzz",{
//        //  bind: 只调用一次，当指令第一次被绑定到元素时调用。
//        //  inserte: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
//        //  update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
//        //  componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
//        //  unbind: 只调用一次，指令与元素解绑时调用。
//        bind(el,binding){
//            setTimeout(
//                function () {
//                    var s=0
//                    var firstHeight=$(el).parent().children()
//                    for(var i=0;i< firstHeight.length;i++){
//                        s=firstHeight.eq(i).innerHeight()+s
//                    }
//                    $(el).parent().height(s)
//                }
//            )
//        },
//    })
    export default {
        name: 'maintenance-other-recommend',
        data() {
            return {
                datalist:false,
                loadData:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("壳牌|保养助手2.0");
            var self=this
            if(self.$router.currentRoute.query.id){
                self.id=self.$router.currentRoute.query.id
                this.getData(self.id)
            }
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            //获得数据
            getData(id){
                var self=this
                var loading=self.$loading
                loading.show('加载中...')
                api.upkeep({
                    id  : id,
                }).then((data) => {
                    if (data.result_code == 0) {
                        for(var i in data.response.data){
                            data.response.data[i].isShowDetail=false
                        }
                        data.response.data[0].isShowDetail=true
                        self.datalist = data.response;
                        self.loadData=true
                    } else {
                        self.$toast.show({
                            showTime: 2,
                            message: data.message,
                            style: 'error'
                        });
                    }
                    loading.hide()
                    self.loadData=true

                });
            },
            //反馈
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            },
            //显示详细
            showDetail(index){
                if(this.datalist.data[index].isShowDetail==true){
                    for(var i in this.datalist.data){
                        this.datalist.data[i].isShowDetail=false
                    }
                    return
                }
                if(this.datalist.data[index].isShowDetail==false){
                    for(var i in this.datalist.data){
                        this.datalist.data[i].isShowDetail=false
                    }
                    this.datalist.data[index].isShowDetail=true
                }
               // this.datalist.data[index].isShowDetail=!this.datalist.data[index].isShowDetail
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/other-recommend";

</style>