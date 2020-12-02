export { default as RegistrarPersona } from '../../components/registrar-persona.vue'
export { default as TituloFixed } from '../../components/titulo-fixed.vue'

export const LazyRegistrarPersona = import('../../components/registrar-persona.vue' /* webpackChunkName: "components/registrar-persona" */).then(c => c.default || c)
export const LazyTituloFixed = import('../../components/titulo-fixed.vue' /* webpackChunkName: "components/titulo-fixed" */).then(c => c.default || c)
