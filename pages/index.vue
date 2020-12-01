<template>
  <div id="app">
    <b-button @click="showModal = ! showModal" variant="success">Hola</b-button>
  <b-modal v-model="showModal" id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
  </div>
</template>

<script>

export default {
  name: 'App',
  layout: 'default',
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
