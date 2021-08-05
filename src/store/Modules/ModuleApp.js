const ModuleApp = {
    namespaced: true,
    state: () => ({
        active_nav: 0
    }),
    mutations: {
        MutateUpdateActiveNav: function(state, payload) {
            state.active_nav = payload
        }
    },
    actions: {
        updateActiveNav: function({commit}, payload) {
            commit('MutateUpdateActiveNav', payload)
        }
    },
    getters: {
        GetActiveNav(state) {
            return state.active_nav
        }
    }
}

export default ModuleApp