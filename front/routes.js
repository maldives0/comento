import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './index';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        //,        { path: '/game/:name', component: GameMatcher } // /game
    ],
});