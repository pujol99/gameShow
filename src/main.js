import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

// UI library
import Continue from "./components/ui/Continue";
import Accept from "./components/ui/Accept";
import Option from "./components/ui/Option";

// Utils
import Loader from "./components/utils/Loader";
import LoadGLTF from "./components/utils/LoadGLTF";
import LoadFBX from "./components/utils/LoadFBX";

// Scenes
import SceneVisuals from "./components/game/SceneVisuals";
import Rules from "./components/game/Rules";
import Title from "./components/game/Title";

createApp(App)
    .use(store)
    .use(TroisJSVuePlugin)
    .component("Continue", Continue)
    .component("Accept", Accept)
    .component("Option", Option)
    .component("Loader", Loader)
    .component("LoadGLTF", LoadGLTF)
    .component("LoadFBX", LoadFBX)
    .component("SceneVisuals", SceneVisuals)
    .component("Rules", Rules)
    .component("Title", Title)
    .mount("#app");
