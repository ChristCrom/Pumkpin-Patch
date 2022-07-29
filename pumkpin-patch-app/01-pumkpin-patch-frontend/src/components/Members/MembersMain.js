
import React, { Fragment, useEffect, useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import { loadStripe } from "@stripe/stripe-js";
import firebase from "firebase/compat/app";

import classes from './MembersMain.module.css'
import { Redirect } from "react-router-dom";

const MembersMain = (props) => {
  const [waitlistActive, setWaitlistActive] = useState(false);
  const [Paid, setPaid] = useState(false);
  const[formButton, setFormButton] = useState(false);

  const[PGName, setPGName] = useState();
  const[KidName, setKidName] = useState();
  const[Birthdate, setBirthdate] = useState();
  const[Phone, setPhone ] = useState();
  const[Email, setEmail] = useState();

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
        const hasPaid = firebase.firestore().collection("users").doc(user.uid).collection("payments");
        if(hasPaid){
          setPaid(true);
        }
       
        console.log(hasPaid)
        console.log(user);
      } else {
        user = null;
      }
    });
    
    
  });

 const onChangeHandler = (event) =>{
  if(event.target.id === 'PGName'){
      setPGName(event.target.value)
  }
  if(event.target.id === 'KidName'){
    setKidName(event.target.value)
  }
  if(event.target.id === 'Birthdate'){
    setBirthdate(event.target.value)
  }
  if(event.target.id === 'Phone'){
    setPhone(event.target.value)
  }
  if(event.target.id === 'Email'){
    setEmail(event.target.value)
  }
 }

  const onStripeClick = async () => {
    console.log(user);
    if(user === null){
      alert("Please Signup/Login to Continue");
    }
    else{

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
  };}

  const onJoinWaitList = (event) => {
    setWaitlistActive(true);
  };
  const onCancel = (event) => {
    setWaitlistActive(false);
  };
  const formButtonHandler = event =>{
    setFormButton(true);
    console.log("hi")
  };
  const onFormSubmit =  async (event)  => {
    event.preventDefault();
    console.log(event.target.value)
    console.log(user.email)
    const d = new Date();

    const data = {
      
      PGName: PGName,
        KidName: KidName,
        Birthdate: Birthdate,
        Phone: Phone,
        email: user.email,
        signUpDate: d.toUTCString(),
        Accepted: "no",
        
    };
    const docRefs = await db
    .collection("Waitlist").doc(data.KidName).set(data)
   
   
   setFormButton(false);
  }
  
   if(Paid && formButton === false){
    return(
    <button className={classes.button} onClick={(formButtonHandler)}>Add Child to Waitlist</button>)
  }
    if(formButton ===true){
    return(
    <div className={classes.main}> <form onSubmit={onFormSubmit}>
            <label htmlFor="name">Parent/Guardian Full Name: </label>
            <input
              type="PGName"
              id="PGName"
              onBlur = {onChangeHandler}
              onChange = {onChangeHandler}
            />
            <label htmlFor="name">Child Full Name: </label>
            <input
              type="name"
              id="KidName"
              onBlur = {onChangeHandler}
              onChange = {onChangeHandler}
            />
            <label htmlFor="Date">Birth Date: </label>
            <input
              type="Date"
              id="Birthdate"
              onBlur = {onChangeHandler}
              onChange = {onChangeHandler}
            />
            <label htmlFor="phone">Phone Number: </label>
            <input
              type="phone"
              id="Phone"
              onBlur = {onChangeHandler}
              onChange = {onChangeHandler}
            />
           
            <button onClick = {onFormSubmit}>Submit</button>
            </form>
          </div>)
   }
  if (waitlistActive === false) {
   
    return (
    
      <Fragment>
        <button className={classes.button} onClick={onJoinWaitList}>Join Waitlist</button>
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
