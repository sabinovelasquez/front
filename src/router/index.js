import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Scanpad from '@/components/Scanpad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/scanpad',
      name: 'Scanpad',
      component: Scanpad
    }
  ]
})
