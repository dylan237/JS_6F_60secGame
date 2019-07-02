import * as types from '../mutations_type.js'

const state = {
  // datePickerStartTime: '',
  // datePickerEndTime: ''
  countdown: 12,
}

const mutations = {
  [types.actCountdown](state, payload) {
    state.countdown -= 1;
  },
  [types.resetCountdown](state, payload) {
    state.countdown = payload;
  },
}

// usage - this.$store.dispatch('SETDATEPICKERDATE', { starttime:'', endtime:''})
const actions = {
  actCountdown(context, payload) {
    context.commit('actCountdown', payload)
  },
  resetCountdown(context, payload) {
    context.commit('resetCountdown', payload)
  }
}

// usage - this.$store.getters.GETDATE
const getters = {
  countdown(state) {
    return state.countdown;
  }
  // GETDATE(state) {
  //   let obj = {
  //     starttime: new Date(state.datePickerStartTime).toLocaleDateString(),
  //     endtime: new Date(state.datePickerEndTime).toLocaleDateString()
  //   }
  //   return obj
  // },
  // GETORIGINDATA(state) {
  //   let obj = {
  //     starttime: state.datePickerStartTime,
  //     endtime: state.datePickerEndTime,
  //   }
  //   return obj
  // }
}

export default {
    //namespaced: true,
    state,
    actions,
    mutations,
    getters
}