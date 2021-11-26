<template>
    <div :class="`my-card-${getTheme}`">
        <h2>{{ $t('data.title') }}</h2> <br>
        <ul>
            <p>{{ $t('data.serial') }}<strong>{{ serialNumber }}</strong></p>
            <p>{{ $t('data.year') }}<strong>{{ year }}</strong></p>
            <p>{{ $t('data.factory') }}<strong>{{ factory }}</strong></p>
            <p>{{ $t('data.manufacturer') }}<strong>{{ manufacturer }}</strong></p>
            <p>{{ $t('data.number') }}<strong>{{ materialNumber }}</strong></p>

        </ul>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            test: 'Some Data',
        }
    },
    props: [
        'serialNumber',
        'year',
        'factory',
        'manufacturer',
        'materialNumber',
    ],
    computed: {
        ...mapGetters([
            'getTheme',
        ])
    }
}
</script>

<style scoped>

</style>