import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdFQLccDwirCk7QqTVS4AWiKlFk-9TdQo",
  authDomain: "social-butterfly-5c583.firebaseapp.com",
  projectId: "social-butterfly-5c583",
  storageBucket: "social-butterfly-5c583.appspot.com",
  messagingSenderId: "514490314845",
  appId: "1:514490314845:web:89dde82add4ceb71f21db4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };

export default db; // we will use this a lot
