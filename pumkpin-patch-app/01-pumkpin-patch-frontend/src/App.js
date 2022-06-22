import { Fragment, useState } from "react";
import Header from "./components/FrontPage/Header/Header";
import PhotoGallery from "./components/FrontPage/PhotoGallery/PhotoGallery"
import FrontBanner from "./components/FrontPage/FrontBanner/FrontBanner"
import React from "react";
import LoginMain from "./components/Login/LoginMain";
import InformationPages from "./components/InformationPages/InformationPages";
import "firebase/compat";
import firebase from 'firebase/compat/app';


function App() {
  
  const [user,setUser] = useState(localStorage.getItem('user'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [pageSelector, setPageSelector] = useState('');

  const LoginButtonActiveHandler = (event) => {
    setLoginActive(true);
  };
  const logOutHandler = (email, password) => {
    firebase.auth().signOut();
    setUser(null);
    localStorage.setItem("user",null);
    setIsLoggedIn(false);
    setLoginActive(false)
  };
  const config = {
    apiKey: 'AIzaSyCublmOZZ47OTX3ktg1f1JExx8QDapNaQI',
    authDomain: 'pumpkin-patch-c17f4.firebaseapp.com',
    // ...
  };
   
 firebase.initializeApp(config);

  return (
    <Fragment>
      <InformationPages setPageSelector = {setPageSelector} PageSelector={pageSelector}/>
      <LoginMain isLoggedIn={isLoggedIn} setLoginActive={setLoginActive} loginActive={loginActive} setIsLoggedIn={setIsLoggedIn}  />
      <Header    user={user}setPageSelector={setPageSelector}isLoggedIn={isLoggedIn} onLoginClick={LoginButtonActiveHandler} onLogoutClick={logOutHandler} />
      <FrontBanner setPageSelector={setPageSelector}/>
      <PhotoGallery />
    </Fragment>
  );
}

export default App;
