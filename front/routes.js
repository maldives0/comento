import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home';

Vue.use(VueRouter);
const View = () => import(/* webpackChunkName: "view" */ './_id/view');
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
            component: View,
            params: true,
        },

    ],
});