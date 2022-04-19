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
    prizesPositions: {},
    money: {
        Blue: {
            total: 0,
            round: 0,
        },
        Yellow: {
            total: 0,
            round: 0,
        },
        Red: {
            total: 0,
            round: 0,
        },
    },
    perks: {
        Blue: {
            total: [],
            round: [],
        },
        Yellow: {
            total: [],
            round: [],
        },
        Red: {
            total: [],
            round: [],
        },
    },
    turn: "Blue",
    
});

// getters
const getters = {
    //labels
    getLabel: state => label => {
        if (!labels[label]) return "No label";
        return labels[label][state.language];
    },
    getParticipantPos: state => {
        return state.cameraPositions[state.turn];
    },
    getParticipantMoneyRound: state => {
        return state.money[state.turn].round;
    },
    getParticipantMoneyTotal: state => {
        return state.money[state.turn].total;
    },
    getParticipantPerksRound: state => {
        return state.perks[state.turn].round;
    },
    getParticipantPerksTotal: state => {
        return state.perks[state.turn].total;
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
    nextTurn({ commit }) {
        commit("nextTurn");
    },
};

// mutations
const mutations = {
    setLanguage(state, language) {
        state.language = state.languages[language];
    },
    setMoney(state, amount){
        state.money[state.turn].round += amount
    },
    setPerk(state, perk){
        state.perks[state.turn].round.push(perk)
    },
    loseMoney(state){
        state.money[state.turn].round = 0
    },
    nextTurn(state) {
        if(state.turn === "Blue")
            state.turn = "Red"
        else if(state.turn === "Red")
            state.turn = "Yellow"
        else
            state.turn = "Blue"
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
