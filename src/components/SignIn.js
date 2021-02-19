import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const auth = firebase.auth();
function SignIn() {
  const [{user}, dispatch] = useStateValue();
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="signIn">
      <div className="signIn_icon"></div>
      <Button style={{ color: "white" }} onClick={signInGoogle}>
        Giriş yap
      </Button>
    </div>
  );
}

export default SignIn;
