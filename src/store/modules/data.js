import { labels } from "./labels";

const state = () => ({
    languages: {
        ENG: 0,
        ESP: 1,
        CAT: 2,
    },
    language: 2,
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";
        return labels[label][state.language];
    },
};

// actions
const actions = {
    setLanguage({ commit }, language) {
        commit("setLanguage", language);
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
