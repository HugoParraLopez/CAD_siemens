<template>
    <div class="my-nav"  style="background-color: #38206A">
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand class="brand-logo"><span id="logo"><siemens-logo/></span></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right @change="changeLocale">
                        <template #button-content>
                            <b-icon icon="globe2"></b-icon> Idioma
                        </template>
                        <b-dropdown-item :active="isEnglish" @click="changeLocale('en')">EN</b-dropdown-item>
                        <b-dropdown-item :active="!isEnglish" @click="changeLocale('es')">ES</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <b-icon icon="globe2"></b-icon> Tema                            
                        </template>
                        <b-dropdown-item :active="isLight" @click="setTheme('light')">SE Day</b-dropdown-item>
                        <b-dropdown-item :active="!isLight" @click="setTheme('dark')">SE Dark</b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import siemensLogo from './SiemensLogo'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    components: {
        siemensLogo: siemensLogo
    },
    methods: {
        ...mapMutations([
            'setLocale',
            'setTheme',
        ]),
        changeLocale(value) {
            this.$root.$i18n.locale = value
            this.setLocale(value)
        }
    },
    computed: mapGetters({
        locale: 'getLocale',
        isEnglish: 'isEnglish',
        theme: 'getTheme',
        isLight: 'isLight',
    }),
}
</script>

<style>

.my-nav {
    padding-top: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 30px;
}

@media only screen and (max-width: 600px) {
    .my-nav {
        padding-top: 10px;
        margin-bottom: 0px;
        padding-bottom: 20px;
    }
    .brand-logo {
        width: 60%
    }
}
span#logo {
    width: 50%;
    height: 100%;
    margin-left: 2%;
}
</style>