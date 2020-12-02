<template>
  <div id="demo">
    <div class="demo">
      <div class="container">
        <Nuxt />
        <sidebar-menu :menu="menu"
                      theme="white-theme"
                      width="250px"
                      @toggle-collapse="onToggleCollapse"
                      :collapsed="collapsed">
          <span slot="toggle-icon"><i :class="collapsed ? 'fa fa-angle-double-right' : 'fa fa-angle-double-left'" /></span>
        </sidebar-menu>
      </div>
    </div>
  </div>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
export default {
    components: {
        SidebarMenu
    },
    name: 'default',
    data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'UFPS',
                        hiddenOnCollapse: false
                    },
                    {
                        href: '/registrar-persona',
                        title: 'Registrar Persona',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/registrar-evento',
                        title: 'Registrar Evento',
                        icon: 'fa fa-calendar'
                    },
                    {
                        href: '/control-evento',
                        title: 'Control Asistencia',
                        icon: 'fa fa-address-card-o '
                    }
                ],
                collapsed: false
            }
    },
    methods: {
      onToggleCollapse (collapsed) {
        this.collapsed = collapsed
      }
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  color: #424242;
}
#demo {
  padding-left: 350px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 50px;
}
#demo.onmobile {
  padding-left: 50px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.demo {
  padding: 50px;
}
.container {
  max-width: 900px;
}
.vsm--header {
  font-size: 20px;
  background-color: #dc3545;
  color: white;
  text-align: center;
}
.v-sidebar-menu.vsm_white-theme .vsm--header {
    color: white !important;
}
.v-sidebar-menu.vsm_white-theme {
    background-color: #f2f2f2 !important;
}
.v-sidebar-menu.vsm_white-theme .vsm--link_level-1 .vsm--icon {
    background-color: #bbc5d600 !important;
}
.v-sidebar-menu.vsm_white-theme .vsm--link_level-1.vsm--link_exact-active, .v-sidebar-menu.vsm_white-theme .vsm--link_level-1.vsm--link_active {
    box-shadow: 3px 0px 0px 0px #dc3545 inset !important;
}
.v-sidebar-menu.vsm_white-theme .vsm--link_level-1.vsm--link_exact-active .vsm--icon, .v-sidebar-menu.vsm_white-theme .vsm--link_level-1.vsm--link_active .vsm--icon {
    color: black !important;
    background-color: #26262600 !important;
}
.vsm--mobile-bg {
  background-color: #dc3545 !important;
  opacity: 0.3 !important;
  color: black !important;
}
</style>
