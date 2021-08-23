import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainButton from '@/components/MainButton'
import VueMeta from 'vue-meta';

const app = createApp(App)

app.component('MainButton', MainButton)

app.use(router).use(store).mount('#app')