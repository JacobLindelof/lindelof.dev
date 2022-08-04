import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import PageNotFoundVue from '../views/PageNotFound.vue'

const routes = [
    { 
        path: '/', 
        name: "Home",
        component: Home 
    },
    { 
        path: '/about',
        name: "About",
        component: About,
    },
    { 
        path: '/experience',
        name: "Experience",
        component: Experience,
    },
    { 
        path: '/projects',
        name: "Projects",
        component: Projects,
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