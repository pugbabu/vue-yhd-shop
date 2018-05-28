import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    showFoot: true
}

const getters = {
    showFoot() {
        return state.showFoot
    }
}

const mutations = {
    setShowFoot(state, param) {
        state.showFoot = param
    }
}

const actions = {
    
}




export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})