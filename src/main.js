import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePdf from 'vue-pdf'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { messages } from './js/i18n.js'
import { routes } from './js/routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './store/store'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VuePdf)
Vue.use(VueI18n)


const router = new VueRouter({
    routes,
    mode: 'history'
})

const i18n = new VueI18n({
    messages,
    locale: 'es',
    fallbackLocale: 'en',
})

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})