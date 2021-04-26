<template>
    <div class="my-card" id="my-pdf-viewer">
        <!-- <div class="pdf">
            This is a PDF Viewer
        </div> -->
        <h3 class="my-file-title">{{ getPdfName }}</h3>
        <p v-show="getPdfName != undefined">{{ currentPage }}/{{ pageCount }}</p>
        <pdf
            v-if="getPdfUrl != undefined"
            :src="url"
            @num-pages="pageCount = $event"
            @page-loaded="currentPage = $event"

            ></pdf>
            <div v-else id="lazy-waiting" style="margin-bottom: 10%">
                <b-alert v-if="getPdfName == undefined" variant="info" show>{{$t('selectPdf')}}</b-alert>
                <div class="loader" ></div>
            </div>
    </div>
</template>

<script>

import pdf from 'vue-pdf'
import { mapGetters } from 'vuex'

//let pdfDocument = pdf.createLoadingTask(url)
export default {
    data() {
        return {
            currentPage: 0,
            pageCount: 0,
            altSource: 'https://gentle-castle-93152.herokuapp.com/https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            
        }
    },
    props: ['url'],
    components: {
        pdf
    },
     methods: {
    },
    computed: {
        ...mapGetters([
            'getPdfName',
            'getPdfUrl'
        ])
    }
}
</script>

<style scoped>
    .my-card{
        padding: 2% 1% !important;
        display: inline-block !important;
    }
    .my-file-title {
        padding: 5% 1%;
    }

    #lazy-waiting {
        text-align: center;
        margin: 0 5% 0 5%;
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