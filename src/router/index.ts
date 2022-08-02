import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PageNotFoundVue from '../views/PageNotFound.vue'
import Resume from '../views/Resume.vue'

const routes = [
    { 
        path: '/', 
        name: "Main",
        component: Home 
    },
    { 
        path: '/resume',
        name: "Resume",
        component: Resume,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFoundVue,
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})