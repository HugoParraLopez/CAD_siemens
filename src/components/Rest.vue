<template>
<div>
	<app-top-bar></app-top-bar>
    <div class="row">{{ $route.query.S }}</div>
    <div class="row">{{ $route.query.D }}</div>
	<footer>
		<app-my-footer></app-my-footer>
	</footer>
</div>
</template>

<script>
	import TopBar from './TopBar'
	import MyFooter from './Footer'
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
	mounted: () => {
			console.warn('Ganto')
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
