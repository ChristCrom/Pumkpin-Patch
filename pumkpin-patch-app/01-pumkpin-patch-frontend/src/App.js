import { Fragment } from "react";
import Cart from "./components/Login/Cart";
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
