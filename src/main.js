import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

// UI library
import Continue from "./components/ui/buttons/Continue";
import Close from "./components/ui/buttons/Close";
import Board from "./components/ui/Board";
import Perks from "./components/ui/Perks";

// Utils
import Loader from "./components/utils/Loader";
import LoadGLTF from "./components/utils/LoadGLTF";
import LoadFBX from "./components/utils/LoadFBX";
import Camera from "./components/utils/Camera";

createApp(App)
    .use(store)
    .use(TroisJSVuePlugin)
    .component("Continue", Continue)
    .component("Close", Close)
    .component("Loader", Loader)
    .component("LoadGLTF", LoadGLTF)
    .component("LoadFBX", LoadFBX)
    .component("Camera", Camera)
    .component("Board", Board)
    .component("Perks", Perks)
    .mount("#app");
