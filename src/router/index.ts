import { createRouter, createWebHashHistory } from "vue-router";
import Money from '../views/Money.vue'
import Labels from '../views/Labels.vue'
import Statistics from '../views/Statistics.vue'
import NotFound from '../views/NotFound.vue'




const router= createRouter({
    history: createWebHashHistory(),
    routes: [
        {path:'/', redirect:'/money'},
        {path:'/money', name: 'Money', component: Money},
        {path:'/labels', name: 'Labels', component: Labels},
        {path:'/statistics', name: 'Statistics', component: Statistics},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
})


export {router}