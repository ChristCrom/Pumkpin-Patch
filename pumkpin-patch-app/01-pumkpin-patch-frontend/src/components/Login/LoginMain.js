import React from "react";
import { Fragment, useState } from "react";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import ChangePassword from "./ChangePassword";
const LoginMain = props => {
    var DUMMY_USER =
    {
        email: "christcrom988@gmail.com",
        password: "phenoix1",
        sec1: "Django",
        sec2: "Burnet"
    };

    const [forgotPassword, setForgotPassword] = useState(false);
    const [changePassword, setChangePassword] =useState(true)
    const [passwordForogtVeri, setPasswordForgotVeri] = useState(false);


    const onForgotSubmit = (email, sec1, sec2) => {
        if (email === DUMMY_USER.email && sec1 === DUMMY_USER.sec1 && sec2 === DUMMY_USER.sec2) {
            console.log("its supposed to work on forgotsbmit")
            setPasswordForgotVeri(true);
        }
        else if (email != DUMMY_USER.email) {
            alert("User with Given email does not exisit Please try again with valid email")
        }
        else {
            alert("One or Both of your Security Questions are incorrect please try again!")
        }

    };
    const ForgotPasswordEvent = event => {
        setForgotPassword(event);
    };

    const loginHandler = (email, password) => {
        if (DUMMY_USER.email.includes(email) && DUMMY_USER.password.includes(password)) {
            props.setIsLoggedIn(true);
            props.setLoginActive(false)
        } else {
            alert("You are not a member! Get out of here!");
        }
    };

    const LoginNotActiveHandler = event => {
        props.setLoginActive(false)
    };

    const onPasswordChange = event =>{
        console.log(event)
        setChangePassword(false);
        DUMMY_USER.password = event.toString();
        console.log(DUMMY_USER.password)
        
    }


  


    return (
        <Fragment>
        {passwordForogtVeri && changePassword && <ChangePassword  onPasswordChange = {onPasswordChange} setChangePassword={setChangePassword}/>}
            {forgotPassword && <ForgotPassword onForgotSubmit={onForgotSubmit} onForgotPassword={ForgotPasswordEvent} />}
            {props.loginActive && <LoginPage   onLogin={loginHandler} onLoginClick={LoginNotActiveHandler} onForgotPassword={ForgotPasswordEvent} />}
        </Fragment>
    );
};
export default LoginMain;