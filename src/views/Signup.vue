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
                cols="3"                
                md="4"
            >
                <v-card>
                    <v-card-title>Регистрация</v-card-title>

                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        class="px-4 pb-4"
                    >
                        <v-text-field
                            v-model="fio.lastname"
                            :counter="10"
                            :rules="nameRules"
                            label="Фамилия"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="fio.firstname"
                            :counter="10"
                            :rules="nameRules"
                            label="Имя"
                            required
                        ></v-text-field>

                        <v-text-field
                            v-model="fio.secondname"
                            :counter="10"
                            :rules="nameRules"
                            label="Отчество"
                            required
                        ></v-text-field>

                        <v-switch
                            v-model="manufacturer"
                            label="Производитель"
                        ></v-switch>

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
                        ></v-text-field>

                        <v-text-field
                            v-model="passwordRepeated"
                            :rules="passwordConfirm"
                            type="password"
                            label="Пароль еще раз"
                            required
                        ></v-text-field>

                        <v-checkbox
                            v-model="acceptingRules"
                            :rules="[v => !!v || 'Необходимо согласится для продолжения!']"
                            label="Узнали, согласны?"
                            required
                            class="mb-4"
                        ></v-checkbox>

                        <v-btn
                            :disabled="!accesToSignup"
                            color="success"
                            class="mr-4"
                            @click="signup"
                        >
                        Зарегистрироваться
                        </v-btn>                        
                    </v-form>
                </v-card>                
            </v-col>
        </v-row>       
    </v-container>
</template>

<script>
export default {
    computed: {
        accesToSignup() {
            const isFullName = this.fio.lastname && this.fio.firstname && this.fio.secondname;
            const isPasswordRight = this.password && this.passwordRepeated && this.password == this.passwordRepeated;

            return this.valid && this.email && isFullName && isPasswordRight;
        }
    },
    data() {
        return {
            valid: false,
            acceptingRules: false,

            email: '',
            manufacturer: false,
            fio: {
                lastname: '',
                firstname: '',
                secondname: ''
            },
            password: '',
            passwordRepeated: '',

            nameRules: [
                v => !!v || 'Поле дожно быть заполнено',
                v => (v && v.length <= 10) || 'Должно быть менее 10 символов',
            ],
            emailRules: [
                v => !!v || 'Требуется e-mail',
                v => /.+@.+\..+/.test(v) || 'E-mail должен быть верным',
            ],
            passwordRules: [
                v => !!v || 'Требуется пароль'
            ],
            passwordConfirm: [
                v => !!v || 'Требуется пароль',
                v => v === this.password || 'Пароли не совпадают'
            ]
        }
    },
    methods: {
        signup() {

        }
    }
}
</script>

<style>

</style>