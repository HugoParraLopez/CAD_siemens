<template>
    <div>
        <div class="formContainer">
            <b-form @submit="onSubmit">
            <b-row style="padding-bottom: 2%">
                <b-col  xs="9" sm="9" md="9">
                    <h3>{{ $t('fg.title') }}</h3>
                </b-col>
                <b-col  xs="3" sm="3" md="3">
                    <b-button variant="primary" type="submit">{{ $t('fg.submitBtn') }}</b-button>
                </b-col>

            </b-row>

            <b-card no-body :key="componentChanged">
                <b-tabs pills card vertical>
                    <b-tab 
                        v-for="(item, index) in getJSON()"
                        :key="index"
                        :title="index"
                    >
                        <h2>
                            {{ $t('data.serial') }}
                            <strong>{{ index }}</strong>
                        </h2><br>
                        <div
                            v-for="(v, k) in item"
                            :key="k"
                        > 
                            <h4>
                                {{ $t('fg.file') }}
                                {{
                                    k != 'model' ? parseInt(k) + 1 : $t('fg.ofSim')
                                }}:
                            </h4>
                            
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
                    <b-tab
                        title="<i>RR</i>"
                        @click="addingTiles($event)"
                    >
                        <b-button variant="success">+</b-button>
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
            myFiles: {

            },
            componentChanged: 0,
        }
    },
    computed: mapGetters({
        getTheme: 'getTheme',
        getLocale: 'getLocale'
    }),
    methods: {
        /*
        General [Kenobi] methods for component behavior
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
        Concerning the types of fields for each document
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
        Creating and edditing thingies
        */
        addingTiles(event) {
            event.preventDefault()
            console.log('ADDIG!!')
        },
        createDocument(event,serialNumber) {
            // recieves the serial number of the desired interruptor [SN]
            // prevents from submitting or any undesirable behavior
            event.preventDefault()
            // console.log('New document for: ', serialNumber)
            let nextIndex = 0
            nextIndex = Object.keys(this.myFiles[serialNumber]).length - 1
            console.log('New Index to append ', nextIndex)
            this.myFiles[serialNumber][nextIndex] = {
                fileName: '',
                fileUrl: '',
                locale: 'es', 
            }
            this.updateComponent()

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