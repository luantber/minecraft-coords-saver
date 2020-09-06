import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDm44AcHjjutewYYnD8T8vNIqfD4fze-kg",
    authDomain: "minecraft-saver.firebaseapp.com",
    databaseURL: "https://minecraft-saver.firebaseio.com",
    projectId: "minecraft-saver",
    storageBucket: "minecraft-saver.appspot.com",
    messagingSenderId: "575586670807",
    appId: "1:575586670807:web:7e77e4d9a0173de95cb892"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()


export {firebase, db,auth,storage}