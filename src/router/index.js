//import Vue from 'vue'
//import VueRouter from 'vue-router'
import {createRouter,createWebHistory} from 'vue-router'

const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Home = () => import('../views/home/Home')

//Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/profile'
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/pategory',
        component: Category
    },
    {
        path: '/part',
        component: Cart
    },
    {
        path: '/home',
        component: Home
    }
]

const routerHistory = createWebHistory()

const router = createRouter({
    routes,
    history: routerHistory

})

export default router