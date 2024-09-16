import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";
import router from "./router/index";
import setPrimeComponent from "./modules/prime.module";

export const app = createApp(App);
setPrimeComponent(app);
app.use(router);
app.mount("#app");
