export default {
    state: {
        token: localStorage.getItem("user-token") ?? ""        
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        }
    },
    mutations: {
        login(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = "";
        }
    },
    actions: {
        signup({ dispatch, commit}) {

        },
        login({ dispatch, commit}, user) {
            const token = "lol";
            localStorage.setItem("user-token", token);                        
            commit("login", token);

            dispatch("loadProfile");
        }, 
        logout({ dispatch, commit}) {
            commit("logout");
            localStorage.removeItem("user-token"); 
        }
    }
}