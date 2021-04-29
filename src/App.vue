<template>
<div :id="`${getTheme}-body`">
	<app-top-bar></app-top-bar>
	<router-view></router-view>
	<app-my-footer></app-my-footer>
</div>
</template>

<script>
	import TopBar from './components/TopBar'
	import MyFooter from './components/Footer'
	import { mapGetters } from 'vuex'
export default {
	components: {
		appTopBar: TopBar,
		appMyFooter: MyFooter,
	},
	computed: {
		...mapGetters([
			'getTheme',
		]),
	}

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

/* Themes for the background (gradients) */
#dark-body {
	background: rgb(46,28,77);
	background: -moz-radial-gradient(circle, rgba(46,28,77,1) 0%, rgba(65,65,65,1) 100%);
	background: -webkit-radial-gradient(circle, rgba(46,28,77,1) 0%, rgba(65,65,65,1) 100%);
	background: radial-gradient(circle, rgba(46,28,77,1) 0%, rgba(65,65,65,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2e1c4d",endColorstr="#414141",GradientType=1);
}

#light-body {
	background: rgb(248,244,255);
	background: -moz-radial-gradient(circle, rgba(248,244,255,1) 0%, rgba(214,212,218,1) 100%);
	background: -webkit-radial-gradient(circle, rgba(248,244,255,1) 0%, rgba(214,212,218,1) 100%);
	background: radial-gradient(circle, rgba(248,244,255,1) 0%, rgba(214,212,218,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f8f4ff",endColorstr="#d6d4da",GradientType=1);
}

	/* Themes for the card backgrounds */
.my-card-light {
	width: 100%;
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
.my-card-dark {
	width: 100%;
	color: #ccc;
	display: inline-block;
	margin: 4% 2%;
	background-color: #373637;
	border: 2px solid #009E91;
	border-radius: 1.2rem;
	padding: 20px 40px;
	-webkit-box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
	-moz-box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
	box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
}
		/* Themes for the buttons */

	.btn-se-main-light {
		background-color:#039e9e;
		outline-color: #00CCCC;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}

	.btn-se-main-light:hover {
		background-color:#038686;
		outline-color: #00CCCC;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.btn-se-main-dark {
		background-color: #5F3DA8;
		outline-color: #1f0e41;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}

	.btn-se-main-dark:hover {
		background-color: #391d72;
		outline-color: #1f0e41;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	/* Themes for the File Containers */


	/* Themes for the background PDF controllers?? */

</style>
