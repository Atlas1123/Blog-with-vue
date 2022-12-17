// import b from "bootstrap-vue";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Toast, {PluginOptions} from "vue-toastification";
// import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'

// import './app.scss';
import './assets/global.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// const options: PluginOptions = {
//     // You can set your default options here
// };

// app.use(Toast, options);

app.mount('#app')
