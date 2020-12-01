import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (ctx) {
  process.gnosoft = ctx
  Vue.use(BootstrapVue)
  Vue.use(VueAxios, axios)
}
