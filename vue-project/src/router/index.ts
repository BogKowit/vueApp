import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobResultsViewVue from '@/views/JobResultsView.vue'
import StudentsViewVue from '@/views/StudentsView.vue'
import LocationViewVue from '@/views/LocationView.vue'
import TeamsViewVue from '@/views/TeamsView.vue'
import LifeViewVue from '@/views/LifeView.vue'
import HireViewVue from '@/views/HireView.vue'
import JobViewVue from '@/views/JobViewVue.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsViewVue
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationViewVue
    },
    {
      path: '/live',
      name: 'live',
      component: LifeViewVue
    },
    {
      path: '/hire',
      name: 'hire',
      component: HireViewVue
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsViewVue
    },
    {
      path: '/jobs/results',
      name: 'jobs',
      component: JobResultsViewVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/JobResultsView.vue')
    },
    {
      path: '/jobs/results/:id',
      name: 'jobListings',
      component: JobViewVue
    }
  ]
})

export default router
