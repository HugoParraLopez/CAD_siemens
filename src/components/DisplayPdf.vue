<template>
    <div class="my-card" id="my-pdf-viewer">
        <!-- <div class="pdf">
            This is a PDF Viewer
        </div> -->
        <h3 class="my-file-title">{{ getPdfName }}</h3>
        <p v-show="getPdfName != undefined">{{ currentPage }}/{{ pageCount }}</p>
        <pdf
            :src="`${proxy}/${getPdfUrl}`"
            @num-pages="pageCount = $event"
            @page-loaded="currentPage = $event"

            ></pdf>
    </div>
</template>

<script>

import pdf from 'vue-pdf'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            currentPage: 0,
            pageCount: 0,
            altSource: 'https://gentle-castle-93152.herokuapp.com/https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            proxy: 'https://gentle-castle-93152.herokuapp.com',
        }
    },
    components: {
        pdf
    },
     methods: {
         ...mapMutations([

         ]),
        selectCurrentFile(index) {
            this.currentSource = `${this.proxy}/${this.files[index].src} `
            console.log(this.currentSource)
            return this.currentSource
        }
    },
    computed: {
        ...mapGetters([
            'getPdfUrl',
            'getPdfName',
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
</style>