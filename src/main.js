import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePdf from 'vue-pdf'
import App from './App.vue'
import { routes } from './js/routes.js'

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