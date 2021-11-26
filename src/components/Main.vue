<template>
    <b-container class="main-data">
        <!-- <b-row> TEST QUERY 1 {{ pdfUrl }} , {{ locale }}, {{ getParams.year }}, {{ allData }}</b-row> -->
        <b-row >
            <b-col xs="12" sm="12" md="5">
                <!--
                @slot Data container
                    @binding {object} Parameters from the url obtained in the State
                -->
                <app-data-container v-bind="getParams"></app-data-container>
                <!--
                @slot Container to list the available files
                    @binding {object} Parameters from the url obtained in the State
                -->
                <app-file-selector v-bind="getParams"></app-file-selector>
            </b-col>
            <b-col xs="12" sm="12" md="7">
                <!--
                @slot PDF viewer
                    @binding {string} url of the Selected/currnet pdf file
                -->
                <app-display-pdf :url="currentUrl(pdfUrl)"></app-display-pdf>
            </b-col>
        </b-row>
        <b-row>
            <b-col xs="12" sm="12" md="12">
                <!--
                @slot Data container
                    @condition {bool} Ensures the URL data is filled correctly
                    @binding {string} URL from the location of the 3d Model
                -->
                <app-model-container v-if="allData" :recieveModel="modelSrc"></app-model-container>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
	import DataContainer from './Data.vue'
	import ModelContainer from './Model.vue'
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
        modelSrc: 'getModelSrc',
    }),
	methods: {
        ...mapMutations([
            'setUrlParams'
        ]),
        currentUrl(url){
            //console.warn('..................', url, this.proxy)
            return `${this.proxy}/${url}`
        },
    },
	components: {
		appDataContainer: DataContainer,
		appModelContainer: ModelContainer,
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
