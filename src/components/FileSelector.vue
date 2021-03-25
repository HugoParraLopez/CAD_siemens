<template>
    <div class="my-card">
        <h3>DOCUMENTOS</h3> <br>
        <ul>
            <app-file-item 
                v-for="(item, index) in availableFiles"
                v-bind="item"
                :key="index"
                @selectedFile="selectFile(index,$event)">
            </app-file-item>
        </ul>
    </div>
</template>

<script>
import FileItem from './FileItem'
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
    methods: {
        selectFile(index,event) {
            this.selectedIndex = event ? index : 0
            console.warn(this.selectedIndex)
            this.$emit('updatePdfIndex', this.selectedIndex)
        }
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