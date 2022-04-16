import { labels } from "./labels";

const state = () => ({
    languages: {
        ESP: 0,
    },
    language: 0,
    // 0 Blue 1 Red 2 Yellow 3 Center 4 Board
    cameraPositions: {
        "Blue": null,
        "Red": null,
        "Yellow": null,
        "Center": null,
        "Board": null,
    },
    turnIndex: 0,
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";
        return labels[label][state.language];
    },
    getParticipantPos: state => {
        switch (state.turnIndex) {
            case 0:
                return state.cameraPositions["Blue"];
            case 1:
                return state.cameraPositions["Red"];
            case 2:
                return state.cameraPositions["Yellow"];
        }
    },
    getCameraPos: state => posName => {
        return state.cameraPositions[posName];
    },
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
    setCameraPos({ commit }, payload) {
        commit("setCameraPos", payload);
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
    nextTurn(state) {
        state.turnIndex = (state.turnIndex + 1) % 3;
    },
    setCameraPos(state, payload) {
        state.cameraPositions[payload.name] = payload.pos;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
