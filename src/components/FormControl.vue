<template>
    <div>
        <div class="formContainer">
            <p v-for="(item, index) in getJSON()" :key="index">
                {{ item }}
            </p>
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
        }
    }
}
</script>

<style scoped>

.formContainer {
    padding: 20% 5%;
    margin: auto;
    align-content: center;
}
@media only screen and (max-width: 600px) {
    .formContainer {
        padding: 35% 5%
    }
}

</style>