import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'
import store from './store/index'
import Nav from './components/Nav.vue'

const app=createApp(App)

app.component('Nav', Nav)
app.use(store)
app.use(router)



app.mount('#app')

