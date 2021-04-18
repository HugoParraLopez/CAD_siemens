import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        locale: 'es',
        allData: false,
        pdfIndex: 0,
    },
    getters: {
        findPdfIndex: state => {
            return state.pdfIndex++
        }
    },
})