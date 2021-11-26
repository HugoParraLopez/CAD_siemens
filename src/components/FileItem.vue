<template>
    <b-col :class="`item-card-${getTheme}`">
        <b-row class="item-title">
            <b-col class="item-name">
                <em>{{ fileName }}</em>
            </b-col>
            <b-col class="item-link">
                <b-button
                    style="margin-bottom: 0.5rem"
                    :disabled="!allData"
                    size="sm"
                    :class="`btn-se-main-${getTheme}`"
                    @click="deployPdf(fileUrl, fileName)"
                    href="#my-pdf-viewer">
                    <b-icon icon="eye-fill" aria-hidden="true"></b-icon> {{ $t('files.button') }}
                </b-button>
                <b-button :class="`btn-se-main-${getTheme}`">
                    <a
                    style="margin-bottom: 0.5rem; font-size: 12px"
                    @click="setDownloadUrl($event,fileUrl, fileName)"
                    >
                    <b-icon icon="download" aria-hidden="true"></b-icon></a>
                </b-button>
            </b-col>
        </b-row>
        <b-row class="item-tags">
            <b-badge
                
                v-for="(item, index) in tags"
                v-if="item.value != '--'"
                :key="index"
                :style="`
                    margin-right: 3px;
                    color: ${getTheme == 'light' ? item.hexColor2 : item.hexColor};
                    background-color: ${getTheme == 'light' ? '#BBB' : '#888'};
                    `"
                >{{item.value}}</b-badge>
        </b-row>
    </b-col>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    setup() {
        
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
        setDownloadUrl(event,url, filename) {
            event.preventDefault()
            window.open(url)
            // event.target.setAttribute("href", url)
            // event.target.setAttribute("download", filename+".pdf")
            // event.target.click()
            //console.log(event.target, url)
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
</style>