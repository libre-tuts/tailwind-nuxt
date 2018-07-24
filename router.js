import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/index.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    linkExactActiveClass: 'is-active-link-exact',
    linkActiveClass: 'is-active-link',
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/about', name: 'about', component: Home },
      { path: '/support', name: 'support', component: Home }
    ]
  })
}
