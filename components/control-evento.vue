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
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Asistentes" />
      <b-card class="mb-3" style="background-color: #f0f2f6 !important;">
        <b-table v-if="listaAsistentes.length > 0" striped hover :items="listaAsistentes" :fields="fieldsPersona">
          <template #cell(action)="asistente">
            <b-button variant="danger" size="sm" @click="eliminar(asistente.item)"><i class="fa fa-trash-o" /></b-button>
          </template>
        </b-table>
        <b-alert variant="info" v-else show>No se encontraron asistentes al evento</b-alert>
      </b-card>
      <titulo-fixed class-titulo-fixed="bg-danger p-1 text-center text-white" titulo="Lista Personas" />
      <b-card style="background-color: #f0f2f6 !important;">
        <b-table v-if="listaNoAsistentes.length > 0" striped hover :items="listaNoAsistentes" :fields="fieldsPersona">
          <template #cell(action)="persona">
            <b-button variant="success" size="sm" @click="agregar(persona.item)"><i class="fa fa-plus" /></b-button>
          </template>
        </b-table>
        <b-alert variant="info" v-else show>No se encontraron personas registradas</b-alert>
      </b-card>
      <b-btn class="mt-1 float-left" @click="volver">Volver</b-btn>
      <b-btn class="mt-1 float-right" variant="danger" @click="showModal = !showModal">Cargar csv</b-btn>
    </div>
    <div v-if="showModal">
      <b-modal size="lg" hide-footer v-model="showModal" title="Cargar Asistencia">
        <form enctype="multipart/form-data">
            <input type="file" @change="onFileChange">
        </form>
        <b-form class="mt-2">
          <b-form-textarea disabled v-model="log" />
          <b-btn
            variant="danger"
            class="mt-1 float-right"
            @click="resetModal"
          >
            Cerrar
          </b-btn>
        </b-form>
      </b-modal>
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
      ],
      asistencias: [],
      listaAsistentes: [],
      listaNoAsistentes: [],
      showModal: false,
      fileinput: '',
      log: ''
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
      this.cargarAsistencia(item)
      this.evento = item
      this.action = 'REGISTRAR'
    },
    volver () {
      this.evento = EVENTO
      this.action = 'LISTAR'
    },
    agregar (item) {
      let asistencia = this.$store.getters.getAsistencias
      let asistente = {
        idEvento: this.evento.id,
        idPersona: item.id
      }
      let asis = asistencia.find(asis => {
        return this.evento.id === asis.idEvento && asis.idPersona === item.id
      })
      if (!asis) {
        asistencia.push(asistente)
        this.$store.dispatch('setAsistencias', asistencia)
        this.cargarAsistencia(this.evento)
      }
    },
    eliminar (item) {
      let asistencia = this.$store.getters.getAsistencias
      let asistente = {
        idEvento: this.evento.id,
        idPersona: item.id
      }
      let index = asistencia.indexOf(asistente)
      if (index >= -1) {

        asistencia.splice(index, 1)
      }
      this.$store.dispatch('setAsistencias', asistencia)
      this.cargarAsistencia(this.evento)
    },
    cargarAsistencia (item) {
      this.asistencias = []
      this.listaAsistentes = []
      this.listaNoAsistentes = []
      let asistencia = this.$store.getters.getAsistencias
      if (asistencia.length > 0) {
        asistencia.forEach(asis => {
          if (asis.idEvento === item.id) {
            this.asistencias.push(asis)
            this.listaAsistentes.push(this.cargarPersona(asis.idPersona))
          }
        })
      }
      this.cargarNoAsistentes()
    },
    cargarPersona (id) {
      let persona = {}
      let fiend = false
      this.listaPersonas.forEach(p => {
        if (p.id == id) {
          persona = p
        }
      })
      return persona
    },
    cargarNoAsistentes () {
      this.listaNoAsistentes = []
      this.listaPersonas.forEach(persona => {
        let index = this.listaAsistentes.indexOf(persona)
        if (index < 0) {
          this.listaNoAsistentes.push(persona)
        }
      })
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
          return;
      this.createInput(files[0]);
    },
    async createInput(file) {
      const reader = new FileReader();
      const vm = this;
      reader.onload = (e) => {
        vm.fileinput = reader.result;
        vm.fileinput = vm.fileinput.replace(/['"]+/g, '')
        vm.log = ':::::Cargando:::::'
        vm.log += '\nfile\n' + vm.fileinput
        let personas = this.fileinput.split('\n')
        if (personas.length > 2) {
          for (let i = 1; i < personas.length - 1; i++) {
            let persona = personas[i].split(',')
            let id = persona[0]
            let item = vm.cargarPersona(id)
            vm.log += '\n/***********************/'
            if (item) {
              vm.agregar(item)
              vm.log += '\n Asistente agregado ' + item.nombre + item.apellido
            } else {
              vm.log += '\n Error al agregar ' + persona[1] + ' Persona no registrada'
            }
          }
        }
      }
      await reader.readAsText(file);
    },
    resetModal () {
      this.fileinput = ''
      this.showModal = false
      this.log = ''
    },
    guardar () {
      this.fileinput = ''
      this.showModal = false
      this.log = ''
    }
  }
}
</script>