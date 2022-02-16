import { createRouter, createWebHashHistory } from "vue-router";
import Money from '../components/Money.vue'
import Labels from '../components/Labels.vue'
import Statistics from '../components/Statistics.vue'



const router= createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/', redirect:'/money'},
        {path:'/money', name: 'Money', component: Money},
        {path:'/labels', name: 'Labels', component: Labels},
        {path:'/statistics', name: 'Statistics', component: Statistics},
    ],
})


export {router}