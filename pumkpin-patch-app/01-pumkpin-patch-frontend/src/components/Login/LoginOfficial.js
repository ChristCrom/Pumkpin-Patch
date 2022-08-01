import React from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Fragment, useState, useEffect } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./LoginPage.module.css";

const LoginOfficial = (props) => {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  const onSignOutHandler = (event) => {
    firebase.auth().signOut();
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        props.setIsLoggedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [props]);

  if (!props.isLoggedIn) {
    return (
      <Modal>
        <Card className={classes.login}>
          <div>
            <h1>My App</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        </Card>
      </Modal>
    );
  }
  return (
    <Modal>
      <Card>
        <div>
          <h1>My App</h1>
          <p>
            Welcome {firebase.auth().currentUser.displayName}! You are now
            signed-in!
          </p>
          <a onClick={onSignOutHandler}>Sign-out</a>
        </div>
      </Card>
    </Modal>
  );
};

export default LoginOfficial;
