<template>
    <div class="my-card">
        <h2>DATOS GENERALES</h2> <br>
        <p>Serial Number: <strong>{{ serialNumber }}</strong></p>
        <p>Year of manufacturing: <strong>{{ year }}</strong></p>
        <p>Factory: <strong>{{ factory }}</strong></p>
        <p>Manufacturer: <strong>{{ manufacturer }}</strong></p>
        <p>Material Number: <strong>{{ materialNumber }}</strong></p>
        
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
        console.info('DataMounted')
    }
}
</script>

<style scoped>

</style>