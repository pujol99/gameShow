import { labels } from "./labels";

const state = () => ({
    languages: {
        ESP: 0,
    },
    language: 0,
    cameraPositions: {
        Blue: null,
        Red: null,
        Yellow: null,
        Center: null,
        Board: null,
    },
    prizesPositions: {
        "Quiebra": null,
        "Comodin": null,
        "150": null,
    },
    turnIndex: 2,
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
    getCameraPosObject: state => {
        return state.cameraPositions;
    },
    getPrizesPosObject: state => {
        return state.prizesPositions;
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
    setPrizePos({ commit }, payload) {
        commit("setPrizePos", payload);
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
    setPrizePos(state, payload) {
        state.prizesPositions[payload.name] = payload.pos;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
