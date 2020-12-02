<template>
  <div>
    <b-row>
      <b-col cols="12">
        <div :class="classTituloFixed">
          <component :is="tituloSize" :class="'mb-0 title-up '+ claseTitulo">
            {{ titulo }}
          </component>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'TituloFixed',
  props: {
    titulo: {
      type: String,
      required: true,
      default: 'Titulo'
    },
    tituloSize: {
      type: String,
      required: false,
      default: 'h5'
    },
    claseTitulo: {
      type: String,
      required: false,
      default: 'font-weight-bold'
    },
    classTituloFixed: {
      type: String,
      required: false,
      default: 'bg-primary p-1 text-center'
    }
  }
}
</script>
