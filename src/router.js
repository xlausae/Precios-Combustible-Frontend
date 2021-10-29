import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Departamento from './components/Departamento.vue'
import Municipio from './components/Municipio.vue'
import TipoProducto from './components/Tipo_Producto.vue'


const routes = [
  {
    path: '/', // raiz 
    name: 'root', //nombre identificador de la ruta del componente
    component: App // encargado de pintar la raiz
  },
  {
    path: '/user/logIn', //ruta para acceder
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/user/signUp', //ruta para acceder
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/user/home', //ruta para acceder
    name: 'home',
    component: Home
  },
  {
    path: '/user/Departamento', //ruta para acceder
    name: 'Departamento',
    component: Departamento
  },
  {
    path: '/user/Municipio', //ruta para acceder
    name: 'Municipio',
    component: Municipio
  },
  {
    path: '/user/Tipo_Producto', //ruta para acceder
    name: 'TipoProducto',
    component: TipoProducto
  },
//Tipo_Producto
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
