<template>
    <div id="my-footer" style="background-color: #1B1534">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <p>{{ $t('developed') }}</p>
                </b-col>
                <b-col>
                    <p>{{ $t('credits') }}</p>
                </b-col>
            </b-row>
            <b-row class="bottom-row">
                <b-col>
                    <p>{{ $t('disclaimer') }}</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            developer: 'Siemens Energy México',
        }
    },
}
</script>

<style scoped>

    .bottom-row {
        border-top: 1.5px solid white;
        font-size: 12px;
        padding-top: 2%;
        padding-bottom: 2%;
        color: #6A728F !important;

    }

    #my-footer {
        padding-top: 100px;
        color: white;
    }
    @media only screen and (max-width: 600px) {
        #my-footer {
            padding-top: 65px;
            margin-bottom: 0px;
            padding-bottom: 0px;
        }
    }

</style>