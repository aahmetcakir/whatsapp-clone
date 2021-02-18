import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "@material-ui/core";


const auth = firebase.auth();
function SignIn() {
  const [user] = useAuthState(auth);
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="signIn">
      <div className="signIn_icon"></div>
      <Button onClick={signInGoogle}>Giriş yap</Button>
    </div>
  );
}

export default SignIn;
