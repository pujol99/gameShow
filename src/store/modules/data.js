import { labels } from "./labels";

const state = () => ({
    languages: {
        ESP: 0,
    },
    language: 0,
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
