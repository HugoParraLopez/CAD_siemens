<template>
    <b-container class="main-data">
        <!-- <b-row> TEST QUERY 1 {{ pdfUrl }} , {{ locale }}, {{ getParams.year }}, {{ allData }}</b-row> -->
        <b-row >
            <b-col xs="12" sm="12" md="5">
                <app-data-container v-bind="getParams"></app-data-container>
                <app-file-selector
                    v-bind="getParams"
                ></app-file-selector>
            </b-col>
            <b-col xs="12" sm="12" md="7">
                <app-display-pdf :url="currentUrl(pdfUrl)"></app-display-pdf>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
	import DataContainer from './Data.vue'
	import DisplayPdf from './DisplayPdf.vue'
	import FileSelector from './FileSelector'
    import { mapGetters } from 'vuex'
    import { mapMutations } from 'vuex'
 	
export default {
	data() {
		return {
            proxy: 'https://gentle-castle-93152.herokuapp.com',
		}
	},
    computed: mapGetters({
        pdfUrl: 'getPdfUrl',
        serialN: 'getSerial',
        locale: 'getLocale',
        getParams: 'getUrlParameters',
        allData: 'getAllData',
    }),
	methods: {
        ...mapMutations([
            'setUrlParams'
        ]),
        currentUrl(url){
            //console.warn('..................', url, this.proxy)
            return `${this.proxy}/${url}`
        }
    },
	components: {
		appDataContainer: DataContainer,
		appDisplayPdf: DisplayPdf,
		appFileSelector: FileSelector,
	},
	mounted: () => {
        //console.warn('ON MAIN mounted')
    },
    created: () => {
        //console.warn('ON MAIN created')
    }
}
</script>

<style>
.main-data {
    padding-top: 4%;
    padding-bottom: 4%;
    margin: auto;
    align-content: center;
}
@media only screen and (max-width: 600px) {
    .main-data {
        padding-top: 10%;
        padding-bottom: 7%;
    }
}
</style>
