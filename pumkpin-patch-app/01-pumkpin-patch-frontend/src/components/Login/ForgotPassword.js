import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from './ForgotPassword.module.css'


const ForgotPassword = props => {
    
const [sec1IsValid, setSec1IsValid] = useState();
const [sec2IsValid, setSec2IsValid] = useState();
const [emailIsValid, setEmailIsValid] = useState();
const [formIsValid, setFormIsValid] = useState();
const [enteredEmail, setEnteredEmail] = useState('');
const [enteredSec1, setEnteredSec1] = useState('');
const [enteredSec2, setEnteredSec2] = useState('');

const CancelHandler = event =>{
        props.onForgotPassword(false);
    }

const submitHandler = event =>{
    event.preventDefault();
    if(emailIsValid === true && sec1IsValid === true && sec2IsValid === true){
        props.onForgotSubmit(enteredEmail, enteredSec1, enteredSec2);
        props.onForgotPassword(false);
    }

  
       else{
      alert("Please enter Valid Email and Answers please!")
       }
      
    
    

    
}

const sec1ChangeHandler = event =>{
    setEnteredSec1(event.target.value);
    
    setSec1IsValid(
        event.target.value.trim().length > 0
    );

    }
    const sec2ChangeHandler = event =>{
        setEnteredSec2(event.target.value);
        console.log(event.target.value.trim().length >0)
        setSec2IsValid(
          event.target.value.trim().length > 0
        );
    
        }
const validateSec1Handler = event =>{
    
    setSec1IsValid(enteredSec1.trim().length > 0 );
    
                }
const validateSec2Handler = event =>{
    
    
        setSec2IsValid(enteredSec2.trim().length > 0 );
        }
    

const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setEmailIsValid(
      event.target.value.includes('@')
    );
    console.log(emailIsValid)
  };


    return (
        <Modal>
            <Card>
                <h1>Forgot Password?</h1>
                <p>Please Enter Email and Answer the Security Questions to Reset Password.</p>
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
            <h2>Secuirty Question 1: </h2>
            <h3>What was the name of your first pet?</h3>
          <div
            className={`${classes.control} ${sec1IsValid === false ? classes.invalid : ''
              }`}
          >

          
            <label htmlFor="sec1">Answer 1</label>
            <input
              type="text"
              id="sec1"
              onChange={sec1ChangeHandler}
              onBlur={validateSec1Handler}
            />
          </div>
          <h2>Secuirty Question 2: </h2>
            <h3>What Town did your grow up in?</h3>
          <div
            className={`${classes.control} ${sec2IsValid === false ? classes.invalid : ''
              }`}
          >
            <label htmlFor="sec2">Answer 2</label>
            <input
              type="text"
              id="sec2"
              onChange={sec2ChangeHandler}
              onBlur={validateSec2Handler}
            />
          </div>
          <div className={classes.actions}>

          </div>
          
          <button type='submit' translate="transform(0%,250%)" className={classes.button}>Sumbit</button>

        </form>
                <button className={classes.CancelButton} onClick={CancelHandler}>Cancel</button>
            </Card>
        </Modal>
    );
};

export default ForgotPassword;