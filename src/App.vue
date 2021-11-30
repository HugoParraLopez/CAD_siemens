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
@import './style/se.css';


#app {
	font-family: 'SiemensSans' !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

/* Themes for the background (gradients) */
#dark-body {
	background-image: url("./assets/img/gradient_bg.png");
	background-repeat: no-repeat;
	background-size: cover;
}

#light-body {
	background: #F0F0F0;
}

	/* Themes for the card backgrounds */
.my-card-light-legacy {
	width: 100%;
	display: inline-block;
	margin: 4% 2%;
	background-color: #FFF;
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
	position: relative;
	margin: 4% 2%;
	background-color: #FFF;
	border: 1.2px solid #E2E2E2;
	padding: 20px 40px;
}
.my-card-light:hover::before {
	 content: '';
	 position: absolute;
	 width: 100%;
	 height: calc(100% + 4px);
	 top: calc(2px/-1);
	 left: 0;
	 background: linear-gradient(to right, #641E8C 0%, #641E8C 100%),linear-gradient(to right, #641E8C 0%, #641E8C 100%), linear-gradient(to left, #641E8C 0%, #641E8C 100%);
	 background-size: 100% 2px;
	 background-position: 0% 100%;
	 background-repeat: no-repeat, no-repeat;
	 transition: transform 0.5s ease-in-out, background-position 0.3s ease-in-out, background-size 0.3s ease-in-out;
	 -webkit-transition: transform 0.5s ease-in-out, background-position 0.3s ease-in-out, background-size 0.3s ease-in-out;
	 transform: scaleX(0) rotate(0deg);
	 transition-delay: 0.6s, 0.3s, 0s;
}
.my-card-light:hover::before {
	 background-size: 200% 2px, ;
	 background-position: 0% 100%;
	 transform: scaleX(1) rotate(0deg);
	 transition-delay: 0s, 0.3s, 0.6s;
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

	/* .btn-se-main-light {
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
	} */
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
