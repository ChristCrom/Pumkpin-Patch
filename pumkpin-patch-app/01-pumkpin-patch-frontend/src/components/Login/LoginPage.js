import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import classes from './LoginPage.module.css'

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const LoginPage = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      props.onLogin(enteredEmail, enteredPassword);
    }

    if (!formIsValid) {
      alert("Please Enter a Valid Email and Password!")
    }
  };
  const loginHandler = event => {
    props.onLoginClick(true);
    console.log("clicked");
  };
  const ForgotHandler = event => {
    props.onForgotPassword(event);
  };

 

  return (
   <Modal>
     <Card className={classes.login}>
       <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
              }`}
          >

            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
              }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>

          </div>
          
          <button type='submit' className={classes.button}>Login</button>

        </form>
        <button className={classes.CancelButton} onClick={loginHandler}>Cancel</button> 
        <button className={classes.FPbutton} onClick={() => { ForgotHandler(true); loginHandler(); }}>Forgot Password?</button> 
        </Card>
        </Modal>
        );
     
//   const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     signInSuccessUrl: '',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//   };

//   const onSignOutHandler= event =>{
//     firebase.auth().signOut();
//     localStorage.removeItem("user");
//   }

//  useEffect(() => {
//   const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
//     props.setIsLoggedIn(!!user);
    
     
//   });
//   return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
// }, [props]);
//  if(props.setIsLoggedIn){
//   var user = firebase.auth().currentUser
//   localStorage.setItem("user",user)}
// if (!props.isLoggedIn) {
//   return (
//     <Modal>
//       <Card className={classes.login}>
//     <div>
//       <h1>My App</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
// </Card>
//     </Modal>
//   );
// }
// return (
//   <Modal>
//     <Card>
//   <div>
//     <h1>My App</h1>
//     <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
//     <a onClick={ onSignOutHandler }>Sign-out</a>
    
//   </div> 
//   </Card>
//   </Modal>
// ); 
 
}
export default LoginPage;