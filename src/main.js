import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePdf from 'vue-pdf'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import { routes } from './js/routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VuePdf)


const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})