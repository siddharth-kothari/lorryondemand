import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD6QqRDqEoDcnYiZjbYoHAeaS-WOlUcKk0",
    authDomain: "lorry-on-demand.firebaseapp.com",
    projectId: "lorry-on-demand",
    storageBucket: "lorry-on-demand.appspot.com",
    messagingSenderId: "118100139904",
    appId: "1:118100139904:web:5e322a77e6956f4abe2b65"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export {db};