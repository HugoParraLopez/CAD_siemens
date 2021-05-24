<template>
    <div>
        <div class="formContainer" :key="componentChanged">
            <b-form @submit="onSubmit">
            <b-row style="padding-bottom: 2%">
                <b-col  xs="9" sm="9" md="9">
                    <h3>{{ $t('fg.title') }}</h3>
                </b-col>
                <b-col  xs="3" sm="3" md="3">
                    <b-button variant="primary" type="submit">{{ $t('fg.submitBtn') }}</b-button>
                </b-col>
            </b-row>
            <b-row style="padding-bottom: 2%">
                <b-col  xs="2" sm="2" md="2">
                </b-col>
                <b-col  xs="3" sm="3" md="3">
                    <label for="newSNInput">{{ $t('fg.newSN') }}</label>
                    <b-form-input
                        id="newSNInput"
                        type="text"
                        v-model="newSNFromInput"
                        :state="validation"
                    >
                    </b-form-input>
                    <b-form-invalid-feedback :state="validation">
                        {{ $t('fg.validationFalse') }}
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback :state="validation">
                        {{ $t('fg.validationTrue') }}
                    </b-form-valid-feedback>
                </b-col>
                <b-col  xs="7" sm="7" md="3" style="margin: auto; margin-left: 0%">
                    <b-button variant="info" @click="addNewSN" href="#" :disabled="!validation">
                        <b-icon icon="arrow-right-square-fill"></b-icon>
                    </b-button>
                </b-col>
            </b-row>
            <b-card no-body>
                <b-tabs pills card vertical>
                    <b-tab 
                        v-for="(item, index) in getJSON()"
                        :key="index"
                        :title="index"
                    >
                        <b-row style="display: flex;">
                            <b-col xs="10" sm="10" md="10">                                
                                <h2>
                                    {{ $t('data.serial') }}
                                    <strong>{{ index }}</strong>
                                </h2>
                            </b-col>
                            <b-col xs="2" sm="2" md="2">                                
                                <b-button variant="danger" href="#" @click="deleteSN($event,index)">
                                <b-icon icon="trash" aria-hidden ></b-icon>
                            </b-button>
                            </b-col>
                        </b-row>
                        <br>
                        <div
                            v-for="(v, k) in item"
                            :key="k"
                        > 
                            <div id="file-header"><b-row>
                                <b-col xs="7" sm="7" md="9">
                                    <h4>
                                        {{ $t('fg.file') }}
                                        {{
                                            k != 'model' ? parseInt(k) + 1 : $t('fg.ofSim')
                                        }}:
                                    </h4>
                                </b-col>
                                <b-col 
                                    xs="5" sm="5" md="3"
                                    style="margin: auto; margin-left: 0%"
                                >
                                    <b-button variant="secondary" href="#" @click="deleteDocument($event,k)">
                                        <b-icon icon="trash" aria-hidden="true"></b-icon> {{ $t('fg.deleteFile') }}
                                    </b-button>
                                </b-col>
                            </b-row></div>
                            
                                <b-form-group
                                    v-for="(element, tag) in v"
                                    :key="tag"
                                    :id="tag + index"
                                >
                                    <label :for="tag + index"><i>{{ $t(`files.${tag}`) }}:</i></label>
                                    <b-form-input
                                        required
                                        :disabled="element == 'model'"
                                        :placeholder="createPlacehodler(tag)"
                                        :value="element"
                                        :type="validateType(tag)"
                                        v-model="myFiles[index][k][tag]"
                                    ></b-form-input>
                                </b-form-group> 
                                <br>
                        </div>
                        <div style="display: flex;">
                            <b-button
                                variant="success"
                                @click="createDocument($event,index)"
                                style="margin: auto;"
                            >
                                <b-icon icon="plus-square" aria-hidden="true"></b-icon>
                                {{ $t('fg.addBtn') }}
                            </b-button>
                        </div>
                        <strong>ITEM</strong>
                        {{ item }}
                        <br>
                        <br>
                        <br>
                        <strong>TEMPORAL</strong>
                        {{ myFiles[index] }}
                    </b-tab>
                </b-tabs>
            </b-card>
            </b-form>
        </div>
    </div>
</template>

<script>
import { files } from './../js/files'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            myFiles: {},
            componentChanged: 0,
            newSNFromInput: '',
        }
    },
    computed: {
        validation() {
            return this.newSNFromInput.length > 7 && this.newSNFromInput.length < 11  
        },
        ...mapGetters({
        getTheme: 'getTheme',
        getLocale: 'getLocale'
    })},
    methods: {
        /*
        * General [Kenobi] methods for component behavior
        */
        getJSON() {
            this.myFiles = files
            // manage Locally to change without remorse
            return this.myFiles
        },
        updateComponent() {
            // ensures re-rendering after change
            // NEEDS CALL
            this.componentChanged += 1
        },
        onSubmit(event) {
            event.preventDefault()
            console.log('RGEJGJEIRJGIERIGEJGEIJGIAJG')
        },
        onReset(event) {
            event.preventDefault()
        },
        
        /* 
        * Concerning the types of fields for each document
        */
        validateType(type) {
            // for input validation. "ensures" the URL structure
            return type.toString() == ('fileUrl' || 'src') ? 'url' : 'text'
        },
        createPlacehodler(tag) {
            let myPH = 'none'
            switch (tag) {
                case 'fileName':
                    myPH = this.getLocale == 'es' ? 'Nombre de Archivo' : 'File Name'
                    break;
                case 'fileURL':
                    myPH = this.getLocale == 'es' ? 'Dirección' : 'URL'
                    break;
                case 'locale':
                    myPH = this.getLocale == 'es' ? 'Idioma' : 'Language'
                    break;
                default:
                    myPH = this.getLocale == 'es' ? 'Llenar campo' : 'Fill this'
                    break;
            }
            return myPH
        },
        /*
        * Deleting Documents  and Serial Numberses precious
        */
        deleteSN(event,sn) {
            event.preventDefault()
            console.log('DELETING: ', sn)
            
        },
        deleteDocument(event, currentKey) {
            event.preventDefault()
            console.log('DELETING: ', currentKey)

        },
        /*
        * Creating and edditing thingies
        */
        addNewSN(event) {
            event.preventDefault()
            console.log('ADDING: ', this.newSNFromInput)
            this.validateSNasNumber().then((ans) => {
                if (ans) {
                    this.myFiles[this.newSNFromInput] = {}
                    this.createDocument(event,this.newSNFromInput,true)
                }
            })
        },
        async validateSNasNumber() {
            let aux = false
            let rg = /^[0-9]*$/
            aux = rg.test(this.newSNFromInput)
            // console.warn(aux, '---------------')
            return aux
        },
        addingTiles(event) {
            event.preventDefault()
            console.log('ADDIG!!')
        },
        createDocument(event,serialNumber, firstTime = false) {
            // recieves the serial number of the desired interruptor [SN]
            // prevents from submitting or any undesirable behavior
            event.preventDefault()
            // console.log('New document for: ', serialNumber)
            let nextIndex = 0
            nextIndex = firstTime? 0 : Object.keys(this.myFiles[serialNumber]).length - 1
            console.log('New Index to append ', nextIndex)
            this.myFiles[serialNumber][nextIndex] = {
                fileName: '',
                fileUrl: '',
                locale: 'es', 
            }
            console.log(Object.keys(this.myFiles[serialNumber]).length - 1)
            this.updateComponent()
            console.log('UPDATED!')

        },
    }
}
</script>

<style scoped>

.formContainer {
    padding: 5% 5%;
    margin: auto;
    align-content: center;
}
@media only screen and (max-width: 600px) {
    .formContainer {
        padding: 12% 5%
    }
}

</style>