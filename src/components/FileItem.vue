<template>
    <b-col class="item-card">
        <b-row class="item-title">
            <b-col class="item-name">
                <em>{{ fileName }}</em>
            </b-col>
            <b-col class="item-link">
                <b-button
                    :disabled="!allData"
                    size="sm"
                    class="btn-accent"
                    @click="deployPdf(fileUrl, fileName)"
                    href="#my-pdf-viewer">
                    <b-icon icon="eye-fill" aria-hidden="true"></b-icon> {{ $t('files.button') }}
                </b-button>
            </b-col>
        </b-row>
        <b-row class="item-tags">
            <b-badge
                variant="info"
                v-for="(item, index) in tags"
                :key="index"
                style="margin-right: 3px">{{item}}</b-badge>
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
            type: Array,
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
            'setPdfName'
        ]),
        deployPdf(url,name) {
            //console.warn(url)
            this.setPdfUrl(url)
            this.setPdfName(name)
        }
    },
    computed: mapGetters({
        allData: 'getAllData',
    })
}
</script>

<style scoped>
.item-card {
    background-color: #755da8;
    color: white;
    border-radius: 12px;
	border: 3px solid #00D9C7;
    align-items: center;
    margin: auto;
    margin-top: 4%;
    padding-top: 2%;

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