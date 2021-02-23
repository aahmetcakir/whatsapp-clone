import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./signIn.css";

const auth = firebase.auth();
function SignIn() {
  const [{ user }, dispatch] = useStateValue();
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
      <div className="signIn_card">
        <div className="signIn_card_content">
          <h2 className="signIn_card_title">WhatsApp'a giriş yap</h2>
          <button className="signIn_card_btn" onClick={signInGoogle}>
            Google ile giriş yap
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
