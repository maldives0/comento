import Vue from 'vue';
import Index from './index';
import store from './store'
import router from './routes'
import { sync } from 'vuex-router-sync'


export default new Vue(Index).$mount('#root');


// export function createApp() {
//     // create store and router instances


//     // sync the router with the vuex store.
//     // this registers `store.state.route`
//     sync(store, router)

//     // create the app instance.
//     // here we inject the router, store and ssr context to all child components,
//     // making them available everywhere as `this.$router` and `this.$store`.
//     const index = new Vue({
//         router,
//         store,
//         render: h => h(Index)
//     }).$mount('#root')

//     // expose the app, the router and the store.
//     // note we are not mounting the app here, since bootstrapping will be
//     // different depending on whether we are in a browser or on the server.
//     return { index, router, store }
// }