
<template>
    <transition>
        <div class="maintenance-recommend">

            <section v-if='loadData&& data.length!=0'>
                <header class='header'>
                    <div class='top flex '>
                        <div class='title flex' @click='back()'>
                            <span class='font-15' v-text="(data.car.brand+'-'+data.car.models).maxLength(30)">长安福特-经典福克斯
                            </span>
                            <i class='iconfont icon-arrowR font-10'></i>
                        </div>
                        <div class='feedback' @click='feedback()'>
                            <i class='iconfont icon-woshenpideline_ font-16'></i>
                            <span class='font-8'>反馈</span>
                        </div>
                    </div>
                    <div class='nav'>
                        <div class='cycle' @click='gopage(1)'>
                            <i class='iconfont icon-rililine_ font-13'></i>
                            <span class='font-13'>保养周期</span>
                        </div>
                        <div class='config' @click='gopage(2)'>
                            <i class='iconfont icon-kepai-peizhi font-13'></i>
                            <span class='font-13'>车辆配置</span>
                        </div>
                    </div>
                    <div class='search flex' v-if='data.engineOil && data.other'>
                        <div class='tip'>
                            <i class='iconfont icon-kepai-gongli font-13'></i>
                            <span class='color-gray5 font-13'>当前里程数(KM)</span>
                        </div>
                        <div class='int flex'>
                            <input v-iosInput=''
                                   class="color-gray5 font-13" type="tel" placeholder='请输入' v-model='currentMi'>
                            <span class='font-13' @click='getMaintenance()' v-show='currentMi.length>0'>确认</span>
                        </div>
                    </div>
                </header>
                <div class='main'>
                    <section class='recommend' >
                        <div class=''>
                            <header class='flex'>
                                <div class='title font-14'>机油推荐</div>
                                <div class='type font-12 color-gray9' v-if='data.engineOil.filling'>机油加注量:
                                    <span v-text='data.engineOil.filling+"L"'>3L</span>
                                    </div>
                            </header>
                            <div class='content flex' v-if='data.engineOil.lower'>
                                <div class='item'>
                                    <img
                                        :src="data.engineOil.lowerImage" alt="">
                                    <p class='font-12 color-gray2' v-text='data.engineOil.lower'>超凡喜力5W-40全合成汽车润滑油</p>
                                </div>
                                <div class='item'>
                                    <img
                                        :src="data.engineOil.highImage" alt="">
                                    <p class='font-12 color-gray2'><span class='chiji font-10 flex'>最佳</span>{{data.engineOil.high}}</p>
                                </div>
                            </div>
                        </div>
                        <div class='noEngineOil' v-if='!data.engineOil.lower'>
                            <img src="../.././../../images/maintenance/nojy.png" alt="">
                            <p class='title color-gray5 font-13'>暂无机油推荐</p>
                            <p class='title-en font-11' @click='back()'>重新选择其他车辆
                                <i class='iconfont icon-arrowR font-11'></i></p>
                        </div>
                    </section>
                    <section class='other-commehernd'>
                        <header class='flex'>
                            <div class='title font-14 '>其他保养项目推荐</div>
                        </header>
                        <div class='content' v-if='data.other.length!=0'>
                            <div class='item' v-for="(item,index) in data.other" :class="{'noborder':item.isShowDetail}">
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
                                       v-if='item.data.length!=0'></i>
                                </div>
                                <div class='detail'
                                     :class="{'height0':!item.isShowDetail}" >
                                    <div class='detail-item flex' v-for='detail in item.data'
                                         v-if='item.isShowDetail' v-zzz>
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
                        <div class='noOther' v-if='data.other.length==0'>
                            <img src="../.././../../images/maintenance/noOther.png" alt="">
                            <p class='title color-gray5 font-13'>暂无保养项目推荐</p>
                            <p class='title-en font-11' @click='back()'>重新选择其他车辆
                                <i class='iconfont icon-arrowR font-11'></i></p>
                        </div>
                    </section>
                </div>
            </section>
            <default-page v-show='loadData && data.length==0'></default-page>
        </div>
    </transition>

</template>

<script>
    import api from "../../../api/maintenance-api";
    import Vue from 'vue';
    Vue.directive("zzz",{
        //  bind: 只调用一次，当指令第一次被绑定到元素时调用。
        //  inserte: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
        //  update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
        //  componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
        //  unbind: 只调用一次，指令与元素解绑时调用。
        bind(el,binding){
            var u = navigator.userAgent
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isiOS) {
                setTimeout(
                    function () {
                        var index = $(el).parent().children().index($(el));
                        var s=0
                        var firstHeight=$(el).parent().children()
                        //二次优化
                        //直到最后一次才进行高度赋值
                        if(index==firstHeight.length-1){
                            console.log(index)
                            for(var i=0;i< firstHeight.length;i++){
                                s=firstHeight.eq(i).innerHeight()+s
                            }
                            $(el).parent().height(s)
                        }
                    }
                )
            }

        },
        update(el,binding){

            setTimeout(
                function () {
                    var index = $(el).parent().children().index($(el));
                    var s=0
                    var firstHeight=$(el).parent().children()
                    //二次优化
                    //直到最后一次才进行高度赋值
                    if(index==firstHeight.length-1){
                        console.log(index)
                        for(var i=0;i< firstHeight.length;i++){
                            s=firstHeight.eq(i).innerHeight()+s
                        }
                        $(el).parent().height(s)
                    }
                }
            )
        },

    })
    Vue.directive("iosInput",{
        bind(el,binding){
            var u = navigator.userAgent
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            setTimeout(function () {
                if(isiOS){
                    $('input').css('height','0.66rem')
                }
            })
        },

    })
    export default {
        name: 'maintenance-recommend',
        data() {
            return {
                recommendData:'',
                currentMi:'',
                data:[],
                loadData:false
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("壳牌|保养助手2.0");
            var self=this
            if(self.$router.currentRoute.query.levelId){
                self.levelId=self.$router.currentRoute.query.levelId
            }
            this.getMaintenance();
          //  $(document).unbind(scroll())
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            gopage(type){
                if(type==1){
                    this.$router.push({path:'/maintenance/maintenance-cycle',query: {levelId:this.levelId}});
                }else{
                    this.$router.push({path:'/maintenance/maintenance-config',query: {levelId:this.levelId}});
                }
            },
            //反馈
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            },
            getMaintenance(){
                let self=this;
                let loading=this.$loading
                    loading.show('加载中...')
                api.getMaintenance({
                    levelId  : self.levelId,
                    km       : self.currentMi
                }).then((data) => {
                    if (data.result_code == 0) {
                        for(var i in data.response.other){
                            data.response.other[i].isShowDetail=false
                        }
                        //数据不为空才展开
                        if(data.response.other[0].data!=''){
                            data.response.other[0].isShowDetail=true
                        }
                        self.data=data.response
                        if(self.currentMi){
                            var x=$('.main').offset().top
                            console.log(x)
//                            $('html').animate({
//                                scrollTop: x
//                            }, 300);
                            $(document).scrollTop(x)
                        }
                    } else {
                        self.$toast.show({
                            showTime: 2,
                            message: data.message,
                            style: 'error'
                        });
                    }
                    self.loadData=true
                    loading.hide()
                });
            },
            //显示详细
            showDetail(index){
                //数据为空不可点
                if(this.data.other[index].data==''){
                    return
                }
                //
                if(this.data.other[index].isShowDetail==true){
                    for(var i in this.data.other){
                        this.data.other[i].isShowDetail=false
                    }
                    return
                }
                if(this.data.other[index].isShowDetail==false){
                    for(var i in this.data.other){
                        this.data.other[i].isShowDetail=false
                    }
                    this.data.other[index].isShowDetail=true
                }
               // this.data.other[index].isShowDetail=!this.data.other[index].isShowDetail

            },
            back(){
                this.$router.push({path:'/maintenance/maintenance-home'});
            }
        },
        components:{
        }
    }
    String.prototype.maxLength = function (x)
    {
        // x英文字节数
        var str=this
        for (var i=0; i<this.length; i++) {
            if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
                x--
                if(this.length>x){
                    str=this.substring(0,x)+'...'
                }
            } else {

                if(this.length>x){
                    str=this.substring(0,x)+'...'
                }
            }
        }
        console.log(x)

        return str
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/recommend";
</style>