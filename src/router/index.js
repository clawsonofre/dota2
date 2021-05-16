import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchDota from '../components/searchDota.vue'
import Heros from '../components/types/heros.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: SearchDota,
    },
    {
        path: '/Heros',
        component: Heros,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router