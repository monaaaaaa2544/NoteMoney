import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'
import store from './store/index'
import Nav from './components/Nav.vue'
import Layout from '@/components/Layout.vue'
import LabelsIcon from '@/assets/icons/labels.svg'
import MoneyIcon from '@/assets/icons/money.svg'
import StatisticsIcon from '@/assets/icons/statistics.svg'


const app=createApp(App)

app.component('Nav', Nav)
app.component('Layout', Layout)
app.component('LabelsIcon', LabelsIcon)
app.component('MoneyIcon', MoneyIcon)
app.component('StatisticsIcon', StatisticsIcon)

app.use(store)
app.use(router)



app.mount('#app')

