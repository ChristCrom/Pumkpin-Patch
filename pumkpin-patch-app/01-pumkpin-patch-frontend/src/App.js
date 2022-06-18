import { Fragment, useState } from "react";
import Header from "./components/FrontPage/Header/Header";
import PhotoGallery from "./components/FrontPage/PhotoGallery/PhotoGallery"
import FrontBanner from "./components/FrontPage/FrontBanner/FrontBanner"
import React from "react";
import LoginMain from "./components/Login/LoginMain";
import InformationPages from "./components/InformationPages/InformationPages";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [pageSelector, setPageSelector] = useState('');

  const LoginButtonActiveHandler = (event) => {
    setLoginActive(true);
  };
  const logOutHandler = (email, password) => {
    setIsLoggedIn(false);
    setLoginActive(false)
  };
  

  return (
    <Fragment>
      <InformationPages setPageSelector = {setPageSelector} PageSelector={pageSelector}/>
      <LoginMain setLoginActive={setLoginActive} loginActive={loginActive} setIsLoggedIn={setIsLoggedIn}/>
      <Header setPageSelector={setPageSelector}isLoggedIn={isLoggedIn} onLoginClick={LoginButtonActiveHandler} onLogoutClick={logOutHandler} />
      <FrontBanner setPageSelector={setPageSelector}/>
      <PhotoGallery />
    </Fragment>
  );
}

export default App;
