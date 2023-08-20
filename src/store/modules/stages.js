const state = () => ({
    // Stages: Welcome | Rules | Round
    currentStage: "Welcome",
    uiStage: "",

    // 3D Scene
    scene: null,
    renderer: null,
    gltfScene: null,
});

// getters
const getters = {
    getCurrentStage: state => {
        return state.currentStage;
    },
    getGLTF: state => {
        return state.gltfScene;
    },
    getRenderer: state => {
        return state.renderer;
    },
};

// actions
const actions = {
    addGLTFScene({ commit }, scene) {
        commit("addToScene", scene);
        commit("setGLTFScene", scene);
    },
    setStage({ commit }, stage) {
        commit("setStage", stage);
    },
    setUI({ commit }, stage) {
        commit("setUI", stage);
    },
    removeUI({ commit }) {
        commit("removeUI");
    },
};

// mutations
const mutations = {
    setScene(state, scene) {
        state.scene = scene;
    },
    setStage(state, stage) {
        state.currentStage = stage;
    },
    setUI(state, stage) {
        state.uiStage = stage;
    },
    removeUI(state) {
        state.uiStage = "";
    },
    setRenderer(state, renderer) {
        state.renderer = renderer;
    },
    setGLTFScene(state, gltf) {
        state.gltfScene = gltf;
    },
    addToScene(state, object) {
        state.scene.add(object);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
