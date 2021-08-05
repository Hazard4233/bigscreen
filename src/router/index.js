import Vue from 'vue'
import VueRouter from 'vue-router'

import Page4 from '../views/Page4.vue'
import Page5Part1 from '../views/Page5Part1.vue'
import Page5Part2 from '../views/Page5Part2.vue'
import Page5Part3 from '../views/Page5Part3.vue'
import Page6Part1 from '../views/Page6Part1.vue'
import Page6Part2 from '../views/Page6Part2.vue'
import Page7Part1 from '../views/Page7Part1.vue'
import Page7Part2 from '../views/Page7Part2.vue'
import Page7Part3 from '../views/Page7Part3.vue'
import Page7Part4 from '../views/Page7Part4.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/page4',
    name: 'Page4',
    component: Page4
  },
  {
    path: '/page5/part1',
    name: 'Page5Part1',
    component: Page5Part1
  },
  {
    path: '/page5/part2',
    name: 'Page5Part2',
    component: Page5Part2
  },
  {
    path: '/page5/part3',
    name: 'Page5Part3',
    component: Page5Part3
  },
  {
    path: '/page6/part1',
    name: 'Page6Part1',
    component: Page6Part1
  },
  {
    path: '/page6/part2',
    name: 'Page6Part2',
    component: Page6Part2
  },
  {
    path: '/page7/part1',
    name: 'Page7Part1',
    component: Page7Part1
  },
  {
    path: '/page7/part2',
    name: 'Page7Part2',
    component: Page7Part2
  },
  {
    path: '/page7/part3',
    name: 'Page7Part3',
    component: Page7Part3
  },
  {
    path: '/page7/part4',
    name: 'Page7Part4',
    component: Page7Part4
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
