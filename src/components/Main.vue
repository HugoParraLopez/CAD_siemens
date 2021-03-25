<template>
    <b-container class="main-data">
        <!-- <b-row class="row"> {{ itemData.serialNumber }}</b-row> -->
        <!-- <b-row> {{ $route.query.D }}</b-row> -->
        <b-row >
            <b-col xs="12" sm="4" md="5">
                <app-data-container v-bind="itemData"></app-data-container>
                <app-file-selector v-bind="itemData"></app-file-selector>
            </b-col>
            <b-col xs="12" sm="8" md="7">
                <app-display-pdf></app-display-pdf>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
	import DataContainer from './Data.vue'
	import DisplayPdf from './DisplayPdf.vue'
	import FileSelector from './FileSelector'
	
export default {
	data() {
		return {
            itemData: {
                serialNumber: this.$route.query.S ,
                year: this.$route.query.D,
                factory: this.$route.query.V,
                manufacturer: this.$route.query.H,
                materialNumber: this.$route.query.P,
            },
            pdfIndex: 0,
		}
	},
	methods: {
		
	},
	components: {
		appDataContainer: DataContainer,
		appDisplayPdf: DisplayPdf,
		appFileSelector: FileSelector,
	},
	afterMount: () => {
        console.error('ON MAIN')

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
