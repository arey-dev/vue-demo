import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import aura from '@/presets/aura' //import preset

const app = createApp(App)

app.use(router)

// prime vue
app.use(PrimeVue, {
  unstyled: true,
  pt: aura, //apply preset
  ptOptions: {
    mergeProps: true
  }
})
app.mount('#app')
