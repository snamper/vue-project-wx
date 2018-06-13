
<template>
    <section class='login-page'>
        <form @submit.prevent="goList">
            <div class='input'>
                <input type="text" placeholder='请输入口令' v-model='keyWord'>
            </div>
            <div class='button'>
                <input class='' type="submit" />
            </div>

        </form>
    </section>
</template>

<script>

    export default {
        name: 'statistics222',
        data: function () {
            return {
                keyWord: ''
            }
        },
        created() {
            //页面创建完成后
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            goList(){
                let self = this
                let toast=this.$toast
                if(self.keyWord == '种子科技'){
                    toast.show({
                        showTime: 2,
                        message: '口令输入正确',
                        style:'success'
                    });
                    localStorage.setItem('statistics','statistics')
                    this.$router.push({path:'/statistics',query: {id:1}});

                }else{
                    toast.show({
                        showTime: 2,
                        message: '口令错误',
                        style:'error'
                    });
                }

            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "statistics-login.less";
</style>