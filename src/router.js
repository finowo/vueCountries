import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Country from '@/components/Country'
import AllCountries from '@/pages/AllCountries'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/countries/:country',
            name: 'country',
            component: Country
        },
        {
            path: '/countries/all',
            name: 'AllCountries',
            component: AllCountries
        }
    ]
})