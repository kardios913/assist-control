import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c4732fe = () => interopDefault(import('../pages/control-evento.vue' /* webpackChunkName: "pages/control-evento" */))
const _a747181e = () => interopDefault(import('../pages/registrar-evento.vue' /* webpackChunkName: "pages/registrar-evento" */))
const _d9029c00 = () => interopDefault(import('../pages/registrar-persona.vue' /* webpackChunkName: "pages/registrar-persona" */))
const _4f282706 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/control-evento",
    component: _3c4732fe,
    name: "control-evento"
  }, {
    path: "/registrar-evento",
    component: _a747181e,
    name: "registrar-evento"
  }, {
    path: "/registrar-persona",
    component: _d9029c00,
    name: "registrar-persona"
  }, {
    path: "/",
    component: _4f282706,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  const router = new Router(routerOptions)
  const resolve = router.resolve.bind(router)

  // encodeURI(decodeURI()) ~> support both encoded and non-encoded urls
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = encodeURI(decodeURI(to))
    }
    return resolve(to, current, append)
  }

  return router
}
