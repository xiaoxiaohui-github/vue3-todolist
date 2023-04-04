import {createRouter , createWebHistory} from 'vue-router'
import AppHome from '@/components/AppHome.vue'
const routes = [
    {
        path:'/',
        name:'AppHome',
        component:AppHome,
    },
    {
        path:'/page1',
        name:'page1',
        component:() => import ('@/components/pages/PageOne.vue')
    }
]
export default createRouter({
    routes,
    history:createWebHistory()
})
