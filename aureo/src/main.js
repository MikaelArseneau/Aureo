import { createApp } from "vue";//importage de vue
import App from "./App.vue";//importage de l'app vue
import router from "./router/index.js";//importage de router
import "./style.css";//importage du css
import { createPinia } from "pinia";//importage de pinia

const app = createApp(App);
app.use(router);//utilisation du router
app.use(createPinia());//utilisation de pinia
app.mount("#app");
