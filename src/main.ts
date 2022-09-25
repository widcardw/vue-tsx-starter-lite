import { createApp } from 'vue'
import App from './App'
import 'uno.css'

import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

console.log(routes)

const app = createApp(App)
app.use(router)
app.mount('#app')
