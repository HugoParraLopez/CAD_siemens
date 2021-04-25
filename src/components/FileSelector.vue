<template>
    <div class="my-card">
        <h3>DOCUMENTOS, {{ selectedIndex }}</h3> <br>
        <ul>
            <app-file-item 
                v-for="(item, index) in filterFiles()"
                v-bind="item"
                :key="index"
                @selectedFile="selectFile(index,$event)">
            </app-file-item>
        </ul>
    </div>
</template>

<script>
import FileItem from './FileItem'
import { files } from './../js/files'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            selectedIndex: 0,
            availableFiles: [
                { 
                    fileName: 'Testing 1 page',
                    tags: [`${this.serialNumber}`,`${this.materialNumber}`],
                    selected: false,
                },
                { 
                    fileName: 'Different file to test',
                    tags: [`${this.serialNumber}`,`${this.materialNumber}`],
                    selected: false,
                },
                { 
                    fileName: 'Option 3 for the pdf test',
                    tags: [`${this.serialNumber}`,`${this.materialNumber}`],
                    selected: false,
                },
            ]
        }
    },
    mounted: () => {
        this.selectedIndex = 2
        //console.warn('MOUNTED FILES', this.selectedIndex, files)
    },
    methods: {
        selectFile(index,event) {
            this.selectedIndex = event ? index : 0
            //console.warn(this.selectedIndex)
            this.$emit('updatePdfIndex', this.selectedIndex)
        },
        filterFiles() {
            let innerFiles = []
            let compare = 'es'
            console.warn(files[this.serialNumber])
            for ([key,value] of Object.entries(files[this.serialNumber])) {
                console.warn(key, value)
                if (value.locale == compare) {
                    innerFiles.push({
                        fileName: value.fileName,
                        fileUrl: value.fileUrl,
                        tags: [
                            `${this.year}`,
                            `${this.materialNumber}`,
                            `${this.factory}`,
                            `${this.manufacturer}`,
                        ],
                    })
                }
            }
            return innerFiles
        }
    },
    computed: {
        ...mapGetters([
            'getLocale'
        ]),
    },
    props: [
        'serialNumber',
        'year',
        'factory',
        'manufacturer',
        'materialNumber',
        'pdfIndex',
    ],
    components: {
        appFileItem: FileItem,
    },
}
</script>

<style scoped>  
    .file-tile {
        display: inline-block !important;
        margin: 2px 5px;
    }
</style>