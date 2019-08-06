import Vue from 'vue'
import Router from 'vue-router'

import programs from '@/components/programs'
import courses from '@/components/courses'
import files from '@/components/files'
import contribute from '@/components/contribute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign-up',
      component: require('@/pages/signup').default
    },
    {
      path: '/all',
      name: 'all',
      component: require('@/pages/all').default,
      children: [{
        path: 'programs',
        component: programs
      },
      {
        path: 'courses',
        component: courses
      },
      {
        path: 'files',
        component: files
      },
      {
        path: 'contribute',
        component: contribute
      }]
    }
  ]
})
