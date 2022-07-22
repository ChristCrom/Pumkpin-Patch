
import React, { Fragment, useEffect, useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import { loadStripe } from "@stripe/stripe-js";
import firebase from "firebase/compat/app";

import './MembersMain.css'

const MembersMain = (props) => {
  const [waitlistActive, setWaitlistActive] = useState(false);
  var user = null;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      const user1 = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        user = user1;
        const hasPaid = firebase.firestore().collection("users").doc(user.uid).collection("payments")
        console.log(hasPaid)
        console.log(user);
      } else {
        user = null;
      }
    });
    
    
  });

  const onStripeClick = async () => {
    console.log(user);

    const docRef = await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        mode: "payment",
        price: "price_1LGPFHAv8YJ3eI7DWdmcqQvB",
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
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  const onJoinWaitList = (event) => {
    setWaitlistActive(true);
  };
  const onCancel = (event) => {
    setWaitlistActive(false);
  };

  const handleToken = (event) => {
    console.log(event.token, event.addresses);
  };

  if (waitlistActive === false) {
 
    return (
      <Fragment>
        <button onClick={onJoinWaitList}>Join Waitlist</button>
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

export default MembersMain;
