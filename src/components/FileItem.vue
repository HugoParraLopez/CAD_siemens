<template>
    <b-col class="item-card">
        <b-row class="item-title">
            <b-col class="item-name">
                <em>File</em>
            </b-col>
            <b-col class="item-link">
                <b-button size="sm" class="btn-accent">
                    <b-icon icon="eye-fill" aria-hidden="true"></b-icon> View
                </b-button>
            </b-col>
        </b-row>
        <b-row class="item-tags">
            <b-badge variant="info">Info</b-badge>
            <b-badge variant="dark">Dark</b-badge>
        </b-row>
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
    background-color: #755da8;
    color: white;
    border-radius: 12px;
	border: 3px solid #00D9C7;
    align-items: center;
    margin: auto;
    padding-top: 2%;

}

.item-title {
    padding: 2%;
    text-align: left;
}

.item-link {
    align-self: center;
    text-align: end;
}

.item-tags {

    padding: 1% 0% 2% 5%;
}

.btn-accent {
    background-color: #00CCCC;
    outline-color: #0CC0DD;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
}

.btn-accent:hover {
    background-color: #02acac;
    outline-color: #08abcd;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
}
</style>