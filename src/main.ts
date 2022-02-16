import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'
import Nav from './components/Nav.vue'

const app=createApp(App)

app.component('Nav', Nav)
app.use(router)


app.mount('#app')

