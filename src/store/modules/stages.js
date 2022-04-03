const state = () => ({
    stages: ["Scene1"],
    currentStageIndex: 0,
    sceneLoading: false,
});

// getters
const getters = {
    isCurrentStage: state => name => {
        return state.stages[state.currentStageIndex] == name;
    },
    isSceneLoading: state => {
        return state.sceneLoading;
    },
    isLastStage: state => {
        return state.currentStageIndex == state.stages.length - 1;
    },
};

// actions
const actions = {
    nextStage({ commit, getters }) {
        commit("nextStage");
        if (getters.isLastStage) commit("saveData");
    },
};

// mutations
const mutations = {
    nextStage(state) {
        if (state.currentStageIndex + 1 < state.stages.length) {
            state.currentStageIndex++;

            // If next scene is of Scene type
            if (state.stages[state.currentStageIndex].includes("Scene")) {
                state.sceneLoading = !state.sceneLoading;
            }
        }
    },
    loadingSwitch(state) {
        state.sceneLoading = !state.sceneLoading;
    },
    saveData(state) {
        this.dispatch("data/saveData", { root: true });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
