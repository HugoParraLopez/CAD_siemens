<template>
    <b-col>
        <b-row class="item-card">
            <b-col id="item-name">
                <em>File Name</em>
            </b-col>
            <b-col id="item-link">
                <b-button size="sm" class="mb-2">
                    <b-icon icon="eye-fill" aria-hidden="true"></b-icon> View
                </b-button>
            </b-col>
        </b-row>
        <b-row id="tags"></b-row>
    </b-col>
</template>

<script>
export default {
    setup() {
        
    },
    props: [

    ],
}
</script>

<style scoped>
.item-card {
    
}
</style>