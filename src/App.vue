<template>
<div id="main-body">
	<app-top-bar></app-top-bar>
	<router-view></router-view>
	<app-my-footer></app-my-footer>
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
	background: rgb(38,8,98);
background: -moz-radial-gradient(circle, rgba(38,8,98,1) 0%, rgba(56,32,106,1) 100%);
background: -webkit-radial-gradient(circle, rgba(38,8,98,1) 0%, rgba(56,32,106,1) 100%);
background: radial-gradient(circle, rgba(38,8,98,1) 0%, rgba(56,32,106,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#260862",endColorstr="#38206a",GradientType=1);er: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5c39a4",endColorstr="#38206a",GradientType=1);	
}

.my-card {
	width: 100%;
	padding: 5% 1%;
	display: inline-block;
	margin: 4% 2%;
	background-color: #e3e3e3;
	border: 2px solid #00D9C7;
	border-radius: 1.2rem;
	padding: 20px 40px;
	-webkit-box-shadow: 0px 0px 30px 1px rgba(128, 128, 128, 0.8);
	-moz-box-shadow: 0px 0px 30px 1px rgba(128, 128, 128, 0.8);
	box-shadow: 0px 0px 30px 1px rgba(128, 128, 128, 0.8);
    }
</style>
