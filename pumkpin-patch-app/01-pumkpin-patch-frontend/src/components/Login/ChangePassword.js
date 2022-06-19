import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from './ChangePassword.module.css'

const ChangePassword = props => {
    const [enteredConPassword, setEnteredConPassword] = useState("");
  const [conPasswordIsValid, setConPasswordIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const conPasswordChangeHandler = (event) => {
    setEnteredConPassword(event.target.value);

    setFormIsValid(
      (event.target.value.trim().length > 6 && event.target.value === enteredPassword ) && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredConPassword.trim().length > 6 && enteredConPassword === enteredPassword
    );
  };

  const validateConPasswordHandler = () => {
    setConPasswordIsValid(enteredConPassword.trim().length > 6 && enteredConPassword === enteredPassword);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      props.onPasswordChange(enteredPassword);
    }

    if (!formIsValid) {
      alert("Please enter valid password")
    }
  };
  const onCancelHandler = event => {
    props.setChangePassword(false);
    props.setLoginActive(true);
    
  };
 

  return (
    <Modal>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
         
          <div
            className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
              }`}
          >
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
           <div
            className={`${classes.control} ${conPasswordIsValid === false ? classes.invalid : ''
              }`}
          >

            <label htmlFor="password">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={enteredConPassword}
              onChange={conPasswordChangeHandler}
              onBlur={validateConPasswordHandler}
            />
          </div>
          <div className={classes.actions}>

          </div>
          
          <button type='submit' className={classes.button}>Submit</button>

        </form>
        <button className={classes.CancelButton} onClick={onCancelHandler}>Cancel</button> 
        
      </Card>
    </Modal>
  );
};

export default ChangePassword;