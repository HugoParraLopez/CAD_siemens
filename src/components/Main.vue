<template>
<div>
	<app-top-bar></app-top-bar>
	<div class="container">
        <div class="row"> {{ itemData.serialNumber }}</div>
        <div class="row"> {{ $route.query.D }}</div>
		<div class="row">
			<div class="col-xs-12 col-sm-4 col-md-5" style="height: 300px">
				<app-data-container v-bind="itemData"></app-data-container>
				<app-file-selector></app-file-selector>
			</div>
			<div class="col-xs-12 col-sm-8 col-md-7" style="height: 700px">
				<app-pdf-viewer></app-pdf-viewer>
			</div>
		</div>
	</div>
	<footer>
		<app-my-footer></app-my-footer>
	</footer>
</div>
</template>

<script>
	import DataContainer from './Data.vue'
	import PdfViewer from './PDFViewer.vue'
	import TopBar from './TopBar'
	import FileSelector from './FileSelector'
	import MyFooter from './Footer'
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
		appPdfViewer: PdfViewer,
		appTopBar: TopBar,
		appFileSelector: FileSelector,
		appMyFooter: MyFooter,
	},
	afterMount: () => {
        console.error('ON MAIN')

    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.testing {
	background-color: lightblue;
	border: red solid 2px;
}

h1, h2 {
  	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
  	color: #42b983;
}

.my-card {
        width: 100%;
		height: 100%;
        display: inline-block;
        margin: 2% 2%;
		background-color: lightblue;
		border: 2px solid green;
		border-radius: 1.2rem;
		padding: 20px 40px;
    }
</style>
