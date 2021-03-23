<template>
    <div class="my-card">
        <div class="pdf">
            This is a PDF Viewer
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            methods: {
                
            },
            // mounted() {
            //         console.info('Hello There')
            //         let domEl = this.$el
            //         PDFObject.embed('./../assets/docs/Formato_minutas.pdf',domEl)
            //         console.error(domEl)
            //     }
        }
    },
    
}
</script>

<style scoped>
    .pdf {
        width: 90%;
        height: 90%;
        margin: auto;
        padding: 1%;
        background-color: lightgray;
        border: 5px solid black;
        border-radius: 1px;
        text-align: center;
        align-self: center;

    }
</style>