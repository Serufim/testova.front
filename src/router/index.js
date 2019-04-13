import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/post/:id',
            name: 'Post',
            component: Post,
            props:true
        },
    ]
})