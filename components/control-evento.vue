<template>
  <div>
    <div v-if="action === 'LISTAR'">
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Eventos" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-table v-if="listaEvento.length > 0"
                 striped
                 hover
                 :items="listaEvento"
                 :fields="fields"
        >
          <template #cell(action)="row">
            <b-button variant="danger" size="sm" @click="cargar(row.item)"><i class="fa fa-arrow-right" /></b-button>
          </template>
        </b-table>
        <b-alert variant="info" v-else show>No se encontraron eventos registrados</b-alert>
      </b-card>
    </div>
    <div v-else>
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Evento" />
      <b-card class="mb-3" style="background-color: #f0f2f6 !important;">
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
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="4" md="4">
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
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="2" md="2">
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
                  disabled
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-card>
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Lista Personas" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-table v-if="listaPersonas.length > 0" striped hover :items="listaPersonas" :fields="fieldsPersona">
          <template #cell(action)="data">
            <b-button variant="success" size="sm" @click="agregar(data.item)"><i class="fa fa-plus" /></b-button>
            <b-button variant="danger" size="sm" @click="eliminar(data.item)"><i class="fa fa-trash-o" /></b-button>
          </template>
        </b-table>
        <b-alert variant="info" v-else show>No se encontraron personas registradas</b-alert>
      </b-card>
      <b-btn class="mt-1 float-left" @click="volver">Volver</b-btn>
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
  name: 'ControlEvento',
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
          {key: 'lugar', label: 'Lugar'},
          {key: 'action', label: ''}
      ],
      fieldsPersona: [
        {key: 'nombre', label: 'Nombre'},
        {key: 'apellido', label: 'Apellido'},
        {key: 'codigo', label: 'Código'},
        {key: 'documento', label: 'Documento'},
        {key: 'etiqueta', labale: 'Etiqueta RFID'},
        {key: 'action', label: ''}
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
      return false
    },
    cargar (item) {
      this.evento = item
      this.action = 'REGISTRAR'
    },
    volver () {
      this.evento = EVENTO
      this.action = 'LISTAR'
    },
    agregar (item) {

    },
    eliminar (item) {

    }
  }
}
</script>