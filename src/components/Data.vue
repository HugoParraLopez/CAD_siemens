<template>
    <div class="my-card">
        <h2>{{ $t('data.title') }}</h2> <br>
        <p>{{ $t('data.serial') }}<strong>{{ serialNumber }}</strong></p>
        <p>{{ $t('data.year') }}<strong>{{ year }}</strong></p>
        <p>{{ $t('data.factory') }}<strong>{{ factory }}</strong></p>
        <p>{{ $t('data.manufacturer') }}<strong>{{ manufacturer }}</strong></p>
        <p>{{ $t('data.number') }}<strong>{{ materialNumber }}</strong></p>
        
    </div>
</template>

<script>

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
    mounted: () => {
        //console.warn('DataMounted')
    }
}
</script>

<style scoped>

</style>