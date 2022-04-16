import { labels } from "./labels";

const state = () => ({
    languages: {
        ESP: 0,
    },
    language: 0,
    cameraPositions: [],
    turnIndex: 0,
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";
        return labels[label][state.language];
    },
    getCameraPos: state => {
        return state.cameraPositions[state.turnIndex];
    },
    getCameraPosCenter: state => {
        return state.cameraPositions[3];
    },
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
    setRedPos({ commit }, pos) {
        commit("setRedPos", pos);
    },
    setYellowPos({ commit }, pos) {
        commit("setYellowPos", pos);
    },
    setBluePos({ commit }, pos) {
        commit("setBluePos", pos);
    },
    setCenterPos({ commit }, pos) {
        commit("setCenterPos", pos);
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
    setRedPos(state, pos) {
        state.cameraPositions[1] = pos;
    },
    setYellowPos(state, pos) {
        state.cameraPositions[2] = pos;
    },
    setBluePos(state, pos) {
        state.cameraPositions[0] = pos;
    },
    setCenterPos(state, pos) {
        state.cameraPositions[3] = pos;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
