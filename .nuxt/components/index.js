export { default as RegistrarPersona } from '../../components/registrar-persona.vue'

export const LazyRegistrarPersona = import('../../components/registrar-persona.vue' /* webpackChunkName: "components/registrar-persona" */).then(c => c.default || c)
