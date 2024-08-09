import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store'; // Import your Vuex store

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
        path: '/todos',
        component: () => import(/* webpackChunkName: "todos" */ '@/views/Todos.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/LoginFrom.vue')
    },
    {
        path: '/registration',
        component: () => import(/* webpackChunkName: "registration" */ '@/components/Registration.vue')
    },
    {
        path: '/tictactoe',
        component: () => import(/* webpackChunkName: "registration" */ '@/views/TicTacToe.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/applications',
        component: () => import(/* webpackChunkName: "registration" */ '@/views/Applications.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue')
    }
];

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated'];
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({ path: '/login' }); // Перенаправлення на сторінку входу
        } else {
            next();
        }
    } else {
        next();
    }
});


export default router;
