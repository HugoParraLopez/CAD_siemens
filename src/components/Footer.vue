<template>
    <div id="my-footer" style="background-color: #1B1534">
        <div>
            <div id="row-flex-1">
                <b-button>Hello there</b-button>
            </div>
            <div id="row-flex-2">
                <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
    p {
        color: wheat;
    }

    #my-footer {
        padding-top: 100px;
    }
    @media only screen and (max-width: 600px) {
        #my-footer {
            padding-top: 65px;
            margin-bottom: 0px;
            padding-bottom: 0px;
        }
    }

</style>