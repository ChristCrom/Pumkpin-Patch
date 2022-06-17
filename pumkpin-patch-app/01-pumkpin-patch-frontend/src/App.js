import { Fragment } from "react";
import Login from "./components/Login/Login";
import Header from "./components/Layout/Header";
import FrontPage from "./components/Meals/FrontPage";
import React from "react";
function App() {
  return (
    <Fragment>
      
      <Header />
      <main>
      <FrontPage />  
      </main>
    </Fragment>
  );
}

export default App;
