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

            <b-card no-body>
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
                                        :placeholder="element"
                                        :value="element"
                                        :type="validateType(tag)"
                                    ></b-form-input>
                                </b-form-group> 
                                <br>
                            
                        </div>
                        <!-- {{ item }} -->
                    </b-tab>
                </b-tabs>
            </b-card>
            </b-form>
        </div>
    </div>
</template>

<script>
import { files } from './../js/files'
export default {
    data() {
        return {
            myFiles: {

            }
        }
    },
    methods: {
        getJSON() {
            this.myFiles = files
            // manage Locally for the BLOB??
            return this.myFiles
        },
        validateType(type) {
            return type.toString() == ('fileUrl' || 'src') ? 'url' : 'text'
        },
        onSubmit(event) {
            event.preventDefault()
            console.log('RGEJGJEIRJGIERIGEJGEIJGIAJG')
        },
        onReset(event) {
            event.preventDefault()
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