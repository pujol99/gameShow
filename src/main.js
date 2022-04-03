import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

createApp(App).use(store).use(TroisJSVuePlugin).mount("#app");
