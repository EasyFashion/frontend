<template>
    <v-app-bar
            color='#263238'
            dark
            app
    >
        <v-app-bar-nav-icon @click="$emit('activateDrawer', true)"></v-app-bar-nav-icon>

        <v-toolbar-title>easyFashion</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-btn 
            plain
            to="/auth"
        >
            Войти
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {          
        }
    }
}
</script>

<style>

</style>