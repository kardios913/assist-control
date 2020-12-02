<template>
  <div class="app">
    <AppHeader style="z-index: 1000;" />
    <div class="app-body">
      <Sidebar :nav-items="funcionalidades" />
      <main class="main bg-white">
        <!-- <breadcrumb :list="list"/> -->
        <div class="container-fluid gnosoft-main px-4 pt-3">
          <!--
          <div class="animated fadeInUp">
            <nuxt />
          </div>
          -->
          <!--transition name="bounce" mode="in-out" duration="500"-->
          <transition
            name="router-anim"
          >
            <nuxt />
          </transition>
        </div>
      </main>
      <!--
      <AppAside/>
      -->
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AppFooter from './components/Footer'
export default {
  name: 'Layout',
  components: {
    // Breadcrumb,
    AppHeader,
    Sidebar,
    // AppAside,
    AppFooter
  },
  data () {
    return {
      funcionalidades: []
    }
  }
}
</script>
