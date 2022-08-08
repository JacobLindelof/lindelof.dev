import { createRouter, createWebHistory } from 'vue-router'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    index: number
    transitionName: string | undefined
  }
}


import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import PageNotFoundVue from '../views/PageNotFound.vue'
import Resume from '../views/Resume.vue'

const routes = [
    { 
        path: '/', 
        name: "Home",
        component: Home,
        meta: {index: 0, transitionName: undefined}
    },
    { 
        path: '/about',
        name: "About",
        component: About,
        meta: {index: 1, transitionName: undefined}
    },
    { 
        path: '/experience',
        name: "Experience",
        component: Experience,
        meta: {index: 2, transitionName: undefined}
    },
    { 
        path: '/projects',
        name: "Projects",
        component: Projects,
        meta: {index: 3, transitionName: undefined}
    },
    { 
        path: '/resume',
        name: "Resume",
        component: Resume,
        meta: {index: -1, transitionName: undefined}
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFoundVue,
        meta: {index: 0, transitionName: undefined}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((to, from) => {
    const toIndex = to.meta.index
    const fromIndex = from.meta.index
    if (toIndex == 0 || fromIndex == 0) {
        to.meta.transitionName = 'scale'
    } else if (toIndex > fromIndex) {
        from.meta.transitionName = 'slide-left'
        to.meta.transitionName = 'slide-left'
    } else if (toIndex < fromIndex) {
        from.meta.transitionName = 'slide-right'
        to.meta.transitionName = 'slide-right'
    }
})

export { router }
