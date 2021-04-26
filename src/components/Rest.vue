<template>
<div>
	
    <div class="resting">
        <div class="my-message">
            <span class="alert alert-warning">{{ $t('restMsg') }}</span>
        </div>
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <br>
    </div>
</div>
</template>

<script>

export default {
	data() {
		return {
            msg: 'Por favor escanee un codigo válido'
		}
	},
	methods: {
		
	},
	mounted: () => {
			//console.warn('AYUMDAM')
		}
}
</script>

<style scoped>

.resting {
    padding: 20% 5%;
    margin: auto;
    align-content: center;
}
@media only screen and (max-width: 600px) {
    .resting {
        padding: 35% 5%
    }
}

.my-message {
    width: 100%;
    overflow: visible;
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
