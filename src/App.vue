<template>
    <v-app>
        <Navigation
            @activateDrawer="changeDrawer"
        />

        <Drawer
            :drawerProp="drawer"
            @changeDrawer="changeDrawer"
        />        

        <v-main>
            <router-view></router-view>
        </v-main>

        <Footer/>
    </v-app>
</template>

<script>
import Navigation from './components/navigation'
import Footer from './components/footer'
import Drawer from './components/drawer'

export default {
    name: 'App',
    components: {
        Navigation,
        Footer,
        Drawer
    },
    data() {
        return {
            drawer: false
        }
    },
    methods: {
        changeDrawer(value) {
            this.drawer = value;
        }
    },
    created() {
        if (this.$store.getters.isAuthenticated) {
            this.$store.dispatch('loadProfile');
        }
    }
};
</script>
