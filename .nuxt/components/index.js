export { default as ControlEvento } from '../../components/control-evento.vue'
export { default as RegistrarEvento } from '../../components/registrar-evento.vue'
export { default as RegistrarPersona } from '../../components/registrar-persona.vue'
export { default as TituloFixed } from '../../components/titulo-fixed.vue'

export const LazyControlEvento = import('../../components/control-evento.vue' /* webpackChunkName: "components/control-evento" */).then(c => c.default || c)
export const LazyRegistrarEvento = import('../../components/registrar-evento.vue' /* webpackChunkName: "components/registrar-evento" */).then(c => c.default || c)
export const LazyRegistrarPersona = import('../../components/registrar-persona.vue' /* webpackChunkName: "components/registrar-persona" */).then(c => c.default || c)
export const LazyTituloFixed = import('../../components/titulo-fixed.vue' /* webpackChunkName: "components/titulo-fixed" */).then(c => c.default || c)
