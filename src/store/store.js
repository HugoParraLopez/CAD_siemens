import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // GENERAL STATE
        locale: 'es',
        theme: 'light',
        pdfIndex: 0,
        // URL parameters
        urlKeys: ['S', 'D', 'V', 'H', 'P', ],
        urlValues: [],
        allData: true,
        // TESTING
        sn: '0',
    },
    getters: {
        getPdfIndex: state => {
            return state.pdfIndex
        },
        getTheme: state => {
            return state.theme
        },
        isLight: state => {
            return state.theme == 'light' ? true : false
        },
        getLocale: state => {
            return state.locale
        },
        isEnglish: state => {
            return state.locale == 'en' ? true : false
        },

        getAllData: state => {
            return state.allData
        },
        getUrlParameters: state => {
            // using the queryString create the constant of UrlParameters
            const urlParams = new URLSearchParams(window.location.search)
            state.urlKeys.forEach(x => {
                let inData = urlParams.get(x)
                console.log(inData, x)
                if (inData)
                    state.urlValues.push(inData)
                else {
                    state.urlValues.push('--')
                    state.allData = false
                }
            })
            console.table(state.urlValues)
                // 
            return {
                serialNumber: state.urlValues[0],
                year: state.urlValues[1],
                factory: state.urlValues[2],
                manufacturer: state.urlValues[3],
                materialNumber: state.urlValues[4],
            }
        },
        // TESTING
        getSerial: state => {
            const urlParams = new URLSearchParams(state.queryString)
            console.error(urlParams.get('X'))
            return urlParams.get('X')
        },
    },
    mutations: {
        setLocale: (state, value) => {
            state.locale = value
        },
        setTheme: (state, value) => {
            state.theme = value
        },
        setPdfIndex: (state, value) => {
            state.pdfIndex = value
        },
    }
})