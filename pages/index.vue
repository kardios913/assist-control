<template>
  <div id="app">
    <layout>
      <b-button @click="showModal = ! showModal" variant="success">Hola</b-button>
    </layout>
      <b-modal v-model="showModal" id="modal-1" title="BootstrapVue">
        <p class="my-4">{{this.$store.getters.userInfo.message}}</p>
      </b-modal>
  </div>
</template>

<script>
import Layout from '@/components/layout'
export default {
  name: 'App',
  components: { Layout },
  data () {
    return {
      showModal: false
    }
  },
  created () {
    this.$store.dispatch('setUserInfo', {message: 'hola como estas' })
  }
}
</script>
