<template>
  <div>
    <div v-if="action === 'LISTAR'">
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Personas" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-table v-if="listaPersonas.length > 0" striped hover :items="listaPersonas" :fields="fields" />
        <b-alert variant="info" v-else show>No se encontraron personas registradas</b-alert>
        <b-btn variant="danger" class="mt-1 float-right" @click="action = 'REGISTRAR'">Registrar</b-btn>
      </b-card>
    </div>
    <div v-else>
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Registrar Persona" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-form >
          <b-row>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-1"
                label="Nombres:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="persona.nombre"
                  type="text"
                  required
                  placeholder="Nombres"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-2"
                label="Apellidos:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="persona.apellido"
                  type="text"
                  required
                  placeholder="Apellidos"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-3"
                label="Documento:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="persona.documento"
                  type="text"
                  required
                  placeholder="Documento"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-4"
                label="Email:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="persona.email"
                  type="email"
                  required
                  placeholder="Email"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-5"
                label="Código:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="persona.codigo"
                  type="text"
                  required
                  placeholder="Código"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-6"
                label="Etiqueta RFID:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="persona.etiqueta"
                  type="text"
                  required
                  placeholder="Etiqueta RFID"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-btn class="float-left" v-if="act === 'LISTAR'" @click="action = 'LISTAR'">Volver</b-btn>
              <b-btn class="float-right" variant="danger" @click="guardar">Guardar</b-btn>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
    </div>
  </div>
</template>
<script>
import TituloFixed from './titulo-fixed'
const PERSONA = {
  id: '',
  nombre: '',
  apellido: '',
  email: '',
  documento: '',
  codigo: '',
  etiqueta: ''
}
export default {
  name: 'RegistrarPersona',
  components: {
    TituloFixed
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    act: {
      type: String,
      default: 'LISTAR'
    }
  },
  data () {
    return {
      persona: {...PERSONA},
      action: 'LISTAR',
      listaPersonas: [],
      fields: [
        {key: 'nombre', label: 'Nombre'},
        {key: 'apellido', label: 'Apellido'},
        {key: 'codigo', label: 'Código'}
      ]
    }
  },
  created () {
    this.action = this.act
    this.listaPersonas = this.$store.getters.getListUserInfo
  },
  methods: {
    validar () {
      if ( this.persona.nombre === '' ) {
        return true
      }
      if ( this.persona.apellido === '' ) {
        return true
      }
      if ( this.persona.email === '' ) {
        return true
      }
      if ( this.persona.documento === '' ) {
        return true
      }
      if ( this.persona.codigo === '' ) {
        return true
      }
      if ( this.persona.etiqueta === '' ) {
        return true
      }
      return false
    },
    guardar () {
      if (this.validar()) {
        return
      }
      this.listaPersonas = []
      let list = this.$store.getters.getListUserInfo
      this.cargarId(list)
      list.push(this.persona)
      this.$store.dispatch('setListUserInfo', list)
      this.listaPersonas = list
      this.persona = {...PERSONA}
      this.action = 'LISTAR'
    },
    cargarId (list) {
        if (list.length === 0) {
            this.persona.id = 0
        } else {
            let item = list[list.length -1]
            this.persona.id = item.id + 1
        }
    }
  }
}
</script>