import { db, auth } from "../firebase"


const moduleWorld = {
    actions: {
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

		/*
		*  Obtiene los mundos del usuario segun uid 
		*/
		async getWorlds(context) {
			console.log(context.rootState.user)
			const collectionWorlds = await db
				.collection("worlds")
				.where("uid", "==", context.rootState.user.uid)
				.get()

			const worlds = []
			
			collectionWorlds.forEach((doc) => {
				worlds.push( { id:doc.id , ...doc.data() } )
			})

			context.commit("setWorlds", worlds)
		},

		async createWorld(context, world) {
			await db
				.collection("worlds")
				.add({ name: world.name, uid: context.rootState.user.uid })
		}
	
    }
}

export default moduleWorld;