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
            v-if="!isAuthenticated" 
            plain
            to="/auth"
        >
            Войти
        </v-btn>

        <v-menu
            v-else
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
        >
            <template v-slot:activator="{ on, attrs }">
                <v-icon
                    v-bind="attrs"
                    v-on="on"
                >
                    mdi-dots-horizontal
                </v-icon>
            </template>

            <v-card>
                <v-list>
                    <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>{{ user.icon }}</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ user.fio }}</v-list-item-title>
                        <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item
                        v-for="(item, i) in menus"
                        :key="i"
                        link
                        :to="item.path"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        text
                        @click="logout"
                    >
                        Выйти
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            menu: false,
            
            menus: [
                {
                    title: 'Оформить заявку',
                    path: '/request'
                },
                {
                    title: 'Каталог заявок',
                    path: '/request-list'
                }
            ]
        }
    },
    computed: mapGetters(['user', 'isAuthenticated']),
    methods: {
        logout() {
            this.menu = false;

            this.$store.dispatch('logout');
            this.$router.push('/auth');
        }
    }
}
</script>

<style>

</style>