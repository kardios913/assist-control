<template>
  <div id="demo" style="background-color: #e2e2e2">
    <div class="demo">
      <div class="container">
        <Nuxt />
        <sidebar-menu :menu="menu"
                      theme="white-theme"
                      @toggle-collapse="onToggleCollapse"
                      :collapsed="collapsed">
          <span slot="toggle-icon"><i class="fa fa-angle-double-left" /></span>
          <span slot="dropdown-icon"><i class="fa fa-angle-double-right" /></span>
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
                        title: 'Control evento',
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
pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>
