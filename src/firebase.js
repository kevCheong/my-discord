import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDKS3JDiBbPSzr9OPvJQPv04bP0k_LlU3k",
    authDomain: "mydiscord-d1f09.firebaseapp.com",
    projectId: "mydiscord-d1f09",
    storageBucket: "mydiscord-d1f09.appspot.com",
    messagingSenderId: "859097696841",
    appId: "1:859097696841:web:7b7c207fb3cc06dfd58d98"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db; 