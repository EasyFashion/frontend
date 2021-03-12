import { httpClient } from "../../utils/rest"

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
        async signup({ dispatch, commit}) {

        },
        async login({ dispatch, commit}, user) {
            const data = await httpClient.get("/");
            console.log(data);
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