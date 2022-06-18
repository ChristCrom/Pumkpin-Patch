
import classes from "./HeaderLoginButton.module.css"
import React, { useState } from "react";




const HeaderLoginButton = props => {
    const [LoginClicked, setLoginClicked] = useState(false);
const LoginHandler = event =>{
    setLoginClicked(true);

}
const LoginClickedHandler = events =>{
    setLoginClicked(false);
}
    if (props.isLoggedIn){
    return (
        <button className={classes.button}  onClick={props.onLogOutClick} >
            
           
        <span>Logout</span>
    
    </button>
    );
}
if( !props.isLoggedIn)
    return(
        <button className={classes.button}  onClick={props.onLoginClick } >
            
           
            <span>Login</span>
        
        </button>
    );
};

export default HeaderLoginButton;