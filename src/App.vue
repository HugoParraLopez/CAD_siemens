<template>
<div id="main-body">
	<app-top-bar></app-top-bar>
	<router-view></router-view>
</div>
</template>

<script>
	import TopBar from './components/TopBar'
	import MyFooter from './components/Footer'
export default {
	data() {
		return {

		}
	},
	methods: {
		
	},
	components: {
		appTopBar: TopBar,
		appMyFooter: MyFooter,
	},

}
</script>

<style>
#app {
	font-family: 'Helvetica', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
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

#main-body {
	background: rgb(161,0,255);
	background: -moz-radial-gradient(circle, rgba(161,0,255,1) 0%, rgba(0,19,154,1) 100%);
	background: -webkit-radial-gradient(circle, rgba(161,0,255,1) 0%, rgba(0,19,154,1) 100%);
	background: radial-gradient(circle, rgba(161,0,255,1) 0%, rgba(0,19,154,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a100ff",endColorstr="#00139a",GradientType=1);
}

.my-card {
	width: 100%;
	height: 100%;
	display: inline-block;
	margin: 2% 2%;
	background-color: #dddddd;
	border: 2px solid green;
	border-radius: 1.2rem;
	padding: 20px 40px;
    }
</style>
