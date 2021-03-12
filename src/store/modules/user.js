export default {
    state: {
        id: "",
        email: "",
        name: "",
        lastname: "",
        isManufacturer: null
    },
    getters: {
        isProfileLoaded(state) {
            return !!state.id;
        },
        user(state, getters) {
            return {
                ...state,
                ...getters.icon,
                ...getters.fio,
                ...getters.role
            };
        },
        fio(state) {
            return {
                fio: state.lastname + ' ' + state.name
            }
        },
        icon(state) {
            return {
                icon: state.isManufacturer ? 'mdi-domain' : 'mdi-account'
            }
        },
        role(state) {
            return {
                role: state.isManufacturer ? 'Производитель' : 'Пользователь'
            }
        }
    },
    mutations: {
        loadProfile(state, profile) {
            for (const it in profile) {
                state[it] = profile[it];
            }
        },
        logout(state) {
            state.id = state.email = state.name = state.lastname = "";
            state.isManufacturer = null;
        }
    },
    actions: {
        loadProfile({ dispatch, commit}) {
            const profile = {
                id: "1",
                email: "lol@lol.lol",
                name: "lol",
                lastname: "lol",
                isManufacturer: true
            }

            commit("loadProfile", profile);
        }
    }
}