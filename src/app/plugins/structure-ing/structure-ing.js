import template from './structure-ing.vue'

export default {
    install(Vue){
        Vue.component("structure-ing",Vue.extend(template))
    }
}