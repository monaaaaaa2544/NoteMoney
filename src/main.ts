import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { createPinia, PiniaVuePlugin } from 'pinia'

import Nav from './components/Nav.vue'
import Layout from '@/components/Layout.vue'
import LabelsIcon from '@/assets/icons/labels.svg'
import MoneyIcon from '@/assets/icons/money.svg'
import StatisticsIcon from '@/assets/icons/statistics.svg'
import RightIcon from '@/assets/icons/right.svg'
import BackIcon from '@/assets/icons/back.svg'



const app = createApp(App)
const pinia = createPinia();

app.component('Nav', Nav)
app.component('Layout', Layout)
app.component('LabelsIcon', LabelsIcon)
app.component('MoneyIcon', MoneyIcon)
app.component('StatisticsIcon', StatisticsIcon)
app.component('RightIcon', RightIcon)
app.component('BackIcon', BackIcon)


app.use(pinia).use(router).mount('#app')






