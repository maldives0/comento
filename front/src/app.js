import Vue from 'vue';
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

export function createApp() {

    const store = createStore()
    const router = createRouter()

    sync(store, router)

    const index = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { index, router, store }
}