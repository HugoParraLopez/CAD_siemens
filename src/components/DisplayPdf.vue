<template>
    <div class="my-card" id="my-pdf-viewer">
        <!-- <div class="pdf">
            This is a PDF Viewer
        </div> -->
        <h3 class="my-file-title">{{ files[pdfIndex].name }}</h3>
        <p>{{ currentPage }}/{{ pageCount }}</p>
        <pdf
            :src="selectCurrentFile(pdfIndex)"
            @num-pages="pageCount = $event"
            @page-loaded="currentPage = $event"

            ></pdf>
    </div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
    data() {
        return {
            currentPage: 0,
            pageCount: 0,
            currentSource: 'https://gentle-castle-93152.herokuapp.com/https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            proxy: 'https://gentle-castle-93152.herokuapp.com',
            files:[
                {
                    id: 0,
                    src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    name: 'Testing 1 page'
                },
                {
                    id: 1,
                    src: 'http://www.orimi.com/pdf-test.pdf',
                    name: 'Different file to test'
                },
                {
                    id: 2,
                    src: 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf',
                    name: 'Option 3 for pdf test'
                },
            ]
        }
    },
    props: {
        pdfIndex: Number,
    },
    components: {
        pdf
    },
     methods: {
        selectCurrentFile(index) {
            this.currentSource = `${this.proxy}/${this.files[index].src} `
            console.log(this.currentSource)
            return this.currentSource
        }
    },
            // mounted() {
            //         console.info('Hello There')
            //         let domEl = this.$el
            //         PDFObject.embed('./../assets/docs/Formato_minutas.pdf',domEl)
            //         console.error(domEl)
            //     }
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
</style>