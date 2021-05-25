import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchHero from '../views/SearchHero'
import Heroes from '../views/Heroes'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: SearchHero,
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