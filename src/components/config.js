import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCLXZZMkbUCwi17C94S9ogDn2Yx7gZOVE4",
    authDomain: "discord-c81fd.firebaseapp.com",
    projectId: "discord-c81fd",
    storageBucket: "discord-c81fd.appspot.com",
    messagingSenderId: "661623557316",
    appId: "1:661623557316:web:d3cc88c3d083678a414d91"
  };

const app = firebase.initializeApp(firebaseConfig)
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;