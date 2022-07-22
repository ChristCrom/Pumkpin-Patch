import classes from "./HeaderLoginButton.module.css"
import React, { Fragment, useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const HeaderLoginButton = props => {
const [users, setUsers] = useState(false)
  useEffect(() =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      setUsers(true);
    }else{
      setUsers(false)
    }
    })
  },[])
  if(users ===true || props.isLoggedIn ==true){
    console.log(firebase.auth().currentUser)
    return(
       
        <button className={classes.button}  onClick={props.onLogOutClick} >
            
           
        <span>Logout</span>
    
    </button>
   
    );}
    else{
        return(
            <button className={classes.button}  onClick={props.onLoginClick } >
                
               
                <span>Login</span>
            
            </button>
        );} 
     
     // No user is signed in.
    

  };
export default HeaderLoginButton;