import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/:id',
            name: '',
            component: () => import('./_id/view'),
            params: true,
        },

    ],
});