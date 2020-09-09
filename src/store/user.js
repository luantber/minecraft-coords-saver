import firebase from "firebase/app"
import router from "../router"

const moduleUser = {
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
		}
    }
}


export default moduleUser