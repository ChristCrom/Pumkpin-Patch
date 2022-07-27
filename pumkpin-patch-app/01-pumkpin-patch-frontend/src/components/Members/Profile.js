import React, { Fragment, useEffect, useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import { loadStripe } from "@stripe/stripe-js";
import firebase from "firebase/compat/app";
import classes from "./Profile.module.css";

const Profile = (props) => {
  
  const [user, setUser] = useState([{KidName: 'Kids Name', Birthdate: 'Birthdate', Phone: 'Phone Number', email: 'Email', Accepted: 'Accepted'}]);
  const [auth, setAuth] = useState({});
  var auth1 = {};
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      const auth1 = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      }
   
    console.log(auth1.email);
    const ref = firebase.app().firestore().collection("Waitlist");
    const snapshot = ref
      .where("email", "==", auth1.email)
      .get()
      .then((QS) => {
        QS.forEach((docs) => {
          setUser(user => [...user, docs.data()]);
        });
      }); });
  }, []);

  
  if (user) {
    console.log(user);
   const data = user.map(e =>{
    return(
   <div className={classes.table}>
    <ul className={classes.li}>
        <li>{e.KidName}</li>
        <li>{e.Birthdate}</li>
        <li>{e.Phone}</li>
        <li>{e.email}</li>
        <li>{e.Accepted}</li>
      </ul>
      </div> 

    )
    
  })
    return (
      <Fragment>
       <h3 className={classes.table}>{data}</h3>
      </Fragment>
    );}
  
};

export default Profile;
