import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "vue-playlists-1f269.firebaseapp.com",
    projectId: "vue-playlists-1f269",
    storageBucket: "vue-playlists-1f269.appspot.com",
    messagingSenderId: "194047630187",
    appId: "1:194047630187:web:2ce148fa3dad7322024a2e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }