import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css"

const app = createApp(App);
app.use(router);
app.use(Toast, {
  timeout: 3000,
  position: "top-right",
  closeOnClick: true,
  pauseOnClick: true,
});

app.mount("#app");