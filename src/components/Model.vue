<template>
    <div :class="`my-card-${getTheme}`" id="3dmodel">
        <h2> {{ $t('modelTitle') }} </h2><br>
        <iframe :src="recieveModel" width="100%" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0.5"></iframe>
    </div>
</template>

<script>
import { files } from './../js/files'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    props: [
        'recieveModel'
    ],
    computed: {
		...mapGetters([
			'getTheme',
            'getAllData',
            'getUrlParameters',
        ])
    },
}
</script>

<style scoped>

</style>