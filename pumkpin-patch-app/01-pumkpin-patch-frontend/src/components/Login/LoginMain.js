import React from "react";
import { Fragment, useState } from "react";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import ChangePassword from "./ChangePassword";
import LoginOfficial from "./LoginOfficial";
const LoginMain = (props) => {
  var DUMMY_USER = {
    email: "christcrom988@gmail.com",
    password: "phenoix1",
    sec: ["Django", "Burnet", "Cromer", "NissanTitan"],
  };

  const [forgotPassword, setForgotPassword] = useState(false);
  const [changePassword, setChangePassword] = useState(true);
  const [passwordForogtVeri, setPasswordForgotVeri] = useState(false);

  const onForgotSubmit = (email, sec1, sec2, sec3, sec4, needed) => {
    console.log(needed);
    var count = 0;
    if (DUMMY_USER.sec.includes(sec1)) {
      count++;
    }
    if (DUMMY_USER.sec.includes(sec2)) {
      count++;
    }
    if (DUMMY_USER.sec.includes(sec3)) {
      count++;
    }
    if (DUMMY_USER.sec.includes(sec4)) {
      count++;
    }
    if (count > needed) {
      setPasswordForgotVeri(true);
      setChangePassword(true);
    } else {
      alert(
        "One or all of your Security Questions are incorrect please try again!"
      );
    }
  };
  const onEmailBlur = (email) => {
    if (email !== DUMMY_USER.email) {
      alert(
        "User with Given email does not exisit Please try again with valid email"
      );
    }
  };
  const ForgotPasswordEvent = (event) => {
    setForgotPassword(event);
  };

  const loginHandler = (email, password) => {
    if (
      DUMMY_USER.email.includes(email) &&
      DUMMY_USER.password.includes(password)
    ) {
      props.setIsLoggedIn(true);
      props.setLoginActive(false);
    } else {
      alert("You are not a member! Get out of here!");
    }
  };

  const LoginNotActiveHandler = (event) => {
    props.setLoginActive(false);
  };

  const onPasswordChange = (event) => {
    setChangePassword(false);
    DUMMY_USER.password = event.toString();
    props.setLoginActive(true);
    alert("Success! your password has been updated.");
  };

  return (
    <Fragment>
      {passwordForogtVeri && changePassword && (
        <ChangePassword
          setLoginActive={props.setLoginActive}
          onPasswordChange={onPasswordChange}
          setChangePassword={setChangePassword}
        />
      )}
      {forgotPassword && (
        <ForgotPassword
          onEmailBlur={onEmailBlur}
          setLoginActive={props.setLoginActive}
          onForgotSubmit={onForgotSubmit}
          onForgotPassword={ForgotPasswordEvent}
        />
      )}
      {props.loginActive && (
        <LoginOfficial
          setIsLoggedIn={props.setIsLoggedIn}
          isLoggedIn={props.isLoggedIn}
          onLogin={loginHandler}
          onLoginClick={LoginNotActiveHandler}
          onForgotPassword={ForgotPasswordEvent}
        />
      )}
    </Fragment>
  );
};
export default LoginMain;
