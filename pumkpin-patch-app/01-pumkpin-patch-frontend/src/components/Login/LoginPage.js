import React, { useState } from 'react';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import classes from './LoginPage.module.css'

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
};

export default LoginPage;