import { createVuetify } from 'vuetify'
import * as styles from 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark'
    },
    components,
    directives,
    styles
  })

  nuxtApp.vueApp.use(vuetify)
})