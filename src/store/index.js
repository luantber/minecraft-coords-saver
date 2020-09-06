import Vue from "vue"
import Vuex from "vuex"
import { db, auth } from "../firebase"
import firebase from "firebase/app"
import router from "../router"

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
		async login(context) {
			try {
				firebase.auth().languageCode = "es"
				const google_provider = new firebase.auth.GoogleAuthProvider()
				const res = await firebase
					.auth()
					.signInWithPopup(google_provider)

				console.log(res)
				const user = {
					logged: true,
					email: res.user.email,
					name: res.user.displayName,
					photoUrl: res.user.photoURL,
					uid: res.user.uid
				}

				context.commit("setUser", user)
				router.push("/worlds")
			} catch (error) {
				console.log(error)
			}
		},

		async logout(context) {
			try {
				await firebase.auth().signOut()
				context.commit("setUser", { logged: false })
			} catch (error) {
				console.log(error)
			}
		},

		detectarUsuario(context, user) {
			console.log("detectarUsuario", user)
			if (user) {
				const userLoged = {
					logged: true,
					email: user.email,
					name: user.displayName,
					photoUrl: user.photoURL,
					uid: user.uid
				}
				context.commit("setUser", userLoged)
			} else {
				context.commit("setUser", { logged: false })
			}
		},

		async getWorld(contex, id) {
			const snapWorld = await db
				.collection("worlds")
				.doc(id)
				.get()

			const snapLocations = await db
				.collection("worlds")
				.doc(id)
				.collection("locations")
				.get()

			const locs = []
			snapLocations.forEach((doc) => {
				locs.push(doc.data())
			})

			contex.commit("setWorld", snapWorld.data())
			contex.commit("setLocations", locs)
		},

		async getWorlds(context) {
			console.log(context.state.user)
			const collectionWorlds = await db
				.collection("worlds")
				.where("uid", "==", context.state.user.uid)
				.get()

			const worlds = []
			// for (const doc of collectionWorlds) {
			// 	worlds.push(doc.data())
			// }
			collectionWorlds.forEach((doc) => {
				worlds.push(doc.data())
			})
			context.commit("setWorlds", worlds)
		},

		async createWorld(context, world) {
			await db
				.collection("worlds")
				.add({ name: world.name, uid: context.state.user.uid })
		}
	},
	modules: {}
})
