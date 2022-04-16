import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

// UI library
import Continue from "./components/ui/Continue";
import Option from "./components/ui/Option";

// Utils
import Loader from "./components/utils/Loader";
import LoadGLTF from "./components/utils/LoadGLTF";
import LoadFBX from "./components/utils/LoadFBX";

// Scenes
import SceneVisuals from "./components/game/SceneVisuals";
import SceneUI from "./components/game/SceneUI";
import Rules from "./components/game/Rules";
import Title from "./components/game/Title";
import Welcome from "./components/game/Welcome";

createApp(App)
    .use(store)
    .use(TroisJSVuePlugin)
    .component("Continue", Continue)
    .component("Option", Option)
    .component("Loader", Loader)
    .component("LoadGLTF", LoadGLTF)
    .component("LoadFBX", LoadFBX)
    .component("SceneVisuals", SceneVisuals)
    .component("SceneUI", SceneUI)
    .component("Rules", Rules)
    .component("Title", Title)
    .component("Welcome", Welcome)
    .mount("#app");
