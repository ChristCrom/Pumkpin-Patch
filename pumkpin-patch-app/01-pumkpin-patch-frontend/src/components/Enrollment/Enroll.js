import React, { Fragment, useEffect, useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import { loadStripe } from "@stripe/stripe-js";
import firebase from "firebase/compat/app";
import classes from "./Enroll.module.css";

const Enroll = (props) => {
  const [waitlistActive, setWaitlistActive] = useState(false);
  const [Paid, setPaid] = useState(false);
  const [formButton, setFormButton] = useState(false);

  const [PGName, setPGName] = useState();
  const [KidName, setKidName] = useState();
  const [Birthdate, setBirthdate] = useState();
  const [Phone, setPhone] = useState();
  const [Email, setEmail] = useState();

  const db = firebase.firestore();
  var user = null;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      const user1 = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        user = user1;
        const hasPaid = firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .collection("payments");
        if (hasPaid) {
          setPaid(true);
          return <h1>you have already paid</h1>;
        }

        console.log(hasPaid);
        console.log(user);
      } else {
        user = null;
      }
    });
  });

  const onStripeClick = async () => {
    console.log(user);
    if (user === null) {
      alert("Please Signup/Login to Continue");
    } else {
      const docRef = await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
          mode: "payment",
          price: "price_1LR01fAv8YJ3eI7DZLZkNFl2",
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        });

      docRef.onSnapshot(async (snap) => {
        const { error, sessionId } = snap.data();
        console.log(snap.data);
        if (error) {
          alert("stop");
        }
        if (sessionId) {
          const stripe = await loadStripe("pk_test_dPAj9z2XRlLfgAqPJgXNB4Ep");
          stripe.redirectToCheckout({ sessionId }).then();
        }
      });
    }
  };

  const onJoinWaitList = (event) => {
    setWaitlistActive(true);
  };
  const onCancel = (event) => {
    setWaitlistActive(false);
  };

  if (waitlistActive === false) {
    return (
      <Fragment>
        <button className={classes.button} onClick={onJoinWaitList}>
          Pay Enrollment Fee
        </button>
      </Fragment>
    );
  }
  if (waitlistActive) {
    return (
      <Fragment>
        <Modal>
          <Card>
            <button onClick={onStripeClick}>Payment</button>
            <button onClick={onCancel}>Cancel</button>
          </Card>
        </Modal>
      </Fragment>
    );
  }
};

export default Enroll;
