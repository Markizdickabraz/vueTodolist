import axios from 'axios';
import router from '@/router';
import { toast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import Cookies from 'js-cookie';

export const AuthModule = {
    state: () => ({
        isLogin: false,
        authInputValue: {
            email: '',
            password: '',
        },
        changePage: '',
        registerOrLoginValue: '',
        authToken: '',
    }),
    mutations: {
        setIsLogin(state, value) {
            state.isLogin = value;
        },
        setInputValue(state, value) {
            state.authInputValue = value;
        },
        setChangePage(state, value) {
            state.changePage = value;
        },
        setRegisterOrLoginValue(state, value) {
            state.registerOrLoginValue = value;
        },
        setAuthToken(state, value) {
            state.authToken = value;
        }
    },
    actions: {
        setAuthInputValue({ commit }, value) {
            commit('setInputValue', value);
        },
        setChangePage({ commit }, value) {
            commit('setChangePage', value);
        },
        setRegisterOrLoginValue({ commit }, value) {
            commit('setRegisterOrLoginValue', value);
        },
        setAuthToken({ commit }, value) {
            commit('setAuthToken', value);
        },
        async registerOrLogin({ state, commit }) {
            try {
                const response = await axios.post(`https://poli-back.onrender.com/api/user/${state.registerOrLoginValue}`, state.authInputValue);
                const authToken = response.data.token;
                commit('setIsLogin', true);
                commit('setAuthToken', authToken);
                Cookies.set('authToken', authToken, { expires: 7 });
                document.cookie = `authToken=${authToken}; path=/`;
                router.push(state.changePage);
                toast.success('Login successful!');
            } catch (error) {
                console.error(error.message);
                toast.error('Login failed: ' + error.message);
            }
        },
        async logout({ state, commit }) {
            try {
                await axios.post(
                    'https://poli-back.onrender.com/api/user/logout',
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${state.authToken}`
                        }
                    }
                );
                commit('setIsLogin', false);
                commit('setAuthToken', '');
                Cookies.remove('authToken');
                document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
                router.push(state.changePage);
                toast.success('Logout successful!');
            } catch (error) {
                console.error(error.message);
                toast.error('Logout failed: ' + error.message);
            }
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!Cookies.get('authToken');
        }
    },
    namespaced: true
};
