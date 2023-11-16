import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import AOS from 'aos';
import "aos/dist/aos.css";

import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

createApp(App)
.use(store)
.use(router)
.use(AOS)
.use(VueFullPage)
.mount('#app')
