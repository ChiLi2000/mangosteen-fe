import { createApp } from 'vue'
import { App } from './App'

import {createRouter, createWebHashHistory} from 'vue-router'
import { Head } from './views/Head'
import { Foot } from './views/Foot'

const routes = [
    { path: '/', component: Head },
    { path: '/about', component: Foot },
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

createApp(App)
.use(router)
.mount('#app')