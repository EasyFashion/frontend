<template>
    <v-container
        style="height: 100%;"
    >
        <v-row
            justify="center"
            align="center"            
            style="height: 100%;"
        >
            <v-col
                xl="3"
                md="4"
                sm="10"
            >
                <v-card        
                    @keyup.enter="login"
                >
                    <v-card-title>Вход</v-card-title>

                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="px-4 pb-4"
                    >
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            type="password"
                            label="Пароль"
                            required
                            class="mb-4"
                        ></v-text-field>

                        <div
                            class="d-flex justify-space-between"
                        >
                            <v-btn
                                :disabled="!accessToLogin"
                                color="success"
                                @click="login"
                            >
                            Войти
                            </v-btn>

                            <v-btn
                                plain
                                to="/signup"
                            >
                            Зарегистрироваться
                            </v-btn>
                        </div>                        
                    </v-form>
                </v-card>                
            </v-col>
        </v-row>       
    </v-container>
</template>

<script>
export default {
    computed: {
        accessToLogin() {
            return this.valid && this.email && this.password
        }
    },
    data() {
        return {
            valid: false,

            email: '',
            password: '',

            emailRules: [
                v => !!v || 'Требуется e-mail',
                v => /.+@.+\..+/.test(v) || 'E-mail должен быть верным',
            ],
            passwordRules: [
                v => !!v || 'Требуется пароль'
            ],
        }
    },
    methods: {
        login() {
            if (!this.accessToLogin) {
                this.$refs.form.validate();
                return;
            }

            const { email, password } = this;
            this.$store.dispatch('login', { email, password });
            this.$router.push('/');
        },        
    }
}
</script>

<style>

</style>