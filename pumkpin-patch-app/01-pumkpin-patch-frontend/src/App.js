import { Fragment, useState } from "react";
import Header from "./components/FrontPage/Header/Header";
import PhotoGallery from "./components/FrontPage/PhotoGallery/PhotoGallery";
import FrontBanner from "./components/FrontPage/FrontBanner/FrontBanner";
import React from "react";
import LoginMain from "./components/Login/LoginMain";
import InformationPages from "./components/InformationPages/InformationPages";
import "firebase/compat";
import firebase from "firebase/compat/app";
import AdminPage from "./components/Admin/AdminPage";
import { Route, Router, Routes } from "react-router-dom";
import MembersMain from "./components/Members/MembersMain";
import Profile from "./components/Members/Profile";
import Enroll from "./components/Enrollment/Enroll";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [pageSelector, setPageSelector] = useState("");

  const LoginButtonActiveHandler = (event) => {
    setLoginActive(true);
  };
  const logOutHandler = (email, password) => {
    firebase.auth().signOut();

    setIsLoggedIn(false);
    setLoginActive(false);
  };

  const config = {
    apiKey: "AIzaSyCublmOZZ47OTX3ktg1f1JExx8QDapNaQI",
    authDomain: "pumpkin-patch-c17f4.firebaseapp.com",
    projectId: "pumpkin-patch-c17f4",
    // ...
  };

  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

  return (
    <Fragment>
      <Route path="/home">
        <Header
          setPageSelector={setPageSelector}
          isLoggedIn={isLoggedIn}
          onLoginClick={LoginButtonActiveHandler}
          onLogoutClick={logOutHandler}
        />
        <FrontBanner setPageSelector={setPageSelector} />
        <LoginMain
          isLoggedIn={isLoggedIn}
          setLoginActive={setLoginActive}
          loginActive={loginActive}
          setIsLoggedIn={setIsLoggedIn}
        />
        <InformationPages
          setPageSelector={setPageSelector}
          PageSelector={pageSelector}
        />
        <PhotoGallery />
      </Route>

      <Route path="/waitlist">
        <Header
          setPageSelector={setPageSelector}
          isLoggedIn={isLoggedIn}
          onLoginClick={LoginButtonActiveHandler}
          onLogoutClick={logOutHandler}
        />
        <InformationPages
          setPageSelector={setPageSelector}
          PageSelector={pageSelector}
        />
        <LoginMain
          isLoggedIn={isLoggedIn}
          setLoginActive={setLoginActive}
          loginActive={loginActive}
          setIsLoggedIn={setIsLoggedIn}
        />
        <MembersMain />
      </Route>
      <Route path="/profile">
        <Header
          setPageSelector={setPageSelector}
          isLoggedIn={isLoggedIn}
          onLoginClick={LoginButtonActiveHandler}
          onLogoutClick={logOutHandler}
        />
        <InformationPages
          setPageSelector={setPageSelector}
          PageSelector={pageSelector}
        />
        <LoginMain
          isLoggedIn={isLoggedIn}
          setLoginActive={setLoginActive}
          loginActive={loginActive}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Profile />
      </Route>
      <Route path="/admin">
        <Header
          setPageSelector={setPageSelector}
          isLoggedIn={isLoggedIn}
          onLoginClick={LoginButtonActiveHandler}
          onLogoutClick={logOutHandler}
        />
        <InformationPages
          setPageSelector={setPageSelector}
          PageSelector={pageSelector}
        />
        <LoginMain
          isLoggedIn={isLoggedIn}
          setLoginActive={setLoginActive}
          loginActive={loginActive}
          setIsLoggedIn={setIsLoggedIn}
        />
        <AdminPage />
      </Route>
      <Route path="/enroll">
        {/* <Header    setPageSelector={setPageSelector}isLoggedIn={isLoggedIn} onLoginClick={LoginButtonActiveHandler} onLogoutClick={logOutHandler} /> 
        <InformationPages setPageSelector = {setPageSelector} PageSelector={pageSelector}/>
        <LoginMain isLoggedIn={isLoggedIn} setLoginActive={setLoginActive} loginActive={loginActive} setIsLoggedIn={setIsLoggedIn}  /> */}
        <Enroll />
      </Route>
    </Fragment>
  );
}

export default App;
