<template>
    <div :class="`my-card-${getTheme}`">
        <h3>{{ $t('files.title') }}</h3> <br>
        <ul>
            <app-file-item 
                v-for="(item, index) in filterFiles(getLocale)"
                v-bind="item"
                :key="index">
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
        }
    },
    methods: {
        filterFiles(compare) {
            let innerFiles = []
            //console.warn(files[this.serialNumber])
            for ([key,value] of Object.entries(files[this.serialNumber])) {
                //console.warn(key, value)
                if (value.locale == compare) {
                    innerFiles.push({
                        fileName: value.fileName,
                        fileUrl: value.fileUrl,
                        // tags: [
                        //     `${this.year}`,
                        //     `${this.materialNumber}`,
                        //     `${this.factory}`,
                        //     `${this.manufacturer}`,
                        // ],
                        tags: {
                            0: {
                                hexColor: '#FF66CC',
                                hexColor2: '#D555AA',
                                value: `${this.year}`,
                            },
                            1: {
                                hexColor: '#38bf1d',
                                hexColor2: '#2A9015',
                                value: `${this.materialNumber}`,
                            },
                            2: {
                                hexColor: '#ff8547',
                                hexColor2: '#B15C31',
                                value: `${this.factory}`,
                            },
                            3: {
                                hexColor: '#1468DF',
                                hexColor2: '#246CB5',
                                value: `${this.manufacturer}`,
                            },
                        }
                    })
                }
            }
            return innerFiles
        }
    },
    computed: {
        ...mapGetters([
            'getLocale',
            'getTheme',
        ]),
    },
    props: [
        'serialNumber',
        'year',
        'factory',
        'manufacturer',
        'materialNumber',
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