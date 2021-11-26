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
/* @font-face {
  font-family: "SiemensSans";
  src: local("SiemensSans"), url('./assets/fonts/SiemensSans_Global_Roman.ttf') format("truetype");
} */

#app {
	font-family: 'SiemensSans', Helvetica, Arial, sans-serif;
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
	/* background: rgb(46,28,77);
	background: -moz-radial-gradient(circle, rgba(46,28,77,1) 0%, rgba(59,47,74,1) 100%);
	background: -webkit-radial-gradient(circle, rgba(46,28,77,1) 0%, rgba(59,47,74,1) 100%);
	background: radial-gradient(circle, rgba(46,28,77,1) 0%, rgba(59,47,74,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2e1c4d",endColorstr="#3b2f4a",GradientType=1); */
	background-image: url("./assets/img/gradient_bg.png");
	background-repeat: no-repeat;
	background-size: cover;
}

#light-body {
	background: rgb(255,255,255);
	/* background: -moz-radial-gradient(circle, rgba(248,244,255,1) 0%, rgba(214,212,218,1) 100%);
	background: -webkit-radial-gradient(circle, rgba(248,244,255,1) 0%, rgba(214,212,218,1) 100%);
	background: radial-gradient(circle, rgba(248,244,255,1) 0%, rgba(214,212,218,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f8f4ff",endColorstr="#d6d4da",GradientType=1); */
}

	/* Themes for the card backgrounds */
.my-card-light-legacy {
	width: 100%;
	display: inline-block;
	margin: 4% 2%;
	background-color: #e3e3e3;
	border: 1.2px solid #00D9C7;
	border-radius: 1.2rem;
	padding: 20px 40px;
	-webkit-box-shadow: 0px 0px 30px 1px rgba(128, 128, 128, 0.8);
	-moz-box-shadow: 0px 0px 30px 1px rgba(128, 128, 128, 0.8);
	box-shadow: 0px 0px 30px 1px rgba(128, 128, 128, 0.8);
}
.my-card-dark-legacy {
	width: 100%;
	color: #ccc;
	display: inline-block;
	margin: 4% 2%;
	background-color: #373637;
	border: 1.2px solid #009E91;
	border-radius: 1.2rem;
	padding: 20px 40px;
	-webkit-box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
	-moz-box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
	box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
}
.my-card-light {
	width: 100%;
	display: inline-block;
	margin: 4% 2%;
	background-color: #F8F8F8;
	border: 1.2px solid #E2E2E2;
	padding: 20px 40px;
}
.my-card-dark {
	width: 100%;
	display: inline-block;
	margin: 4% 2%;
	background-color: #FFFFFF;
	border: 1.2px solid #E2E2E2;
	padding: 20px 40px;
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
	.bg-se-dark-purple {
		background-color: #1B1534;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.btn-se-dark-purple {
		background-color: #1B1534;
		outline-color: #1B1534ee;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.bg-se-medium-purple {
		background-color: #4D217A ;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.btn-se-medium-purple {
		background-color: #4D217A ;
		outline-color: #1B1534;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.bg-se-purple {
		background-color: #641E8C ;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.btn-se-purple {
		background-color: #641E8C ;
		outline-color: #4D217A;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.bg-se-petrol {
		background-color: #009999 ;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	.btn-se-petrol {
		background-color: #009999 ;
		outline-color: #009999ee;
		color: #FFF;
		text-align: center;
		vertical-align: middle;
	}
	

	/* Themes for the background PDF controllers?? */

</style>
