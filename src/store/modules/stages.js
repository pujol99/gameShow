const state = () => ({
    stages: ["Game"],
    roundTitles: ["Prueba de velocidad"],
    currentStageIndex: 0,
    roundIndex: 0,
    //
    rulesReaded: true,
    roundStarted: false,
    roundPresented: false,
    //
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
    rulesReaded: state => {
        return state.rulesReaded;
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
    setRulesReaded({ commit }) {
        commit("setRulesReaded");
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
    setRulesReaded(state) {
        state.rulesReaded = true;
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
