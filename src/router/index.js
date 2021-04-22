import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Heroes from '../components/types/heroes.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Login,
    },
    {
        path: '/Heroes',
        component: Heroes,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router