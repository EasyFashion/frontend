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