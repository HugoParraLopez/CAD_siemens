<template>
    <div>
        <div class="formContainer">
            <h3>CONTROL FILE GENERATOR</h3>

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
                                Archivo {{ k }}:
                            </h4>
                            <b-form @submit="onSubmit($event,index)">
                                <b-form-group
                                    v-for="(element, tag) in v"
                                    :key="tag"
                                    :label="tag"
                                >
                                    <b-form-input
                                        required
                                        :placeholder="printItem(element)"
                                    ></b-form-input>
                                </b-form-group> 
                                <br>
                            </b-form>
                        </div>
                        {{ item }}
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import { files } from './../js/files'
export default {
    data() {
        return {

        }
    },
    methods: {
        getJSON() {
            return files
        },
        printItem(item) {
            return JSON.stringify(item)
        },
        onSubmit(event, index) {
            event.preventDefault()
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