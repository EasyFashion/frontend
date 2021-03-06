<template>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                active-class="grey--text text--accent-4"
            >
                <v-list-item to="/">
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawerProp: {
            type: Boolean
        }
    },
    data() {
        return {
            drawer: false
        }
    },
    watch: {
        drawer(value) {
            this.$emit('changeDrawer', value);
        },
        drawerProp(value) {
            this.drawer = value;
        }
    }
}
</script>

<style>

</style>