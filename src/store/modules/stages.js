const state = () => ({
    stages: ["Welcome", "Game"],
    currentStageIndex: 0,
    sceneLoading: false,
    scene: null,
    renderer: null,
    gltfScene: null,
});

// getters
const getters = {
    isCurrentStage: state => name => {
        return state.stages[state.currentStageIndex] == name;
    },
    isLastStage: state => {
        return state.currentStageIndex == state.stages.length - 1;
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
    nextStage({ commit, getters }) {
        if (!getters.isLastStage) commit("nextStage");
    },
    addGLTFScene({ commit }, scene) {
        commit("addToScene", scene);
        commit("setGLTFScene", scene);
    },
    loadingFinish({ commit }) {
        commit("loadingEnd");
    },
};

// mutations
const mutations = {
    nextStage(state) {
        state.currentStageIndex++;
    },
    setScene(state, scene) {
        state.scene = scene;
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
