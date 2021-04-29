<template>
    <div :class="`my-card-${getTheme}`" id="my-pdf-viewer">
        <!-- <div class="pdf">
            This is a PDF Viewer
        </div> -->
        <h3 class="my-file-title">{{ getPdfName }}</h3>
		<div
            v-if="getPdfName != undefined"
			id="my-pdf-loader"
		>
			<div
				:class="`my-pdf-nav-bar-${getTheme}`"
			>
				<p>{{ currentPage }}/{{ numPages }}</p>
			</div>
			<div class="my-pdf-overflow">
				<pdf
					v-for="i in numPages"
					:key="i"
					:page="i"
					:src="src"
					:num-pages="numPages"
					class="my-pdf-page"
					></pdf>
			</div>
		</div>
            <div v-else id="lazy-waiting">
                <b-alert v-if="getPdfName == undefined" variant="info" show>{{$t('selectPdf')}}</b-alert>
                <div class="loader" ></div>
            </div>
    </div>
</template>

<script>

import pdf from 'vue-pdf'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
	data() {
		return {
			src: 'perro',
			currentPage: 0,
            numPages: 0,
            altSource: 'https://gentle-castle-93152.herokuapp.com/https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            
        }
    },
    props: ['url'],
    components: {
		pdf
    },
     methods: {
		 ...mapMutations([
			 'setIsLoaded',
		 ]),
	},
    computed: {
		...mapGetters([
			'getPdfName',
            'getPdfUrl',
			'getTheme',
			'isLoaded'
        ])
    },
	beforeUpdate() {
		this.src = pdf.createLoadingTask(this.url)
		//console.error(this.url)
		// console.log('beforeUpdate',this.isLoaded, this.src)
	},
	updated() {
		// console.log('update',this.isLoaded)
		this.src.promise.then(pdf => {
			this.numPages = pdf.numPages
			// console.warn('ENTER PROMISE', pdf)
			// console.log('updatePromise',this.isLoaded)
		})
	}
}
</script>

<style scoped>
    #my-pdf-viewer{
        padding: 2% 1% !important;
        display: inline-block !important;
    }
    #my-pdf-loader{
        border: 2px solid #CCC;
    }
    .my-pdf-nav-bar-light{
		position: static;
		background-color: #AAA;
		padding: 2%;
    }
    .my-pdf-nav-bar-dark{
		position: static;
		background-color: #555;
		padding: 2%;
    }
	.my-pdf-page{
		display: inline-block;
		width: 100%;
		margin-top: 2%;
	}
    .my-file-title {
		padding: 5% 1%;
    }
	/* STARTING CLASSES FOR THE OVERFLOW DEPENDING ON THE DEVICE */
	@media only screen and (max-width: 600px) {
		/*For Legacy Mobile*/
		.my-pdf-overflow{
			height: 470px !important;
			overflow-y: scroll;
		}
	}
	@media only screen and (min-width: 600px) {
		/*For High-end Mobile*/
		.my-pdf-overflow{
			height: 650px !important;
			overflow-y: scroll;
		}
	}
	@media only screen and (min-width: 768px) {
		/*For Tablet*/
		.my-pdf-overflow{
			height: 500px !important;
			overflow-y: scroll;
		}
	}
	@media only screen and (min-width: 992px) {
		/*For PC*/
		.my-pdf-overflow{
			height: 675px !important;
			overflow-y: scroll;
		}
	}

    #lazy-waiting {
        text-align: center;
        margin: 0 5% 10% 5%;
    }

    .loader:before{
	content: "";
	position: absolute;
	top: 0px;
	left: -25px;
	height: 12px;
	width: 12px;
	border-radius: 12px;
	-webkit-animation: loaderg 3s ease-in-out infinite;
			animation: loaderg 3s ease-in-out infinite;
}

.loader{
	position: relative;
	width: 12px;
	height: 12px;
	top: 46%;
	left: 46%;
	border-radius: 12px;
	-webkit-animation: loaderm 3s ease-in-out infinite;
			animation: loaderm 3s ease-in-out infinite;
}


.loader:after{
	content: "";
	position: absolute;
	top: 0px;
	left: 25px;
	height: 10px;
	width: 10px;
	border-radius: 10px;
	-webkit-animation: loaderd 3s ease-in-out infinite;
			animation: loaderd 3s ease-in-out infinite;
}

@-webkit-keyframes loaderg{
	0%{background-color: rgba(0, 217, 199, .2);}
	25%{background-color: rgba(0, 217, 199, 1);}
	50%{background-color: rgba(0, 217, 199, .2);}
	75%{background-color: rgba(0, 217, 199, .2);}
	100%{background-color: rgba(0, 217, 199, .2);}
}
@keyframes loaderg{
	0%{background-color: rgba(0, 217, 199, .2);}
	25%{background-color: rgba(0, 217, 199, 1);}
	50%{background-color: rgba(0, 217, 199, .2);}
	75%{background-color: rgba(0, 217, 199, .2);}
	100%{background-color: rgba(0, 217, 199, .2);}
}

@-webkit-keyframes loaderm{
	0%{background-color: rgba(0, 217, 199, .2);}
	25%{background-color: rgba(0, 217, 199, .2);}
	50%{background-color: rgba(0, 217, 199, 1);}
	75%{background-color: rgba(0, 217, 199, .2);}
	100%{background-color: rgba(0, 217, 199, .2);}
}
@keyframes loaderm{
	0%{background-color: rgba(0, 217, 199, .2);}
	25%{background-color: rgba(0, 217, 199, .2);}
	50%{background-color: rgba(0, 217, 199, 1);}
	75%{background-color: rgba(0, 217, 199, .2);}
	100%{background-color: rgba(0, 217, 199, .2);}
}

@-webkit-keyframes loaderd{
	0%{background-color: rgba(0, 217, 199, .2);}
	25%{background-color: rgba(0, 217, 199, .2);}
	50%{background-color: rgba(0, 217, 199, .2);}
	75%{background-color: rgba(0, 217, 199, 1);}
	100%{background-color: rgba(0, 217, 199, .2);}
}
@keyframes loaderd{
	0%{background-color: rgba(0, 217, 199, .2);}
	25%{background-color: rgba(0, 217, 199, .2);}
	50%{background-color: rgba(0, 217, 199, .2);}
	75%{background-color: rgba(0, 217, 199, 1);}
	100%{background-color: rgba(0, 217, 199, .2);}
}
</style>