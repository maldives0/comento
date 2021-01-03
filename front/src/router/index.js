import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home.vue';

Vue.use(VueRouter);

const View = () => import(/* webpackChunkName: "view" */ '../views/_id.vue');
const Search = () => import(/* webpackChunkName: "search" */ '../views/posts.vue');

export function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '',
                component: Home
            },
            {
                path: '/:id',
                name: '',
                component: View,
                params: true,
            },
            {
                path: '/search/:value',
                name: '',
                component: Search,
                params: true,
            },

        ],
    });
}
