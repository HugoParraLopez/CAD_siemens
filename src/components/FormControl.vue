<template>
    <div>
        <div class="formContainer" v-if="!isLogin">
            <b-form id="login" @submit="localLogin">
                <h2 v-if="showInvalid">
                    {{ $t('login.invalidCredentials') }}
                </h2>
                <b-row>
                    <b-col  xs="12" sm="12" md="7">
                        <label for="username"> <strong>{{ $t('login.user') }}</strong> </label>
                        <b-form-input
                            id="username"
                            type="text"
                            v-model="username"
                        >
                        </b-form-input>
                    </b-col>
                    <b-col  xs="12" sm="12" md="7" style="padding-bottom: 2%">
                        <label for="password"> <strong>{{ $t('login.password') }}</strong> </label>
                        <b-form-input
                            id="password"
                            type="password"
                            v-model="password"
                        >
                        </b-form-input>
                    </b-col>
                </b-row>
                <button class="btn-se-main-login" type="submit" >
                    <span><arrow-right-icon :iconColor="'#101'"/></span>
                    {{ $t('login.submitBtn') }}
                </button>
            </b-form>
        </div>
        <div v-else class="formContainer" :key="componentChanged">
            <b-form @submit="onSubmit">
            <b-row style="padding-bottom: 2%">
                <b-col  xs="9" sm="9" md="9">
                    <h3> Panel de Control</h3>
                </b-col>
                <!-- <b-col  xs="3" sm="3" md="3">
                    <b-button class="btn-se-main-login" type="submit" >{{ $t('fg.submitBtn') }}</b-button>
                    <a id="downloadAnchorElem" style="display:none"></a>
                </b-col> -->
            </b-row>
            <b-row style="padding-bottom: 2%">
                <b-col  xs="2" sm="2" md="2">
                </b-col>
                <b-col  xs="3" sm="3" md="3">
                    <label for="newSNInput">{{ $t('fg.newSN') }}</label>
                    <!--
                    @slot Menu Item footer
                        @binding {bool} validation verrifies that the Serial Number is within range
                        @binding {string} text text of the menu item
                    -->
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
                    <b-button class="btn-se-main-login" @click="addNewSN" href="" :disabled="!validation">
                        <b-icon icon="arrow-right-square-fill"></b-icon>
                    </b-button>
                </b-col>
            </b-row>
            <b-card no-body>
                <b-tabs pills card horizontal> 
                    <b-tab 
                        class="my-tab"
                        v-for="(item, index) in getJSON()"
                        :key="index"
                        :title="index"
                        :active="index == activeSN && activeSN != ''"
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
                                    <b-button variant="secondary" href="#" @click="deleteDocument($event,k, index)">
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
import arrowRightIcon from './icons/ArrowRight.vue'
import { files } from './../js/files'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            myFiles: {},
            isLogin: false,
            showInvalid: false,
            componentChanged: 0,
            activeSN: '',
            /**
             * @model
             */
            newSNFromInput: '',
            KU: 'admin',
            KP: 'admin',
            username: '',
            password: ''
        }
    },
    components: {
        arrowRightIcon: arrowRightIcon,
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
        localLogin(event) {
            if (this.username === this.KU) {
                if (this.password === this.KP) {
                    this.isLogin = true
                    this.showInvalid = false
                } else {
                    this.showInvalid = true
                }
            } else {
                this.showInvalid = true
            }
        },
        updateComponent() {
            // ensures re-rendering after change
            // NEEDS CALL
            this.componentChanged += 1
        },
        onSubmit(event) {
            event.preventDefault()
            let dataString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.myFiles))
            let dlAnchorElem = document.getElementById('downloadAnchorElem')
            dlAnchorElem.setAttribute("href",     dataString     );
            dlAnchorElem.setAttribute("download", "myObjData.json");
            dlAnchorElem.click();
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
            delete this.myFiles[sn]
            this.updateComponent()
            
        },
        deleteDocument(event, currentKey, sn) {
            event.preventDefault()
            console.log('DELETING: ', currentKey, 'from SN:', sn)
            // delete file
            delete this.myFiles[sn][`${currentKey}`]
            let auxObj = {}
            let i = 0
            for ([k,v] of Object.entries(this.myFiles[sn])) {
                if (k != 'model') {
                    auxObj[i] = v
                    i++
                } else {
                    auxObj[k] = v
                }
            }
            this.myFiles[sn] = auxObj
            this.updateComponent()

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
            this.activeSN = serialNumber
            // console.log('New document for: ', serialNumber)
            if (firstTime) {
                this.myFiles[serialNumber]['model'] = {
                type: 'model',
                src: '',
            }
            this.myFiles[serialNumber][`0`] = {
                fileName: '',
                fileUrl: '',
                locale: 'es', 
            }
            } else {
                let nextIndex = Object.keys(this.myFiles[serialNumber]).length -1
                console.log('New Index to append ', nextIndex)
                this.myFiles[serialNumber][nextIndex] = {
                    fileName: '',
                    fileUrl: '',
                    locale: 'es', 
                }
                //console.log(Object.keys(this.myFiles[serialNumber]).length - 1)
            }
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

.btn-se-main-login {
    background-color: #FFF;
    border: none;
    border-radius: 30px;
    font-family: 'SiemensSansBold';
    padding: 12px 30px;
    color: #101;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
}

.btn-se-main-login:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 80%);
    color: #101;
    border-radius: 30px;
    font-size: 20px;
    font-family: 'SiemensSansBold';
    padding: 12px 30px;
    text-align: center;
    vertical-align: middle;
}
li a {
    color: red !important;
}
li a:hover {
    color: pink !important;
}
.nav-pills .nav-link.active {
    color: #FFF !important;
    background-color: #a54bf7 !important;
}
.my-tab {

}

</style>