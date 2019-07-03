import * as types from '../mutations_type.js'

const state = {
  countdown: 60, // 倒數秒數
  score: 0,      // 總分
}

const mutations = {
  [types.actCountdown](state, payload) {
    state.countdown -= 1;
  },
  [types.resetCountdown](state, payload) {
    state.countdown = payload;
  },
  [types.mutateScore](state, payload) {
    let newNum = parseFloat(payload);
    console.log(newNum);
    state.score = state.score + newNum >= 0 ? state.score + newNum : 0;
  },
  [types.scoreToZero](state, payload) {
    state.score = 0;
  },
  
}

const actions = {
  actCountdown(context, payload) {
    context.commit('actCountdown', payload)
  },
  resetCountdown(context, payload) {
    context.commit('resetCountdown', payload)
  },
  mutateScore(context, payload) {
    context.commit('mutateScore', payload)
  },
  scoreToZero(context, payload) {
    context.commit('scoreToZero', payload)
  }
}

const getters = {
  countdown(state) {
    return state.countdown;
  },
  score(state) {
    return state.score;
  }
}

export default {
    //namespaced: true,
    state,
    actions,
    mutations,
    getters
}