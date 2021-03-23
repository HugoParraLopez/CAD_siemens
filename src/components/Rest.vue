<template>
<div>
	<app-top-bar></app-top-bar>
    <div class="resting">
        <div class="loader">
            <span class="color-primary"></span>
            <span></span>
            <span></span>
        </div>
        <br>
        <div class="my-message">
            <span class="alert alert-info">Please Scan something to continue</span>
        </div>
    </div>
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

<style scoped>

.resting {
    background-color: #44306B;
    padding: 20% 10%;
    margin: auto;
    align-content: center;
}

.my-message {
    margin: auto;
    color: white;
    align-content: center;
    align-self: center;
    text-align: center;
}
/* CSS for animated bouncing loader. */
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Loader circles */
.loader > span {
  background: #00D9C7;
  border-radius: 50%;
  margin: 5rem 0.5rem;
  animation: bouncingLoader 0.6s infinite alternate;
}

.loader > span:nth-child(2) {
  animation-delay: 0.2s;
}

.loader > span:nth-child(3) {
  animation-delay: 0.4s;
}

/* Define the animation called bouncingLoader. */
@keyframes bouncingLoader {
  from {
    width: 0.1rem;
    height: 0.1rem;
    opacity: 1;
    transform: translate3d(0);
  }
  to {
    width: 1rem;
    height: 1rem;
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}

</style>
