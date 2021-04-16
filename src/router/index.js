import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from '../components/Second_Nav/test.vue'
import SellOnAshewa from '../views/pages/SellOnAshewa.vue'
import SpecialOffer from '../views/pages/SpecialOffer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/test',
    name: 'test',
    component: test
  },
      {
    path: '/SellOnAshewaSellOnAshewaSellOnAshewa',
    name: 'SellOnAshewaSellOnAshewa',
    component: SellOnAshewa
  },
      {
    path: '/SpecialOffer',
    name: 'SpecialOffer',
    component: SpecialOffer
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
