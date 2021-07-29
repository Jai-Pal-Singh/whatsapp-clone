import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRdMIAUcWkbc5acAiNuC2ZsplnxlegQlk",
  authDomain: "whatsapp-clone-6482f.firebaseapp.com",
  projectId: "whatsapp-clone-6482f",
  storageBucket: "whatsapp-clone-6482f.appspot.com",
  messagingSenderId: "976832689106",
  appId: "1:976832689106:web:312dafeabcc4d802540e0b",
  measurementId: "G-M8G8KB3XBB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
