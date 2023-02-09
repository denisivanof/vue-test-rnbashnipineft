import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import {createPinia} from "pinia";
import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia()
const options: PluginOptions = {
    position: POSITION.BOTTOM_RIGHT
};


createApp(App)
    .use(pinia)
    .use(Toast, options)
    .mount('#app')

