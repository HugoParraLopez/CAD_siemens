<template>
    <b-col :class="`item-card-${getTheme}`">
        <b-row class="item-title">
            <b-col class="item-name">
                <em>{{ fileName }}</em>
            </b-col>
            <b-col class="item-link">
                <button
                    :disabled="!allData"
                    size="sm"
                    :class="`btn-se-action-${getTheme}`"
                    @click="deployPdf(fileUrl, fileName)"
                    href="">
                        <span><document-icon/></span>
                </button>
                <a 
                    @click="setDownloadUrl($event,fileUrl, fileName)"
                    v-if="allData">
                    <button
                        size="sm"
                        :class="`btn-se-action-${getTheme}`"
                        @click="preventBtn($event)">
                            <span><download-icon/></span>
                    </button>
                </a>
            </b-col>
        </b-row>
        <b-row class="item-tags">
            <b-badge
                
                v-for="(item, index) in tags"
                v-if="item.value != '--'"
                :key="index"
                class="badge-default"
                >{{item.value}}</b-badge>
        </b-row>
    </b-col>
</template>

<script>
import documentIcon from './icons/Document.vue'
import downloadIcon from './icons/Download.vue'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    setup() {
        
    },
    components: {
        documentIcon: documentIcon,
        downloadIcon: downloadIcon,
    },
    props: {
        fileName: {
            type: String,
            required: true,
        },
        tags: {
            type: Object,
            required: false,
        },
        fileUrl: {
            type: String,
            required: true,
        }
    },
    methods: {
        ...mapMutations([
            'setPdfUrl',
            'setPdfName',
            'setIsLoaded'
        ]),
        deployPdf(url,name) {
            //console.warn(url)
            this.setPdfUrl(url)
            this.setPdfName(name)
            // console.error('before', this.isLoaded)
            // this.setIsLoaded(false,name)
            // console.error('After', this.isLoaded)
        },
        checkAllData () {
            return this.allData
        },
        setDownloadUrl(event,url, filename) {
            event.preventDefault()
            window.open(url)
            // event.target.setAttribute("href", url)
            // event.target.setAttribute("download", filename+".pdf")
            // event.target.click()
            //console.log(event.target, url)
        },
        preventBtn(event) {
            event.preventDefault()
        }
    },
    computed: mapGetters({
        allData: 'getAllData',
        getTheme: 'getTheme',
        isLoaded: 'isLoaded'
    })
}
</script>

<style scoped>
.item-card-light {
    color: black;
	background-color: #FFFFFF;
	border: 1.2px solid #E2E2E2;
    align-items: center;
    margin: auto;
    margin-top: 4%;
    padding-top: 2%;
}
.item-card-light:hover {
    /* cursor: pointer; */
    box-shadow: 0px 2px 25px rgba(27,23,52,0.2), 0px 0px 1px rgba(27,23,52,0.2);
    -webkit-box-shadow: 0px 2px 25px rgba(27,23,52,0.2), 0px 0px 1px rgba(27,23,52,0.2);
    -moz-box-shadow: 0px 2px 25px rgba(27,23,52,0.2), 0px 0px 1px rgba(27,23,52,0.2);
}
.item-card-dark {
    background-color: #5E4B87;
    color: white;
    border-radius: 12px;
	border: 3px solid #009E91;
    align-items: center;
    margin: auto;
    margin-top: 4%;
    padding-top: 2%;

}
.item-card-dark:hover {
    -webkit-box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
    -moz-box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
    box-shadow: 0px 0px 30px 1px rgba(71, 71, 71, 0.8);
}

.item-title {
    padding: 2%;
    text-align: left;
}

.item-link {
    align-self: center;
    text-align: end;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
}

.item-tags {

    padding: 1% 0% 2% 5%;
}

.btn-accent {
    background-color: #00CCCC;
    outline-color: #0CC0DD;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
}

.btn-accent:hover {
    background-color: #02acac;
    outline-color: #08abcd;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
}

.badge-default {
    
    margin-right: 5px;
    color: #a54bf7;
    background-color: white;
    border: .5px solid #a54bf7;
    border-radius: 12px;
                    
}

.btn-se-action-light {
    background-color: #4d217a!important;
    border-radius: 30px;
    padding: 5px 5px;
    border: none;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
}
.btn-se-action-light:hover {
    background-color: #641e8c!important;
    border-radius: 30px;
    padding: 5px 5px;
    border: none;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
}

</style>