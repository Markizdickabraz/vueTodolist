import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './AuthModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: AuthModule
    },
    plugins: [
        (store) => {
            const savedToken = localStorage.getItem('authToken');
            if (savedToken) {
                store.commit('auth/setAuthToken', savedToken);
                store.commit('auth/setIsLogin', true);
            }
        }
    ]
})
