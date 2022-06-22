import classes from "./HeaderLoginButton.module.css"
import React, { Fragment, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const HeaderLoginButton = props => {
    
    
    
     

    if ( props.isLoggedIn ) {
    return(
       
        <button className={classes.button}  onClick={props.onLogOutClick} >
            
           
        <span>Logout</span>
    
    </button>
   
    )}
    else {
        return(
            <button className={classes.button}  onClick={props.onLoginClick } >
                
               
                <span>Login</span>
            
            </button>
        );
      // No user is signed in.
    }

  };
export default HeaderLoginButton;