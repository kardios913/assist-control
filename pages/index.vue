<template>
  <div>
    <b-button @click="showModal = ! showModal" variant="success">Hola</b-button>
    <b-modal v-model="showModal" id="modal-1" title="BootstrapVue">
      <p class="my-4">{{this.$store.getters.userInfo.message}}</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'App',
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
<style>
body {
  background-color: #ebebeb;
}
</style>