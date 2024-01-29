import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import notFound from '../views/notFound.vue'
import jobs from '../views/jobs/Jobs.vue'
import jobdetails from '../views/jobs/jobdetails.vue'
import kojas from '../views/koja/koja.vue'
import kojadetails from '../views/koja/kojadetails.vue'
import { compileToFunction } from 'vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:  AboutView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'Jobdetails',
    component: jobdetails,
    props: true
  },
  {
    path: '/kojas',
    name: 'Kojas',
    component: kojas
  },
  {
    path: '/kojas/:id',
    name: 'Kojadetails',
    component: kojadetails,
    props: true
  },
  //redirects
  {path: '/all-jobs',
  redirect: '/jobs'
},
  //catchall 
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
