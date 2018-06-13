
<template>
    <div class="statistics">
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'statistics',
        data() {
            return {
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
            goApp(type){
                this.$router.push({path: '/statistics/statistics-app', query: {id: "1"}});
            }
        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0.2
    }
</style>