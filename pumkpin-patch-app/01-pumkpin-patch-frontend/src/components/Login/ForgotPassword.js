import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from './ForgotPassword.module.css'






const ForgotPassword = props => {
  const [index, setIndex] = useState(0);

  const [sec1IsValid, setSec1IsValid] = useState();
  const [sec2IsValid, setSec2IsValid] = useState();
  const [sec3IsValid, setSec3IsValid] = useState();
  const [sec4IsValid, setSec4IsValid] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredSec1, setEnteredSec1] = useState('');
  const [enteredSec2, setEnteredSec2] = useState('');
  const [enteredSec3, setEnteredSec3] = useState('')
  const [enteredSec4, setEnteredSec4] = useState('')

  const [selectQuestion1, setSelectQuestion1] = useState();
  const [selectQuestion2, setSelectQuestion2] = useState();
  const [selectQuestion3, setSelectQuestion3] = useState();
  const [selectQuestion4, setSelectQuestion4] = useState();
  


  const CancelHandler = event => {
    props.onForgotPassword(false);
    props.setLoginActive(true);
  }

  const submitHandler = event => {
      event.preventDefault();
      props.onForgotSubmit(enteredEmail, enteredSec1, enteredSec2, enteredSec3, enteredSec4, index);
      props.onForgotPassword(false);
    }
    
  
const validateEmailHandler = () => {
    props.onEmailBlur(enteredEmail);
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEmailIsValid(
      event.target.value.includes('@')
    );
  };
  const secChangeHandler = event => {

    const result = event.target.value.replace(/[^a-z]/gi, '');
    if(event.target.id === "sec1"){
    setEnteredSec1(result);
    setSec1IsValid(event.target.value.trim().length > 0);
  }
  if(event.target.id === "sec2"){
    setEnteredSec2(result);
    setSec2IsValid(event.target.value.trim().length > 0);
  }
  if(event.target.id === "sec3"){
    setEnteredSec3(result);
    setSec3IsValid(event.target.value.trim().length > 0);
  }
  if(event.target.id === "sec4"){
    setEnteredSec4(result);
    setSec4IsValid(event.target.value.trim().length > 0);
  }
  };

  const onAddSec = event =>{
    event.preventDefault();
    setIndex(index + 1)
  }

  const onChangeQ = event =>{
    console.log(event.target.id)
    if (event.target.id === "1"){
    setSelectQuestion1(true);}
      if (event.target.id === "2"){
      setSelectQuestion2(true);}
        if (event.target.id === "3"){
        setSelectQuestion3(true);}
          if (event.target.id === "4"){
          setSelectQuestion4(true);}
  }
  const techCompanies = [
    {label:"Please select a Question", value: 0},
    { label: "What was the name of your first pet?", value: 1 },
    { label: "What was the name of the town you grew up in?", value: 2 },
    { label: "What is your mothers maiden name?", value: 3 },
    { label: "What was the Make and Model of your first car?", value: 4 },

  ];

 
  
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
            <div >
            <select id="1" onChange={onChangeQ}  style={{width: '800px', fontSize: '1.5rem'}} >
            {techCompanies.map((option) => (
            <option  value={option.value}>{option.label}</option>
          ))}
        </select></div>
        {selectQuestion1   &&
            <div
              className={`${classes.control} ${sec1IsValid === false ? classes.invalid : ''
                }`}
            >


              <label htmlFor="sec1">Answer 1</label>

              <input
                id="sec1"
                
                type="text"
                value={enteredSec1}
                onChange={secChangeHandler}
                onBlur={secChangeHandler}
              />
            </div>}
            
            {index >=1 &&
            <div>
            <h2>Secuirty Question 2: </h2>
            <div >
            <select id="2" onChange={onChangeQ} style={{width: '800px', fontSize: '1.5rem'}} >
            {techCompanies.map((option) => (
            <option id={2} value={option.value}>{option.label}</option>
          ))}
        </select></div>

          {selectQuestion2   &&  
          <div className={`${classes.control} ${sec2IsValid === false ? classes.invalid : '' }`}>
              <label htmlFor="sec2">Answer 2</label>
              <input
                type="text"
                id="sec2"
                value={enteredSec2}
                onChange={secChangeHandler}
                onBlur={secChangeHandler}
                />
                    </div>}
                    </div>}
            {index >=2 &&
            <div>
            <h2>Secuirty Question 3: </h2>
            <div >
            <select id="3" onChange={onChangeQ} style={{width: '800px', fontSize: '1.5rem'}} >
            {techCompanies.map((option) => (
            <option  value={option.value}>{option.label}</option>
          ))}
        </select></div>
        {selectQuestion3   && 
            <div
              className={`${classes.control} ${sec3IsValid === false ? classes.invalid : ''
                }`}
            >
              <label htmlFor="sec3">Answer 3</label>
              <input
                type="text"
                id="sec3"
                value={enteredSec3}
                onChange={secChangeHandler}
                onBlur={secChangeHandler}
              />
            </div>}</div>}

            
            {index >=3 &&
            <div>
            <h2>Secuirty Question 4: </h2>
            <div >
            <select id="4" onChange={onChangeQ} style={{width: '800px', fontSize: '1.5rem'}} >
            {techCompanies.map((option) => (
            <option  value={option.value}>{option.label}</option>
          ))}
        </select></div>
        {selectQuestion4   &&
            <div
              className={`${classes.control} ${sec4IsValid === false ? classes.invalid : ''
                }`}
            >
              <label htmlFor="sec2">Answer 4</label>
              <input
                type="text"
                id="sec4"
                value={enteredSec4}
                onChange={secChangeHandler}
                onBlur={secChangeHandler}
              />
            </div>}</div>}
            <div className={classes.actions}>

            </div>
            {index <=2 &&
            <button onClick={onAddSec}>+Add Secuirty Question</button>
            }
            <button type='submit' translate="transform(0%,250%)" className={classes.button}>Sumbit</button>

          </form>
          <button className={classes.CancelButton} onClick={CancelHandler}>Cancel</button>
        </Card>
      </Modal>
    );
  
};

export default ForgotPassword;