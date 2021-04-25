<template>
    <b-container class="main-data">
        <b-row> TEST QUERY 1 {{ serialN }} , {{ locale }}, {{ getParams.year }}, {{ allData }}</b-row>
        <b-row >
            <b-col xs="12" sm="4" md="5">
                <app-data-container v-bind="getParams"></app-data-container>
                <app-file-selector
                    v-bind="getParams"
                    :pdfIndex="pdfIndex"
                    @updatePdfIndex="pdfIndex = $event"
                ></app-file-selector>
            </b-col>
            <b-col xs="12" sm="8" md="7">
                <app-display-pdf :pdfIndex="pdfIndex"></app-display-pdf>
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
            pdfIndex: 0,
		}
	},
    computed: mapGetters({
        pdfIndexer: 'pdfIndexer',
        serialN: 'getSerial',
        locale: 'getLocale',
        getParams: 'getUrlParameters',
        allData: 'getAllData',
    }),
	methods: mapMutations([
        'setUrlParams'
    ]),
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
