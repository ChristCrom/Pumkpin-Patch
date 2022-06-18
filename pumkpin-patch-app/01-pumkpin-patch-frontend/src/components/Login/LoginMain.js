import React from "react";
import { Fragment, useState } from "react";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
const LoginMain = props => {
    const DUMMY_USER =
    {
        email: "christcrom988@gmail.com",
        password: "phenoix1",
        sec1: "Django",
        sec2: "Burnet"
    };

    
    const [forgotPassword, setForgotPassword] = useState(false);

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




    return (
        <Fragment>
            {forgotPassword && <ForgotPassword onForgotPassword={ForgotPasswordEvent} />}
            {props.loginActive && <LoginPage onLogin={loginHandler} onLoginClick={LoginNotActiveHandler} onForgotPassword={ForgotPasswordEvent} />}
        </Fragment>
    );
};
export default LoginMain;