<template>
    <v-container>
        <v-row
            justify="center"
            align="center"
            style="height: 70vh;"
        >
            <v-col
                cols="10"
            >
                <v-card outlined>
                    <v-card-title>Lorem, ipsum dolor.</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores iure obcaecati cum itaque a, cupiditate tenetur, quam nulla molestias sit officiis mollitia quisquam debitis dolores ratione quos. Ipsum harum rerum, quidem molestiae ea maiores, porro quia mollitia laboriosam impedit officiis!</v-card-text>
                </v-card>
            </v-col>
        </v-row>        
        <v-row 
            dense
            class="pb-10"
        >
            <v-col
                v-for="(card, index) in cards"
                :key="index"
                cols="3"
            >
                <v-card
                    :color="card.color"
                >
                    <v-img              
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
                        height="200px"
                    >
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { title: 'Lorem, ipsum.' , color: '#1976D2'},
                { title: 'Lorem, ipsum dolor.' , color: '#5E35B1'},
                { title: 'Lorem, ipsum dolor.' , color: '#7B1FA2'},
                { title: 'Lorem, ipsum.' , color: '#536DFE'},
                { title: 'Lorem ipsum dolor sit.' , color: '#303F9F'},
                { title: 'Lorem, ipsum.' , color: '#0288D1'},
                { title: 'Lorem ipsum dolor sit.' , color: '#1976D2'},
            ]
        }        
    }
}
</script>

<style>

</style>