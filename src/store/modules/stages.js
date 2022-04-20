const state = () => ({
    // Stages: Welcome | Rules | Round (Title | Throw / Choose)
    currentStage: ["Welcome"],
    roundTitles: ["Prueba de velocidad"],
    roundIndex: 0,
    //
    // 3D Scene
    scene: null,
    renderer: null,
    gltfScene: null,
});

// getters
const getters = {
    getCurrentStage: state => {
        return state.currentStage[state.currentStage.length - 1];
    },
    getGLTF: state => {
        return state.gltfScene;
    },
    getRenderer: state => {
        return state.renderer;
    },
    getRoundTitle: state => {
        return state.roundTitles[state.roundIndex];
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
    pushStage({ commit }, stage) {
        commit("pushStage", stage);
    },
    popStage({ commit }) {
        commit("popStage");
    },
};

// mutations
const mutations = {
    setScene(state, scene) {
        state.scene = scene;
    },
    setStage(state, stage) {
        state.currentStage = [stage];
    },
    pushStage(state, stage) {
        state.currentStage.push(stage);
    },
    popStage(state) {
        state.currentStage.pop();
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
