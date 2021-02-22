import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyA7WfI59mz9FAa6tjJdHjvJadup73nxjPM",
  authDomain: "whatsapp-clone-4bf1f.firebaseapp.com",
  projectId: "whatsapp-clone-4bf1f",
  storageBucket: "whatsapp-clone-4bf1f.appspot.com",
  messagingSenderId: "369888048542",
  appId: "1:369888048542:web:111f699b6970c7fd21928f",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
