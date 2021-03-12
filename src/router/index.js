import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: 'easyFashion' }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Signup.vue'),
        meta: { title: 'Зарегистрироваться' }
    },
    {
        path: '/auth',
        name: 'Authentication',
        component: () => import('../views/Auth.vue'),
        meta: { title: 'Войти' }
    },
    {
        path: '/request',
        name: 'Request',
        component: () => import('../views/Request.vue'),
        meta: { title: 'Оформить заявку на пошив' }
    },
    {
        path: '/request-list',
        name: 'RequestList',
        component: () => import('../views/RequestList.vue'),
        meta: { title: 'Список заявок на пошив' }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title
    })
})

export default router
