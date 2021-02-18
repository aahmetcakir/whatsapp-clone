import Layout from "./components/layout";
import "./App.css";
// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

// firebase.initializeApp({
//   apiKey: "AIzaSyA7WfI59mz9FAa6tjJdHjvJadup73nxjPM",
//   authDomain: "whatsapp-clone-4bf1f.firebaseapp.com",
//   projectId: "whatsapp-clone-4bf1f",
//   storageBucket: "whatsapp-clone-4bf1f.appspot.com",
//   messagingSenderId: "369888048542",
//   appId: "1:369888048542:web:111f699b6970c7fd21928f",
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  // const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
