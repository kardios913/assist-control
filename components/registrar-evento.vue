<template>
  <div>
    <div v-if="action === 'LISTAR'">
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Eventos" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-table v-if="listaEvento.length > 0" striped hover :items="listaEvento" :fields="fields"></b-table>
        <b-alert variant="info" v-else show>No se encontraron eventos registrados</b-alert>
        <b-btn variant="danger" class="mt-1 float-right" @click="action = 'REGISTRAR'">Registrar</b-btn>
      </b-card>
    </div>
    <div v-else>
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Registrar Evento" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-form >
          <b-row>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-1"
                label="Nombre del Evento:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="evento.nombre"
                  type="text"
                  required
                  placeholder="Nombre del Evento"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-2"
                label="Fecha Inicio:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="evento.fechaInicio"
                  type="date"
                  required
                  placeholder="Fecha Inicio"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-3"
                label="Fecha Fin:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="evento.fechaFin"
                  type="date"
                  required
                  placeholder="Fecha Fin"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-4"
                label="Encargado:"
                label-for="input-4"
              >
                <b-form-select
                  id="input-4"
                  v-model="evento.encargado"
                  :options="listaPersonas"
                  required
                  :disbled="disabled"
                  value-field="id"
                  text-field="text"
                ></b-form-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-5"
                label="Lugar:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="evento.lugar"
                  type="text"
                  required
                  placeholder="Lugar"
                  :disbled="disabled"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6" md="6">
              <b-form-group
                id="input-group-6"
                label="Aforo:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="evento.aforo"
                  type="number"
                  required
                  placeholder="Aforo"
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
const EVENTO = {
  id: '',
  nombre: '',
  fechaInicio: '',
  fechaFin: '',
  encargado: '',
  lugar: '',
  aforo: 0
}
export default {
  name: 'RegistrarEvento',
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
      evento: EVENTO,
      action: 'LISTAR',
      listaEvento: [],
      listaPersonas: [],
      fields: [
          {key: 'nombre', label: 'Evento'},
          {key: 'fechaInicio', label: 'Fecha Inicio'},
          {key: 'fechaFin', label: 'Fecha Fin'},
          {key: 'lugar', label: 'Lugar'}
      ]
    }
  },
  created () {
    this.action = this.act
    this.listaEvento = this.$store.getters.getListEvent
    this.listaPersonas = this.$store.getters.getListUserInfo
    if (this.listaPersonas.length > 0) {
        this.listaPersonas.forEach(p => {
            p.text = p.nombre + ' ' + p.apellido + ' - ' + p.documento 
        })
    }
  },
  methods: {
    validar () {
      if (this.evento.nombre === '') {
        return true
      }
      if (this.evento.fechaInicio === '') {
        return true
      }
      if (this.evento.fechaFin === '') {
        return true
      }
      if (this.evento.encargado === '') {
        return true
      }
      if (this.evento.lugar === '') {
        return true
      }
      if (this.evento.aforo <= 0) {
        return true
      }
      if (this.listaPersonas.length <= 0) {
        return true
      }
      return false
    },
    guardar () {
      if (this.validar()) {
        return
      }
      this.listaEvento = []
      let list = this.$store.getters.getListEvent
      this.cargarId(list)
      list.push(this.evento)
      this.$store.dispatch('setListEvent', list)
      this.listaEvento = list
      this.evento = EVENTO
      this.action = 'LISTAR'
    },
    cargarId (list) {
        if (list.length === 0) {
            this.evento.id = 0
        } else {
            let item = list[list.length -1]
            this.evento.id = item.id + 1
        }
    }
  }
}
</script>