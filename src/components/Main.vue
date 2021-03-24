<template>
<div>
	
	<div class="container">
        <div class="row"> {{ itemData.serialNumber }}</div>
        <div class="row"> {{ $route.query.D }}</div>
		<div class="row">
			<div class="col-xs-12 col-sm-4 col-md-5" >
				<app-data-container v-bind="itemData"></app-data-container>
				<app-file-selector></app-file-selector>
			</div>
			<div class="col-xs-12 col-sm-8 col-md-7">
				<app-display-pdf></app-display-pdf>
			</div>
		</div>
	</div>
</div>
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
            }
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

</style>
