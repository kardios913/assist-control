export default {
    /*
    ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
    */
    css: [
        '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
        '~/node_modules/simple-line-icons/css/simple-line-icons.css'
    ],
    plugins: [
        // '~/main.js',
        {
          src: '~/plugins/install-components.js',
          ssr: false
        }
      ]
}