<template>
  <b-nav-item-dropdown right no-caret>
    <template slot="button-content">
      <img src="~/static/img/avatars/silueta.png" class="img-avatar" alt="Mi Cuenta" v-if="imgError">
      <img :src="img" class="img-avatar" alt="Mi Cuenta" v-else @error="imageError">
    </template>
    <b-dropdown-header tag="div" class="text-center">
      Mi Cuenta
    </b-dropdown-header>
    <b-dropdown-item class="center">
      <img src="~/static/img/avatars/silueta.png" class="img-user" alt="Mi Cuenta" v-if="imgError">
      <img :src="img" class="img-user" alt="Mi Cuenta" v-else>
      <br>
      {{ userInfo.nombre }}
    </b-dropdown-item>
    <b-dropdown-item>
      <i class="fa fa-lock" />
      <b-button variant="link" @click="salir">
        Salir
      </b-button>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderDropdownAccount',
  data () {
    return {
      imgError: false,
      img: './img/avatars/silueta.png'
    }
  },
  computed: mapState(['userInfo']),
  /* computed: {
    userInfo: function () {
      return this.$store.state.userInfo
    }
  }, */
  watch: {
    userId: function () {
      // console.log('Actualizando la imagen ../../general/imgGeneral?imagen=1&idPersona=' + this.userId)
      this.img = process.env.baseUrl + 'general/imgGeneral?imagen=1&idPersona=' + this.userInfo.id
    }
  },
  methods: {
    imageError () {
      this.imgError = true
    },
    salir () {
      this.$gconfig.exit()
      window.top.close()
    }
  }
}
</script>

<style>
.img-user {
  width: 120px;
  height: 120px;
  border-radius: 60px;
}
.center {
  text-align: center;
}
</style>z
