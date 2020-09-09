import Vue from "vue"
import Vuex from "vuex"




import moduleUser from './user'
import moduleWorld from './world'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: { logged: false },
		worlds: [],
		world: {},
		locations: []
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload
		},
		setWorlds(state, payload) {
			state.worlds = payload
		},
		setWorld(state, payload) {
			state.world = payload
		},
		setLocations(state, payload) {
			state.locations = payload
		}
	},
	actions: {
	},

		
	modules: {
		moduleUser: moduleUser,
		moduleWorld: moduleWorld
	}
})
