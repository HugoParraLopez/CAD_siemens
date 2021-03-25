<template>
    <div class="my-card">
        <!-- <div class="pdf">
            This is a PDF Viewer
        </div> -->
        <p>{{ currentPage }}/{{ pageCount }}</p>
        <pdf
            src="https://gentle-castle-93152.herokuapp.com/https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
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
        }
    },
    components: {
        pdf
    },
     methods: {
                
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
    .pdf {
        width: 90%;
        height: 90%;
        margin: auto;
        padding: 1%;
        background-color: lightgray;
        border: 5px solid black;
        border-radius: 1px;
        text-align: center;
        align-self: center;

    }
</style>