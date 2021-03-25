<template>
    <div class="my-card">
        <h3>DOCUMENTOS</h3> <br>
        <ul>
            <app-file-item 
                v-for="(item, index) in availableFiles"
                v-bind="item"
                :key="index">
            </app-file-item>
        </ul>
    </div>
</template>

<script>
import FileItem from './FileItem'
export default {
    data() {
        return {
            availableFiles: [
                { 
                    fileName: 'Testing 1 page',
                    tags: [`${this.serialNumber}`,'Material Number'],
                },
                { 
                    fileName: 'Different file to test',
                    tags: ['Year','Material Number'],
                },
                { 
                    fileName: 'Option 3 for the pdf test',
                    tags: ['Serial','Material Number'],
                },
            ]
        }
    },
    props: [
        'serialNumber',
        'year',
        'factory',
        'manufacturer',
        'materialNumber',
    ],
    afetMount() {
        console.warn('MOUNTED FILES')
        this.availableFile.forEach(i => {
            i.tags = [this.serialNumber,this.materialNumber]
        });
    },
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